import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BookListScreen = () => {
  // Estado para busca e livros filtrados
  const [searchText, setSearchText] = useState(''); // ✅ useState
  const [books, setBooks] = useState([ // ✅ useState
    { id: '1', title: 'Dom Casmurro', author: 'Machado de Assis', favorite: false },
    { id: '2', title: 'O Alquimista', author: 'Paulo Coelho', favorite: false },
    { id: '3', title: 'Memórias Póstumas', author: 'Machado de Assis', favorite: false },
  ]);

  // Função para favoritar livro
  const toggleFavorite = (id) => {
    setBooks(books.map(book => 
      book.id === id ? {...book, favorite: !book.favorite} : book
    ));
  };

  // Função que renderiza cada item da lista
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.bookItem}
      onPress={() => toggleFavorite(item.id)}
    >
      <View style={styles.bookContent}>
        <Ionicons name="book-outline" size={24} color="#4a90e2" />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.bookAuthor}>{item.author}</Text>
        </View>
        <Ionicons 
          name={item.favorite ? "heart" : "heart-outline"} 
          size={24} 
          color={item.favorite ? "red" : "#666"}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar livros..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <FlatList
        data={books.filter(book => 
          book.title.toLowerCase().includes(searchText.toLowerCase()) ||
          book.author.toLowerCase().includes(searchText.toLowerCase())
        )}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    margin: 10,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  bookItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  bookContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookInfo: {
    flex: 1,
    marginLeft: 10,
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
