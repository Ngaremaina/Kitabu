import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import BookList from './BookList';
import NewBook from './NewBook';
import BookDetail from './BookDetail';
import EditBook from './EditBook';
import Footer from './Footer';
function App() {
  const [books, setBook] = useState([])
 
  //Fetching data from json file
  useEffect(() => {
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(data => setBook(data))
  },[])

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
      </Routes>
      <Footer />
  
    </div>
  );
}

export default App;
