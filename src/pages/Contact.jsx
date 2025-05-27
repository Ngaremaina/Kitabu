import React, {useState} from "react";
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
        <form className="bg-dark text-white" onSubmit={handleSubmit} id="addBook">
            <p className="text-center mb-3" style={{fontSize:"25px"}}>Please Fill in the Form</p>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" value = {name} placeholder="John Doe" onChange={e => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} placeholder="jondoe@example.com" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea type="text" className="form-control" id="message" value={email} placeholder="Message..." onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}


export default Contact
