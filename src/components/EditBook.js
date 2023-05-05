import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function EditBook({addBook}){
    //declaring the params function
    const params= useParams()
    console.log(params)
    const { id } = useParams()
    //declaring the navigate function
    const navigate = useNavigate()
    //declaring our object variables
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [author, setAuthor] = useState("")
    const [published, setPublished] = useState("")
    const [publisher, setPublisher] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [sold, setSold] = useState("")
    const [description, setDescription] = useState("")
    const [cover, setCover] = useState("")
    const [pages, setPages] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const editbook = {
            title:title,
            subtitle:subtitle,
            author:author,
            published:published,
            publisher:publisher,
            price:price,
            quantity:quantity,
            sold:sold,
            description:description,
            pages:pages,
            cover:cover
        }
        //patching object to the server
        fetch(`https://book-data.onrender.com/books/${id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(editbook)
        })
        .then(res => res.json())
        .then(data => addBook(data))

        //clearing the input fields
        setInputClear()
        //Navigate to the home page
        navigate('/');
        
    }

    function setInputClear(){
        setCover("")
        setTitle("")
        setSubtitle("")
        setAuthor("")
        setPrice("")
        setQuantity("")
        setSold("")
        setPages("")
        setPublisher("")
        setPublished("")
        setDescription("")
        
    }
    //rendering the form
    return(
        <form className="bg-dark text-white" onSubmit={handleSubmit} id="addBook">
            <p className="text-center mb-3" style={{fontSize:"25px"}}>Edit Book</p>
            <div className="mb-3">
                <label for="cover" className="form-label">Cover</label>
                <input type="text" className="form-control" id="cover" value = {cover} placeholder="https://www.jkrowling.com/wp-content/uploads/2016/10/HPATPS_Hero_OnGrey.png" onChange={e => setCover(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" value={title} placeholder="Harry Potter and the Philosopher's Stone" onChange={e => setTitle(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="subtitle" className="form-label">Subtitle</label>
                <input type="text" className="form-control" id="subtitle" value={subtitle} placeholder="An edition of Harry Potter and the Philosopher's Stone" onChange={e => setSubtitle(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="author" className="form-label">Author</label>
                <input type="text" className="form-control" id="author" value={author} placeholder="J. K. Rowling" onChange={e => setAuthor(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" value={price} placeholder="1000" onChange={e => setPrice(e.target.value)}/>

            </div>
            <div className="mb-3">
                <label for="quantity" className="form-label">Total Number of Books</label>
                <input type="number" className="form-control" id="quantity" value={quantity} placeholder="250" onChange={e => setQuantity(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="sold" className="form-label">Books Sold</label>
                <input type="number" className="form-control" id="sold" value={sold} placeholder="200" onChange={e => setSold(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" value={description} placeholder=" Harry Potter has never heard of Hogwarts School of Witchcraft and Wizardry...." onChange={e => setDescription(e.target.value)}/>  
            </div>
            
            <div className="mb-3">
                <label for="published" className="form-label">Publish Date</label>
                <input type="date" className="form-control" id="published" value={published} onChange={e => setPublished(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="publisher" className="form-label">Publisher</label>
                <input type="text" className="form-control" id="publisher" value={publisher} placeholder="Animus Kiadó" onChange={e => setPublisher(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="pages" className="form-label">Pages</label>
                <input type="number" className="form-control" id="pages" value={pages} placeholder="205" onChange={e => setPages(e.target.value)}/>
                
            </div>   
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )

}

export default EditBook