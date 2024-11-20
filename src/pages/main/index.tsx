import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Platform, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../src/@types/types";

type AtendimentoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Atendimento"
>;

interface AtendimentoScreenProps {
  navigation: AtendimentoScreenNavigationProp;
}

const storage = Platform.OS === "web" ? window.localStorage : AsyncStorage;

const AtendimentoScreen: React.FC<AtendimentoScreenProps> = ({
  navigation,
}) => {
  const [triagem, setTriagem] = useState("");
  const [medicacoes, setMedicacoes] = useState("");
  const [vacinas, setVacinas] = useState("");
  const [demaisProcedimentos, setDemaisProcedimentos] = useState("");

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString(); // Formato: DD/MM/AAAA
  };

  const handleEnviar = async () => {
    const dataDoDia = getCurrentDate();
    const relatorioId = Date.now(); // ID único baseado no timestamp

    const relatorio = {
      id: relatorioId,
      data: dataDoDia,
      triagem,
      medicacoes,
      vacinas,
      demaisProcedimentos,
    };

    try {
      // Armazenar relatório com um ID único
      await storage.setItem(
        `relatorio_${relatorioId}`,
        JSON.stringify(relatorio)
      );
      Alert.alert("Sucesso", "Relatório salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar relatório:", error);
      Alert.alert("Erro", "Falha ao salvar o relatório.");
    }
  };

  const handleLimpar = () => {
    setTriagem("");
    setMedicacoes("");
    setVacinas("");
    setDemaisProcedimentos("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Relatório Diário de Atendimentos</Text>

      <Text style={styles.label}>Triagem</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a triagem"
        value={triagem}
        onChangeText={setTriagem}
      />

      <Text style={styles.label}>Medicações</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite as medicações"
        value={medicacoes}
        onChangeText={setMedicacoes}
      />

      <Text style={styles.label}>Vacinas</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite as vacinas"
        value={vacinas}
        onChangeText={setVacinas}
      />

      <Text style={styles.label}>Demais Procedimentos</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite outros procedimentos"
        value={demaisProcedimentos}
        onChangeText={setDemaisProcedimentos}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleLimpar}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => navigation.navigate("Relatórios")}
        >
          <Text style={styles.buttonText}>Ver Relatórios</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Médicos nas Ruas</Text>
    </View>
  );
};

export default AtendimentoScreen;
