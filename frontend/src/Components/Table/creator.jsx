import React, { useState } from 'react';
import './creator.css';
import { Link } from "react-router-dom";

const Creator = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('mode') === 'dark');
    const [sidebarClosed, setSidebarClosed] = useState(localStorage.getItem('status') === 'close');

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('mode', darkMode ? 'light' : 'dark');
    };

    const toggleSidebar = () => {
        setSidebarClosed(!sidebarClosed);
        localStorage.setItem('status', sidebarClosed ? 'open' : 'close');
    };


    return (
        <div className={`body ${darkMode ? 'dark' : ''}`}>
            <nav className={`${sidebarClosed ? 'close' : ''}`}>
                <div className="logo-name">
                    
                    <span className="logo_name">CodingLab</span>
                </div>

                <div className="menu-items">
                    <ul className="nav-links">
                        <li>
                            <a href="#">
                                <i className="uil uil-clock"></i>
                                <span className="link-name">Time </span>
                                <div className="time-limit-dropdown">
                                    <select name="time-limit" id="time-limit-select">
                                        <option value="30">30 seconds</option>
                                        <option value="20">20 seconds</option>
                                        <option value="15">15 seconds</option>
                                        <option value="10">10 seconds</option>
                                    </select>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="uil uil-trophy"></i>
                                <span className="link-name">Points</span>
                                <div className="time-limit-dropdown">
                                    <select name="time-limit" id="time-limit-select">
                                        <option value="30">5 Points</option>
                                        <option value="20">3 Points</option>
                                        <option value="15">1 Points</option>
                                    </select>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <ul className="logout-mode">
                        <li>
                            <Link to="/Creatortable">
                            <i className="uil uil-plus"></i>
                            <span className="link-name">List question</span>
                            </Link>
                        </li>
                        <li><a href="#">
                            <i className="uil uil-plus"></i>
                            <span className="link-name">New question</span>
                        </a></li>
                        <li><a href="#">
                            <i className="uil uil-trash-alt"></i>
                            <span className="link-name">Exit</span>
                        </a></li>
                        <li><a href="/text2.html">
                            <i className="uil uil-save"></i>
                            <span className="link-name">Save and Exit</span>
                        </a></li>
                        <li><a href="#">
                            <i className="uil uil-save"></i>
                            <span className="link-name">Save question</span>
                        </a></li>
                    </ul>

                    <ul className="logout-mode">
                        <li><a href="#">
                            <i className="uil uil-signout"></i>
                            <span className="link-name">Logout</span>
                        </a></li>
                        <li className="mode" onClick={toggleDarkMode}>
                        <a href="#">
                            <i className="uil uil-moon"></i>
                            <span className="link-name">Dark Mode</span>
                        </a>
                        <div className="mode-toggle">
                            <span className={`switch ${darkMode ? 'dark' : ''}`}></span>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>

            <section className="dashboard" style={{background:  "url('./img/b3.jpg')" }}>
                <div className="top">
                    <i className="uil uil-bars sidebar-toggle" onClick={toggleSidebar}></i>
                    <div className="search-box">
                        <i className="uil uil-search"></i>
                        <input type="text" placeholder="Search here..." />
                    </div>
                </div>

                <div className="dash-content">
                    <div className="question-input1">
                        <input type="text" placeholder="Start typing your question" />
                    </div>

                    <div className="question-input">
                        <div className="answers">
                            <div className="answer-input">
                                <input type="text" placeholder="Enter your answer1..." />
                                <input type="radio" className="radio-check" name="radio-check-answer" />
                            </div>
                            <div className="answer-input">
                                <input type="text" placeholder="Enter your answer2..." />
                                <input type="radio" className="radio-check" name="radio-check-answer" />
                            </div>
                        </div>
                        <div className="answers">
                            <div className="answer-input1 ">
                                <input type="text" placeholder="Enter your answer3..." />
                                <input type="radio" className="radio-check" name="radio-check-answer" />
                            </div>
                            <div className="answer-input1 ">
                                <input type="text" placeholder="Enter your answer4..." />
                                <input type="radio" className="radio-check" name="radio-check-answer" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Creator;
