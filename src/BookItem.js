import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function BookItem({id, title, price, quantity, sold, cover}){
     //adding a click event listener to our buy book button
     function buybook(){
        sold++
        fetch(`http://localhost:3000/books/${id}`,{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(sold)
        })   
    }

    // function showDetails(){
        
    // }

    return (
        <Card className ="text-white border-dark bg-dark" style={{width :"15rem", margin: "5px"}}>
            <img className = "card-img-top" src={cover} alt="Book Cover"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Kshs. {price}</p>
                <p className="card-text"><small>Available copies: {quantity - sold}</small></p>
                <Link className="btn btn-primary" to={`/${id}`}>Show details</Link>
                <div class="card-footer mt-6">
                    <Button type="button" id ="buybook" className="btn btn-primary mt-64">Buy Book</Button>
                </div>
                
            </div>
            
        </Card>      
       
    
     
    )

}

export default BookItem