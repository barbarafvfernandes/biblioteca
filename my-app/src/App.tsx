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



