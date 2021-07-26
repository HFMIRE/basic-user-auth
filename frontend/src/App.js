import './App.css';
import React, {useState} from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")
  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" 
        onChange ={setUsernameReg(e.target.value)}/>
        <label>Password</label>
        <input type="text"/>
        <button>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <label>Username</label>
        <input type="text"   onChange ={setPasswordReg(e.target.value)}/>
        <label>Password</label>
        <input type="text"/>
        <button>Login</button>
      </div>
        </div>
  );
}

export default App;
