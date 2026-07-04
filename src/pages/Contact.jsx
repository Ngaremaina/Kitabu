import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Contact({addMessage}){
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const newmessage = {
            name:name,
            email:email,
            message:message,
        }

        fetch("https://book-data.onrender.com/messages",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newmessage)
        })
        .then(res => res.json())
        .then(data => addMessage(data))
        setInputClear()

        navigate('/');
    }
    function setInputClear(){
        setName("")
        setMessage("")
        setEmail("")

    }

    return(
        <form className="mx-auto max-w-xl bg-black p-6 text-white" onSubmit={handleSubmit} id="addBook">
            <p className="mb-4 text-center text-2xl font-semibold">Please Fill in the Form</p>
            <div className="mb-4">
                <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
                <input type="text" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="name" value = {name} placeholder="John Doe" onChange={e => setName(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
                <input type="email" className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="email" value={email} placeholder="jondoe@example.com" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
                <textarea className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none" id="message" value={message} placeholder="Message..." onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Submit</button>
        </form>
    )
}


export default Contact
