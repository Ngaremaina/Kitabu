import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function BookDetail(){
    const [book, setBook] = useState("");
    const {title, subtitle, author, published, publisher, pages, price, quantity, sold, description, cover} = book
    const params= useParams()
    console.log(params)
    const { id } = useParams()



    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setBook(data)})
    }, [id])

    console.log(book)

    return(
        <div style={{backgroundColor:"black", color:"white"}}>
            <p>
                {title}
            </p>
            <p>
                {description}
            </p>

        </div>
    )

}

export default BookDetail