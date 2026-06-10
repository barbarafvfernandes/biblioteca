import React, { useState, type ChangeEvent } from 'react';
import type { Book } from '../types';

interface BookFormProps {
    onAddBook: (bookData: Omit<Book, '_id'>) => Promise<void>;
}

const BookForm: React.FC<BookFormProps> = ({ onAddBook }) => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [status, setStatus] = useState<'Lido' | 'Não lido'>('Não lido');

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title.trim() || !author.trim()) {
            alert('Preencha todos os campos!');
            return;
        }

        try {
            // Envia os dados para a função passada via props
            await onAddBook({ title, author, status });

            // Limpa o formulário 
            setTitle('');
            setAuthor('');
            setStatus('Não lido');
        } catch (err) {
            console.error('Erro ao adicionar o livro:', err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}
        >
            <h4>Adicionar Novo Livro</h4>

            <div style={{ marginBottom: '10px' }}>
                <label>Título: </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                />
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label>Autor: </label>
                <input
                    type="text"
                    value={author}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
                />
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label>Status: </label>
                <select
                    value={status}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value as 'Lido' | 'Não lido')}
                >
                    <option value="Não lido">Não lido</option>
                    <option value="Lido">Lido</option>
                </select>
            </div>

            <button
                type="submit"
                style={{ backgroundColor: '#1890ff', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '3px' }}
            >
                Cadastrar
            </button>
        </form>
    );
};

export default BookForm;

