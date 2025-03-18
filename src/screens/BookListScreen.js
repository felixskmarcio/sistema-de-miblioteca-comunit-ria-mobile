import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';

const BookListScreen = () => {
  const theme = useTheme();
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([
    { id: '1', title: 'Dom Casmurro', author: 'Machado de Assis', favorite: false },
    { id: '2', title: 'O Alquimista', author: 'Paulo Coelho', favorite: false },
    { id: '3', title: 'Memórias Póstumas', author: 'Machado de Assis', favorite: false },
  ]);

  const toggleFavorite = (id) => {
    setBooks(books.map(book => 
      book.id === id ? {...book, favorite: !book.favorite} : book
    ));
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: theme.colors.searchBar,
      margin: 10,
      borderRadius: 12,
      elevation: 2,
      shadowColor: theme.colors.text.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    searchInput: {
      ...theme.typography.searchInput,
      flex: 1,
      marginLeft: 10,
      color: theme.colors.text.primary,
    },
    bookItem: {
      backgroundColor: theme.colors.card,
      padding: 16,
      marginHorizontal: 10,
      marginVertical: 6,
      borderRadius: 12,
      elevation: 3,
      shadowColor: theme.colors.text.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    bookContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    bookInfo: {
      flex: 1,
      marginLeft: 12,
    },
    bookTitle: {
      ...theme.typography.bookTitle,
      color: theme.colors.text.primary,
    },
    bookAuthor: {
      ...theme.typography.bookAuthor,
      color: theme.colors.text.secondary,
      marginTop: 4,
    },
    emptyList: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    emptyText: {
      ...theme.typography.body1,
      color: theme.colors.text.secondary,
      textAlign: 'center',
      marginTop: 10,
    },
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.bookItem}
      onPress={() => toggleFavorite(item.id)}
      activeOpacity={0.7}
    >
      <View style={styles.bookContent}>
        <Ionicons 
          name="book" 
          size={24} 
          color={theme.colors.primary}
        />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.bookAuthor}>{item.author}</Text>
        </View>
        <Ionicons 
          name={item.favorite ? "heart" : "heart-outline"} 
          size={24} 
          color={item.favorite ? theme.colors.accent : theme.colors.text.secondary}
        />
      </View>
    </TouchableOpacity>
  );

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchText.toLowerCase()) ||
    book.author.toLowerCase().includes(searchText.toLowerCase())
  );

  const EmptyListComponent = () => (
    <View style={styles.emptyList}>
      <Ionicons 
        name="search" 
        size={48} 
        color={theme.colors.text.secondary}
      />
      <Text style={styles.emptyText}>
        Nenhum livro encontrado para "{searchText}"
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons 
          name="search" 
          size={20} 
          color={theme.colors.text.secondary}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar livros..."
          placeholderTextColor={theme.colors.text.secondary}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <FlatList
        data={filteredBooks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyListComponent}
        contentContainerStyle={filteredBooks.length === 0 && { flex: 1 }}
      />
    </View>
  );
};

export default BookListScreen;
