import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function BookItem({id, title, price, author, cover}){
    //add item to cart
   function addToCart(){
    console.log(id)

   }
     
    //Rendering the card that displays the list of books
    return (
        <Card className ="text-white border-dark bg-dark d-flex flex-column" style={{width :"15rem", margin: "5px"}}>
            <img className = "card-img-top" src={cover} alt="Book Cover"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Kshs. {price}</p>
                <p className="card-text"><small>by {author}</small></p>
                
                <Link className="btn btn-success mb-4 " to={`/${id}`}>Show details</Link>
                <div class="card-footer mt-6">
                    <div>
                    <Button type="button" style={{width: "90%"}} className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-2" onClick={addToCart}>Add To Cart</Button>

                    </div>
                    
                </div>
                
            </div>
            
        </Card>      
       
    
     
    )

}

export default BookItem