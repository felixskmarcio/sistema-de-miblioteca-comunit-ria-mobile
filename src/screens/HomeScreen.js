import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    title: {
      ...theme.typography.h1,
      color: theme.colors.text.primary,
      marginBottom: 30,
    },
    buttonContainer: {
      width: '80%',
    },
    button: {
      backgroundColor: theme.colors.primary,
      padding: 15,
      borderRadius: 8,
      marginVertical: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    buttonText: {
      ...theme.typography.button,
      color: theme.colors.text.primary,
      marginLeft: 8,
    },
    themeToggle: {
      position: 'absolute',
      top: 20,
      right: 20,
      padding: 10,
    }
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.themeToggle}
        onPress={theme.toggleTheme}
      >
        <Ionicons 
          name={theme.isDark ? "sunny" : "moon"} 
          size={24} 
          color={theme.colors.text.primary}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Biblioteca Comunitária</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('BookList')}
        >
          <Ionicons 
            name="book" 
            size={24} 
            color={theme.colors.text.primary}
          />
          <Text style={styles.buttonText}>Lista de Livros</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons 
            name="person" 
            size={24} 
            color={theme.colors.text.primary}
          />
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
