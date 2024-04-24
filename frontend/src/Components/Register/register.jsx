import { useState } from "react";
import registerCSS from "../Login/login.css"
import { registerUser } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
 
const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dishpatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Hello")
    const newUser = {
      email: email,
      password: password,
      username: username
    };
    
    registerUser(newUser, dishpatch, navigate);
  }

  return (
    <div className="wrapper">
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" //link twis đổi lại thành của mình nè
          alt="This is logo"
        />
      </div>
    <div className="text-center mt-4 name">William</div>
      <form className="p-3 mt-3" onSubmit={handleRegister}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user" />
          <input type="text" name="userName" id="userName" placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key" />
          <input type="text" name="userName" id="userName" placeholder="Username" 
          onChange={(e)=>setUsername(e.target.value)}/>
        </div>

        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key" />
          <input type="password" name="password" id="pwd" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button className="btn mt-3"> Submit </button>
      </form>
    </div>
  )
}

export default Register;