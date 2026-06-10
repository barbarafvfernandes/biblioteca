import React from 'react';
import type { Book } from '../types';

interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
      <h3>{book.title}</h3>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Status:</strong> {book.status}</p>
      <button onClick={() => onDelete(book._id)} style={{ backgroundColor: '#ff4d4f', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '3px' }}>
        Remover
      </button>
    </div>
  );
};

export default BookItem;
