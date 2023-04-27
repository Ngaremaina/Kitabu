import React from "react";
import { Button, Card } from 'react-bootstrap';

function BookItem({title, subtitle, author, published, publisher, pages, price, quantity, sold, description, cover}){

    return (
        <Card className ="text-white border-dark bg-dark mb-3" style={{width :"19rem", margin: "8px"}}>
            <img className = "card-img-top" src={cover} alt="Book Cover"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Kshs. {price}</p>
                <p className="card-text"><small>Available copies: {quantity - sold}</small></p>
                <Button className="btn btn-primary">Show details</Button>
                <div class="card-footer mt-6">
                    <Button type="button" id ="buybook" className="btn btn-primary mt-64">Buy Book</Button>
                </div>
                
            </div>
            
        </Card>      
       
    
     
    )

}

export default BookItem