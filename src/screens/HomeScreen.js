import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // ✅ View e Text

const HomeScreen = ({ navigation }) => {
  return (
    // Container principal - View 
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca Comunitária</Text>
      
      {/* Container dos botões */}
      <View style={styles.buttonContainer}> // ✅ Button + onPress
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('BookList')}
        >
          <Text style={styles.buttonText}>Lista de Livros</Text>
        </TouchableOpacity>

        {/* Botão para navegação ao perfil */}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
