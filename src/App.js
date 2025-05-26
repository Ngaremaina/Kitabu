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
import { CirclesWithBar } from "react-loader-spinner"
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [books, setBook] = useState([])
  const [loading, setLoading] = useState(false)
 
  //Fetching data from json file
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://book-data.onrender.com/books");
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);


  //adding book to the server
  const addBook = (newbook)=>{
    setBook([...books, newbook])
  }

  //searching book by its title
  const searchBook = (search) => {
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setBook(filtered);
};

 return (
    <>
      {loading ? (
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
        />
      ) : (
        <div className='mybooks'>
          <Analytics />
          <Header searchBook={searchBook} />
          <Routes>
            <Route path='/' element={<BookList books={books} />} />
            <Route path='/addbook' element={<NewBook addBook={addBook} />} />
            <Route path='/:id' element={<BookDetail />} />
            <Route path='/editbook/:id' element={<EditBook addBook={addBook} />} />
            <Route path='/contact-us' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
