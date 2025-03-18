import { useState } from 'react';
import { FaHeart, FaSearch, FaFilter, FaBook } from 'react-icons/fa';
import PropTypes from 'prop-types';

// Componente de lista de livros
export const BookList = ({ books }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const toggleFavorite = (bookId) => {
    setFavorites(prev => 
      prev.includes(bookId) 
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  return (
    <div className="book-container">
      <div className="search-filter">
        <div className="search-box">
          <FaSearch />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar livros..."
          />
        </div>

        
        <div className="filter-box"> 
          <FaFilter />
          <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
            <option value="all">Todos</option>
            <option value="favorites">Favoritos</option>
            <option value="available">Disponíveis</option>
          </select>
        </div>
      </div>

      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <FaBook className="book-icon" />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button 
              onClick={() => toggleFavorite(book.id)}
              className={favorites.includes(book.id) ? 'favorite' : ''}
            >
              <FaHeart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired
};