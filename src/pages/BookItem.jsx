import { Link } from "react-router-dom";

function BookItem({ id, title, price, author, cover }){

    //Rendering the card that displays the list of books
    return (
        <div className="flex w-60 flex-col rounded-lg border border-gray-700 bg-gray-900 text-white">
            <img className="h-72 w-full rounded-t-lg object-cover" src={cover} alt="Book Cover"/>
            <div className="flex flex-1 flex-col p-4">
                <h5 className="text-lg font-semibold">{title.length > 20 ? `${title.substring(0, 20)}...` : title}</h5>
                <p className="mt-1 text-sm text-gray-400">by {author.length > 25 ? `${author.substring(0, 25)}...` : author}</p>
                <p className="mt-1 text-sm">Kshs. {price}</p>

                <Link className="mt-4 rounded-md bg-green-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-700" to={`/${id}`}>Show details</Link>
            </div>
        </div>
    )
}

export default BookItem
