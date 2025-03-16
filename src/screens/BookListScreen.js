import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const BookListScreen = () => {
  // Array com os dados dos livros
  const books = [
    { id: '1', title: 'Dom Casmurro', author: 'Machado de Assis' },
    { id: '2', title: 'O Alquimista', author: 'Paulo Coelho' },
    { id: '3', title: 'Memórias Póstumas', author: 'Machado de Assis' },
  ];

  // Função que renderiza cada item da lista
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.bookItem}>
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.author}</Text>
    </TouchableOpacity>
  );

  // Componente principal
  return (
    <View style={styles.container}>
      {/* FlatList para mostrar a lista de livros */}
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
  },
});

export default BookListScreen;
