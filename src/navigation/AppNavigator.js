import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import BookListScreen from '../screens/BookListScreen';
import { useTheme } from '../hooks/useTheme';

const Stack = createStackNavigator();

const ThemeToggleButton = () => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={theme.toggleTheme}
      style={{ marginRight: 15 }}
    >
      <Ionicons
        name={theme.isDark ? "sunny" : "moon"}
        size={24}
        color={theme.colors.text.primary}
      />
    </TouchableOpacity>
  );
};

function AppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.surface,
            elevation: 4,
            shadowColor: theme.colors.text.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          },
          headerTintColor: theme.colors.text.primary,
          headerTitleStyle: {
            ...theme.typography.h2,
            color: theme.colors.text.primary,
          },
          headerRight: () => <ThemeToggleButton />,
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Início',
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="BookList" 
          component={BookListScreen}
          options={{
            title: 'Lista de Livros',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
