import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import BookList from './BookList';


function App() {
  const [books, setBook] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(data => setBook(data))
  })

  return (
    <div>
      <Header/>
      <BookList books={books}/>
    </div>
  );
}

export default App;
