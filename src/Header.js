import React, { useState } from "react";
import Link from "./Link"
import { Nav,Button,Form,InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

function Header({searchBook}){
    const [search, setSearch] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        searchBook(search)
    }
    return (
        <Nav class="navbar navbar-expand-sm text-white">
            <div class="container-fluid ">
                <Link target="#" text="Vitabu"/>
                <div class="collapse navbar-collapse justify-content-end">
                    <Form class="navbar-form navbar-right" id="search-form" onSubmit={handleSubmit}>
                        <InputGroup>
                            <input type="text" class="form-control" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}/>
                            <Button class="btn btn-default" type="submit">
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