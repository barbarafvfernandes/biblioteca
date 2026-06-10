import React from 'react';
import BookForm from './BookForm';
import BookItem from './BookItem';
import { useBooks } from '../hooks/useBooks'; 

const BookList: React.FC = () => {
  const { books, loading, error, addBook, deleteBook } = useBooks();

  return (
    <>
      {/*Formlário renderizado aqui */}
      <BookForm onAddBook={addBook} /> 
      
      <h3>Meus Livros</h3>
      
      {loading && <p>Carregando catálogo...</p>}
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {!loading && !error && books.length === 0 && (
        <p>Nenhum livro cadastrado.</p>
      )}
      
      {!loading && !error && books.length > 0 && (
        books.map((book) => (
          <BookItem key={book._id} book={book} onDelete={deleteBook} />
        ))
      )}
    </>
  );
};

export default BookList;
