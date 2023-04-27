import React, { useState,useEffect } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


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
            // console.log(data)
            setBook(data)})
    }, [id])

    function handleDelete(){
        fetch(`http://localhost:3000/books/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(data => setBook(data))
    }

    // console.log(book)

    return(
        <div className="container-fluid text-white">

            <div class="container">
                <div class="row">
                    <div class="col">
                        <img class="img-fluid img-thumbnail" style={{maxHeight:"500px", maxWidth:"300px", float:"right",marginRight:"20px"}} src={cover}/>
                    </div>
                    <div class="col" style={{marginTop:"20px"}}>
                        <p>{title}</p>
                        <p>{subtitle}</p>
                        <p>by {author}</p>
                        <p>Kshs. {price}</p>
                        <p>Available copies: {quantity - sold}</p>
                        
                    </div>
                    
                </div>
            </div>
            <div style={{margin:"50px"}}>
            <small>Description</small>
            <p>{description}</p>
            <p>Publish Date: {published}</p>
            <p>Publisher: {publisher}</p>
            <p>{pages} pages </p>
            <Button type="button" className="btn btn-primary mt-64" style={{width:"100%", marginBottom:"30px"}}>Buy Book</Button>
           

            </div>
           
            <Link className="btn btn-info" to={`/editbook/${id}`}>Edit Book</Link>
            <button className = "btn btn-danger" style={{float: "right"}}onClick={handleDelete}>Delete Book</button>
            

        </div>
       
    )

}

export default BookDetail