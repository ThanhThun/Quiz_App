import React from "react";
import StartCSS from "./start.css";

const Start = () => {
    return(
        <div>
            <main className="main">
                {/* Header Start */}
                <header className="header">
                    <nav className="navstart containerstart">
                        <h2 className="nav_logo">
                            <a href="#">CodingLab</a>
                        </h2>
                    </nav>
                </header>
                {/* Header End */}
                {/* Hero Start */}
                <section className="hero" >
                    <div className="rowstart containerstart">
                        <div className="column">
                            <h2>Classic mode </h2>
                            <p>
                            Bring friendly competition to this kahoot. Players go head-to-head and
                            compete for a top spot on the podium. Players who answer the quickest
                            and get the most correct answers will have higher scores.
                            </p>
                            <div class="join-containerbody">    
                                <div class="join-container">
                                    <p>Join at 
                                        <p ></p> 
                                        <a href="#">CodingLab</a> 
                                    </p>
                                    <p class="game-pin">Game PIN: <span> 123 </span></p>
                                </div>
                            </div>
                            <div className="buttons">
                            {/* <button class="btn">Read More</button> */}
                            <button className="btnstart">Start</button>
                            </div>
                        </div>
                    </div>
                    <img src="./img/OIG3.Y-removebg-preview" alt="" className="curveImg" />
                </section>
                {/* Hero End*/}
            </main>
        </div>
    );

};
export default Start;