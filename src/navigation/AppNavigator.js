import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BookListScreen from '../screens/BookListScreen';

// Criar o navegador de pilha
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      {/* Configuração do navegador de pilha */}
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4a90e2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Tela inicial */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Início'
          }}
        />
        {/* Tela de lista de livros */}
        <Stack.Screen 
          name="BookList" 
          component={BookListScreen}
          options={{
            title: 'Lista de Livros'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
