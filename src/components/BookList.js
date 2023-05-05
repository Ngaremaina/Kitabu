import React from "react";
import BookItem from "./BookItem";

function BookList({books}){
    //function that maps each book from json server
    const displayBooks = books.map(book => {
        //sending data to the BookItem component
        return <BookItem key = {book.id} id = {book.id} title={book.title} price={book.price} author = {book.author} sold = {book.sold} cover={book.cover} />
    })
    //calling our function
    return (
        <div className="card-deck col d-flex p-3 justify-content-center">
            {displayBooks}
        </div>
        
    )
}

export default BookList