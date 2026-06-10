import React from 'react';
import BookList from './components/BookList';

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <BookList />
    </div>
  );
};

export default App;





/*import BookForm from './components/BookForm'; 
import BookItem from './components/BookItem';
import { useBooks } from './hooks/useBooks';


const App: React.FC = () => {

const { books, loading, error, addBook, deleteBook } = useBooks();

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
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
    </div>
  );
};

export default App;*/


