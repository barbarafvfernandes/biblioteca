import { useState, useEffect } from 'react'; 
import axios from 'axios';
import type { Book } from '../types';

const API_URL = 'https://crudcrud.com/api/eab18c138d53453ba5bc3b2f08e827f1/livros';

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Book[]>(API_URL);
      setBooks(response.data);
    } catch (err) {
      setError('Erro ao carregar os livros.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (newBook: Omit<Book, '_id'>) => {
    try {
      const response = await axios.post<Book>(API_URL, newBook);
      setBooks((prevBooks) => [...prevBooks, response.data]);
    } catch (err) {
      alert('Erro ao adicionar o livro.');
      console.error(err);
      throw err;
    }
  };

  const deleteBook = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    } catch (err) {
      alert('Erro ao remover o livro.');
      console.error(err);
    }
  };

  return { books, loading, error, addBook, deleteBook };
};
