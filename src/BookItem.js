import React from "react";
import { Card } from 'react-bootstrap';

function BookItem({title, subtitle, author, published, publisher, pages, price, quantity, sold, description, cover}){

    return (
        <Card className ="text-white border-dark bg-dark mb-3" style={{width :"19rem", margin: "8px "}}>
            <img className = "card-img-top" src={cover} alt="Book Cover"/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">Kshs. {price}</p>
                <p class="card-text"><small class="text-muted">Available copies: {quantity - sold}</small></p>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
                {/* <a href={title} class="btn btn-primary">Go somewhere</a> */}
            </div>
            
        </Card>      
       
    
     
    )

}

export default BookItem