import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function BookItem({id, title, price, quantity, sold, cover}){

    function downloadbook(){
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
     
    
    return (
        <Card className ="text-white border-dark bg-dark" style={{width :"15rem", margin: "5px"}}>
            <img className = "card-img-top" src={cover} alt="Book Cover"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Kshs. {price}</p>
                <p className="card-text"><small>Available copies: {quantity - sold}</small></p>
                
                <Link className="btn btn-primary" to={`/${id}`}>Show details</Link>
                <div class="card-footer mt-6">
                    <Button type="button" id ="buybook" className="btn btn-primary mt-64" onClick={downloadbook}>Buy Book</Button>
                </div>
                
            </div>
            
        </Card>      
       
    
     
    )

}

export default BookItem