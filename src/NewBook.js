import React, {useState} from "react";

function NewBook({addBook}){
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
        const newbook = {
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
        fetch("http://localhost:3000/books",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newbook)
        })
        .then(res => res.json())
        .then(data => addBook(data))
    }
    return (
        <form className="bg-dark text-white" onSubmit={handleSubmit} id="addBook">
            <p className="text-center mb-3">Add Book</p>
            <div className="mb-3">
                <label for="cover" class="form-label">Cover</label>
                <input type="text" class="form-control" id="cover" placeholder="http://image.jpg" onChange={e => setCover(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Harry Potter és a bölcsek köve" onChange={e => setTitle(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="subtitle" class="form-label">Subtitle</label>
                <input type="text" class="form-control" id="subtitle" placeholder="An edition of Harry Potter and the Philosopher's Stone" onChange={e => setSubtitle(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="author" class="form-label">Author</label>
                <input type="text" class="form-control" id="author" placeholder="J. K. Rowling" onChange={e => setAuthor(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="text" class="form-control" id="price" placeholder="1000" onChange={e => setPrice(e.target.value)}/>

            </div>
            <div className="mb-3">
                <label for="quantity" class="form-label">Total Number of Books</label>
                <input type="number" class="form-control" id="quantity" placeholder="250" onChange={e => setQuantity(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="sold" class="form-label">Books Sold</label>
                <input type="number" class="form-control" id="sold" placeholder="200" onChange={e => setSold(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="description" class="form-label">Description</label>
                <input type="text" class="form-control" id="description" placeholder=" Harry Potter has never heard of Hogwarts School of Witchcraft and Wizardry...." onChange={e => setDescription(e.target.value)}/>  
            </div>
            
            <div className="mb-3">
                <label for="published" class="form-label">Publish Date</label>
                <input type="text" class="form-control" id="published" placeholder="2002" onChange={e => setPublished(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="publisher" class="form-label">Publisher</label>
                <input type="text" class="form-control" id="publisher" placeholder="Animus Kiadó" onChange={e => setPublisher(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="pages" class="form-label">Pages</label>
                <input type="text" class="form-control" id="pages" placeholder="205" onChange={e => setPages(e.target.value)}/>
                
            </div>   
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )

}

export default NewBook