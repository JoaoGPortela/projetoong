import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AtendimentoScreen from './src/pages/main';
import RelatoriosScreen from './src/pages/relatorios/relatorios';
import { RootStackParamList } from './src/@types/types';   // Importa o tipo de navegação

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Atendimento">
        <Stack.Screen name="Atendimento" component={AtendimentoScreen} />
        <Stack.Screen name="Relatórios" component={RelatoriosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
