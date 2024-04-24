import loginCSS from "./login.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../redux/apiRequest";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const dishpatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); //load trang
    const newUser = {
      username: username,
      password: password,
    };
    loginUser(newUser,dishpatch,navigate);
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

      <form className="p-3 mt-3" onSubmit={handleLogin}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user" />
          <input type="text" name="userName" id="userName" placeholder="Username"
          onChange={(e)=>setUserName(e.target.value)}/>
        </div>


        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key" />
          <input type="password" name="password" id="pwd" placeholder="Password" 
          onChange={(e)=>setPassWord(e.target.value)}/>
        </div>


        <button type="submit" className="btn mt-3">Login</button>
      </form>

      <div className="text-center fs-6">
        {/* <a href="register">Click here</a> to creater account. */}
        <Link to="/register"> Click here </Link>to create account.
      </div>
    </div>
  )
}

export default Login;