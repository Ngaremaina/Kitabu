import React, { useState } from "react";
import { Nav,Button,Form,InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

function Header({searchBook}){
    const [search, setSearch] = useState("")
    //passing the submit function that listens for the submit event listener
    const handleSubmit = (e) => {
        e.preventDefault()
        //calling the search function
        searchBook(search)
    }
    return (
        //displaying the nav bar
        <Nav className="navbar navbar-expand-sm text-white">
            <div className="container-fluid ">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/addbook" className="nav-link">Add Book</NavLink>
                <NavLink to='/contact us' className="nav-link">Contact Us</NavLink>
                <div className="collapse navbar-collapse justify-content-end">
                    <Form className="navbar-form navbar-right" id="search-form" onSubmit={handleSubmit}>
                        <InputGroup>
                            <input type="text" className="form-control" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}/>
                            <Button className="btn btn-default" type="submit">
                                <Search />
                            </Button>
                        </InputGroup>
                    </Form>
                </div>
            </div>
	    </Nav>
       
        
    )
}

export default Header