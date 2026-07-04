import { Link } from "react-router-dom";

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className="mt-12 border-t border-gray-800 px-4 py-6 text-gray-400">
            <ul className="mb-4 flex flex-wrap justify-center gap-4 border-b border-gray-800 pb-3">
                <li><Link className="text-sm hover:text-white" to="/">Home</Link></li>
                <li><Link className="text-sm hover:text-white" to="/addbook">Add Book</Link></li>
                <li><Link className="text-sm hover:text-white" to="/contact us">Contact Us</Link></li>
            </ul>
            <p className="mx-auto max-w-3xl text-center text-sm">Kitabu is a web application that shows the user a collection of books. The user can view a list of their favorite books along with information about them, such the author, summary, price, and publisher, to mention a few. Also, the user can add their own book to the app and view it listed with all the other books. Also, the user has the option to update their own book by adding or deleting any elements they see fit. Also, if a person doesn't want to see the book, they can delete it. The user may also search for their preferred book by its title, such as Harry Potter.</p>
            <p className="mt-3 text-center text-sm">© {currentYear} Kitabu</p>
        </footer>
    )
}

export default Footer
