import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function EditBook({addBook}){
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
        <form className="mx-auto max-w-xl bg-black p-6 text-white" onSubmit={handleSubmit} id="addBook">
            <p className="mb-4 text-center text-2xl font-semibold">Edit Book</p>
            <div className="mb-4">
                <label htmlFor="cover" className="mb-1 block text-sm font-medium">Cover</label>
                <input type="text" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="cover" value = {cover} placeholder="https://www.jkrowling.com/wp-content/uploads/2016/10/HPATPS_Hero_OnGrey.png" onChange={e => setCover(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="title" className="mb-1 block text-sm font-medium">Title</label>
                <input type="text" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="title" value={title} placeholder="Harry Potter and the Philosopher's Stone" onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="subtitle" className="mb-1 block text-sm font-medium">Subtitle</label>
                <input type="text" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="subtitle" value={subtitle} placeholder="An edition of Harry Potter and the Philosopher's Stone" onChange={e => setSubtitle(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="author" className="mb-1 block text-sm font-medium">Author</label>
                <input type="text" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="author" value={author} placeholder="J. K. Rowling" onChange={e => setAuthor(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="mb-1 block text-sm font-medium">Price</label>
                <input type="number" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="price" value={price} placeholder="1000" onChange={e => setPrice(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="quantity" className="mb-1 block text-sm font-medium">Total Number of Books</label>
                <input type="number" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="quantity" value={quantity} placeholder="250" onChange={e => setQuantity(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="sold" className="mb-1 block text-sm font-medium">Books Sold</label>
                <input type="number" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="sold" value={sold} placeholder="200" onChange={e => setSold(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="mb-1 block text-sm font-medium">Description</label>
                <input type="text" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="description" value={description} placeholder=" Harry Potter has never heard of Hogwarts School of Witchcraft and Wizardry...." onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="published" className="mb-1 block text-sm font-medium">Publish Date</label>
                <input type="date" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="published" value={published} onChange={e => setPublished(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="publisher" className="mb-1 block text-sm font-medium">Publisher</label>
                <input type="text" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="publisher" value={publisher} placeholder="Animus Kiadó" onChange={e => setPublisher(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="pages" className="mb-1 block text-sm font-medium">Pages</label>
                <input type="number" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="pages" value={pages} placeholder="205" onChange={e => setPages(e.target.value)}/>
            </div>
            <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Submit</button>
        </form>
    )

}

export default EditBook
