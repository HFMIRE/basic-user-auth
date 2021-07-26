import './App.css';
import React, {useState} from "react";
import axios from "axios"
// import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  const [username, setUsername] = useState("")    
 
  const [password, setPassword] = useState("")

const register = (e) => {
  e.preventDefault();
  axios.post("/users", {username, password})
  .then((res) => {
    console.log(res)
  })
}
  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" 
        onChange ={(e) => setUsername(e.target.value)}/>
        <label>Password</label>
        <input type="text" onChange ={(e) => setPassword(e.target.value)}/>
        <button onClick={register}>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <label>Username</label>
        <input type="text"  />
        <label>Password</label>
        <input type="text"/>
        <button>Login</button>
      </div>
        </div>
  );
}

export default App;
