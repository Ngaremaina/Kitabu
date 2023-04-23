import React from "react";
import BookItem from "./BookItem";
function BookList({books}){

    const displayBooks = books.map(book => {
        return <BookItem title={book.title} subtitle={book.subtitle} author = {book.author} 
        published = {book.published} publisher={book.publisher} pages={book.pages} price={book.price} quantity = {book.quantity}
        sold = {book.sold} description = {book.description} cover={book.cover} />
    })

    return (
        <div class="card-deck col d-flex p-3 justify-content-center">
            {displayBooks}
        </div>
        
    )
}

export default BookList