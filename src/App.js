import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import NewBook from './components/NewBook';
import BookDetail from './components/BookDetail';
import EditBook from './components/EditBook';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [books, setBook] = useState([])
 
  //Fetching data from json file
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://book-data.onrender.com/books")
      .then(res => res.json())
      .then(data => setBook(data))
        
      .catch(err => console.error(err));
    }, 6000);
  
    return () => clearInterval(interval);
  }, []);

  //adding book to the server
  const addBook = (newbook)=>{
    setBook([...books, newbook])
  }

  //searching book by its title
  const searchBook = (search) => {
    const fetchResults = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
    return setBook(fetchResults)
  }

  return (
    //rendering the components
    <div className='mybooks'>
       <Header searchBook = {searchBook}/>
       {/*rendering the routes to the components*/}
      <Routes>
        <Route exact path='/' element={ <BookList books={books}/>}></Route>
        <Route path='/addbook' element={<NewBook addBook={addBook}/>}></Route>
        <Route path='/:id' element={<BookDetail />}></Route>
        <Route path='/editbook/:id' element={<EditBook addBook={addBook}/>}></Route>
        <Route path='/contact us' element={<Contact />}></Route>
      </Routes>
      <Footer />
  
    </div>
  );
}

export default App;
