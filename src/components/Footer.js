import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        
            <footer className="py-3 mt-5">
                <ul className="nav justify-content-center border-bottom mb-3">
                    <Link className="nav-item nav-link px-2 text-body-secondary" to="/">Home</Link>
                    <Link className="nav-item nav-link px-2 text-body-secondary" to="/addbook">Add Book</Link>
                    <Link className="nav-item nav-link px-2 text-body-secondary" to="/contact us">Contact Us</Link>
                    
                    
                </ul>
                <p class="text-center justify-content-center" style={{marginLeft:"50px", marginRight:"50px"}}>Kitabu is a web application that shows the user a collection of books. The user can view a list of their favorite books along with information about them, such the author, summary, price, and publisher, to mention a few. Also, the user can add their own book to the app and view it listed with all the other books. Also, the user has the option to update their own book by adding or deleting any elements they see fit. Also, if a person doesn't want to see the book, they can delete it. The user may also search for their preferred book by its title, such as Harry Potter.</p>
                <p class="text-center text-body-secondary">© 2023 Vitabu</p>
            </footer>
       
    )
}

export default Footer