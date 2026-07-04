import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner"


function BookDetail(){
    //declaring the variables
    const [book, setBook] = useState("");
    const navigate = useNavigate()
    const {title, subtitle, author, published, publisher, pages, price, quantity, sold, description, cover} = book
    const { id } = useParams()
    const [loading, setLoading] = useState(false)

    //fetching data by the id
    useEffect(() => {
        const fetchEachBook = async () => {
            setLoading(true)
            try{
                const response = await fetch(`https://book-data.onrender.com/books/${id}`)
                const data = await response.json()
                setBook(data)
            }
            catch(error) {
                console.log(error)
            }
            finally{
                setLoading(false)
            }
        }
        fetchEachBook()
    }, [id])

    //deleting the book
    function handleDelete(){
        fetch(`https://book-data.onrender.com/books/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
        .then(data => setBook(data))

        navigate('/')
    }

    //rendering the details of the book
    return(
        <>
        {loading ? (
            <CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                outerCircleColor="#4fa94d"
                innerCircleColor="#4fa94d"
                barColor="#4fa94d"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass="flex items-center justify-center h-screen"
                visible={true}
            />
        ) : (
            <div className="mx-auto max-w-5xl px-4 py-6 text-white">
                <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="flex flex-col sm:w-1/3">
                        <img className="max-h-[502px] w-full rounded-md object-cover" src={cover} alt="Book Cover"/>
                        <div className="mt-4 flex items-center justify-between gap-2">
                            <Link className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700" to={`/editbook/${id}`}>Edit Book</Link>
                            <button type="button" className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700" onClick={handleDelete}>Delete Book</button>
                        </div>
                    </div>
                    <div className="rounded-md border border-gray-700 p-4 sm:w-2/3">
                        <p className="text-xl font-semibold">{title}</p>
                        <p className="text-gray-400">{subtitle}</p>
                        <p className="mt-2">by {author}</p>
                        <p>Kshs. {price}</p>
                        <p>Available copies: {quantity - sold}</p>
                        <p className="mt-2 font-medium">Description</p>
                        <p>{description}</p>
                        <p className="mt-2">Publish Date: {published}</p>
                        <p>Publisher: {publisher}</p>
                        <p className="mb-4">{pages} pages </p>
                    </div>
                </div>
            </div>
        )}
        </>

    )

}

export default BookDetail
