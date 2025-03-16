import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const BookListScreen = () => {
  const books = [
    { id: '1', title: 'Dom Casmurro', author: 'Machado de Assis' },
    { id: '2', title: 'O Alquimista', author: 'Paulo Coelho' },
    { id: '3', title: 'Memórias Póstumas', author: 'Machado de Assis' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.bookItem}>
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.author}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

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
