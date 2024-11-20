import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../src/@types/types';

type RelatoriosScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Relatórios'>;

interface RelatoriosScreenProps {
  navigation: RelatoriosScreenNavigationProp;
}

const RelatoriosScreen: React.FC<RelatoriosScreenProps> = ({ navigation }) => {
  const [relatorios, setRelatorios] = useState<any[]>([]);

  useEffect(() => {
    const fetchRelatorios = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const relatoriosKeys = keys.filter(key => key.startsWith('relatorio_'));

        const relatoriosData = await Promise.all(
          relatoriosKeys.map(async (key) => {
            const relatorio = await AsyncStorage.getItem(key);
            return JSON.parse(relatorio || '{}');
          })
        );

        setRelatorios(relatoriosData);
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Falha ao carregar os relatórios.');
      }
    };

    fetchRelatorios();
  }, []);

  const handleRemover = async (index: number) => {
    try {
      const updatedRelatorios = [...relatorios];
      const relatorioToDelete = updatedRelatorios[index];

      // Remove o relatório do AsyncStorage com base no ID único
      await AsyncStorage.removeItem(`relatorio_${relatorioToDelete.id}`);

      // Remove o relatório do estado
      updatedRelatorios.splice(index, 1);
      setRelatorios(updatedRelatorios);

      Alert.alert('Sucesso', 'Relatório removido com sucesso!');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao remover o relatório.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Relatórios Salvos</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {relatorios.length === 0 ? (
          <Text style={styles.text}>Nenhum relatório encontrado.</Text>
        ) : (
          relatorios.map((relatorio, index) => (
            <View key={relatorio.id || `relatorio-${index}`} style={styles.reportCard}>
              <View style={styles.reportCardHeader}>
                <Text style={styles.reportCardTitle}>Data: {relatorio.data}</Text>
              </View>

              {/* Exibição das informações do relatório */}
              <View>
                {relatorio.triagem && (
                  <Text style={styles.reportCardText}>Triagem: {relatorio.triagem}</Text>
                )}
                {relatorio.medicacoes && (
                  <Text style={styles.reportCardText}>Medicações: {relatorio.medicacoes}</Text>
                )}
                {relatorio.vacinas && (
                  <Text style={styles.reportCardText}>Vacinas: {relatorio.vacinas}</Text>
                )}
                {relatorio.demaisProcedimentos && (
                  <Text style={styles.reportCardText}>Demais Procedimentos: {relatorio.demaisProcedimentos}</Text>
                )}
              </View>

              {/* Botão de remover */}
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemover(index)}
              >
                <Text style={styles.removeButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default RelatoriosScreen;
