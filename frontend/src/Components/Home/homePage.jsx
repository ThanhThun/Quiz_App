import homePageCSS from "./homePage.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Start from "../Start/start";


function HomePage () {
    const [gamePin, setGamePin] = useState('');
    const navigate = useNavigate();
    
    const handleHomepage = (e) => { //logic ở đây
        e.preventDefault();
        if (gamePin === "123") { //thay cái chuỗi bằng cái _id bộ câu hỏi
            navigate("/start");
            console.log("Game PIN đã được nhập:", gamePin);
        } else {
            alert('Game PIN không tồn tại');
        }
        };

    return (
        <div className="bodylogin" style={{  backgroundImage: "url('./img/templatemo-wave-banner.jpg')"}}>
            <div className="input-container">
                <input type="text"
                name="text"
                className="input"
                value={gamePin} 
                onChange={(e) => setGamePin(e.target.value)}
                />
                <label className="label"> Game PIN </label>
                <div className="top-line" />
                <div className="under-line" />
                <button onClick={handleHomepage}> Go! </button>
            </div>
        </div>
    )
}

export default HomePage;