import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import BookList from './BookList';
import NewBook from './NewBook';


function App() {
  const [books, setBook] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(data => setBook(data))
  })

  const addBook = (newbook)=>{
    setBook([...books, newbook])

  }

  return (
    <div className='mybooks'>
      <Header/>
      <BookList books={books}/>
      <NewBook addBook={addBook}/>
         
    </div>
  );
}

export default App;
