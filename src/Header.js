import React from "react";
import Link from "./Link"
import { Nav,Button,Form,InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

function Header(){
    return (
        <Nav class="navbar navbar-expand-sm text-white">
            <div class="container-fluid ">
                <Link target="#" text="Home"/>
                <div class="collapse navbar-collapse justify-content-end">
                    <Form class="navbar-form navbar-right" id="search-form">
                        <InputGroup>
                            <input type="text" class="form-control" placeholder="Search" name="search"/>
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