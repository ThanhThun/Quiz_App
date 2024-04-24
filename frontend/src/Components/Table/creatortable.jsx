import React, { useState } from 'react';
import './creator.css';
import { Link } from "react-router-dom";

const Creatortable = () => {
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
                    {/* <ul className="nav-links">
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
                    </ul> */}

                    <ul className="logout-mode">
                        <li><Link to="/Creator">
                            <i className="uil uil-plus"></i>
                            <span className="link-name">Add question</span>
                        </Link></li>
                        
                        <li><Link to="/Login">
                            <i className="uil uil-trash-alt"></i>
                            <span className="link-name">Exit</span>
                        </Link></li>
                        <li><Link to="/Start">
                            <i className="uil uil-save"></i>
                            <span className="link-name">Play Game</span>
                        </Link></li>
                        
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
                <table className="list table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <a href="#" type="button" className="btn btn-warning">
                                Edit
                                </a>
                                <a href="#" type="button" className="btn btn-warning">
                                Delete
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <a href="#" type="button" className="btn btn-warning">
                                Edit
                                </a>
                                <a href="#" type="button" className="btn btn-warning">
                                Delete
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>
                                <a href='#' type="button" className="btn btn-warning">
                                Edit
                                </a>
                                <a href='#' type="button" className="btn btn-warning">
                                Delete
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </section>
        </div>
    );
};

export default Creatortable;
