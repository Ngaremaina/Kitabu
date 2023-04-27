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

    return(
        <div className="container-fluid text-white">

            <div className="container">
                <div className="row">
                    <div className="col-sm-4 ">
                        <img className="img-fluid" style={{maxHeight:"502px", maxWidth:"450px", float:"left",marginRight:"20px"}} src={cover} alt="Book Cover"/>
                        
                        <Link className="btn btn-info mt-3 mb-4" to={`/editbook/${id}`}>Edit Book</Link>
                        <Button className = "btn btn-danger mt-3 mb-4" style={{float: "right"}}onClick={handleDelete}>Delete Book</Button>
                    </div>
                    <div className="col-sm-8 border border-dark rounded mb-5" >
                        <p style={{marginTop:"20px"}}>{title}</p>
                        <p>{subtitle}</p>
                        <p>by {author}</p>
                        <p>Kshs. {price}</p>
                        <p>Available copies: {quantity - sold}</p>
                        <p>Description</p>
                        <p>{description}</p>
                        <p>Publish Date: {published}</p>
                        <p>Publisher: {publisher}</p>
                        <p>{pages} pages </p>
                        
                        <Button type="button" className="btn btn-primary mt-4" style={{width:"100%", marginBottom:"30px"}}>Download Book</Button>

                        

                        
                    </div>
                    
                </div>
            </div>           

        </div>
       
    )

}

export default BookDetail