import React from "react";
import BookItem from "./BookItem";
function BookList({books}){

    const displayBooks = books.map(book => {
        return <BookItem key = {book.id} id = {book.id} title={book.title} price={book.price} author = {book.author} sold = {book.sold} cover={book.cover} />
    })

    return (
        <div className="card-deck col d-flex p-3 justify-content-center">
            {displayBooks}
        </div>
        
    )
}

export default BookList