import React, {useState} from 'react'
import axios from "axios"
// import {Link} from "react-router-dom"
const Signup = () => { 
    const [username, setUsername] = useState("")    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleClick(e){
        e.preventDefault();
        axios.post("/users", {username, email, password} )
    }
  
    return (
        <div>
            <h1>Sign Up</h1>
        <form       
        onSubmit = {handleClick}
        >
            <label htmlFor="username">
               Name:
                <input 
                id="username"
                value = {username}
                placeholder="Name"
                onChange = {(e) => setUsername(e.target.value)}
                required/>
            </label>
            <label htmlFor="email">
                Email
                <input 
                id="email"
                value = {email}
                placeholder="Email"
                onChange = {(e) => setEmail(e.target.value)}
                required/>
            </label>
            <label htmlFor="password">
               Password:
                <input 
                id="password"
                value = {password}
                placeholder="Password"
                onChange = {(e) => setPassword(e.target.value)}
                required/>
            </label>
        {/* <Link to="/login"> */}
            <button>
                submit
            </button>
        {/* </Link> */}
        </form>
        </div>
    )
}


export default Signup
