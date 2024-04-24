import React from "react";
import { Link } from 'react-router-dom';
import moveCSS from "./move.css"

function move () {
    return (
        <div className="bodylogin"style={{  backgroundImage: "url('./img/templatemo-wave-banner.jpg')"}} >
            <section className="trending-podcast-section section-padding">
                <div className="container ">
                    <div className="row">
                    <svg viewBox="0 0 240 240" height="240" width="240" class="pl">
                        <circle
                            stroke-linecap="round"
                            stroke-dashoffset="-330"
                            stroke-dasharray="0 660"
                            stroke-width="20"
                            stroke="#000"
                            fill="none"
                            r="105"
                            cy="120"
                            cx="120"
                            class="pl__ring pl__ring--a"
                        ></circle>
                        <circle
                            stroke-linecap="round"
                            stroke-dashoffset="-110"
                            stroke-dasharray="0 220"
                            stroke-width="20"
                            stroke="#000"
                            fill="none"
                            r="35"
                            cy="120"
                            cx="120"
                            class="pl__ring pl__ring--b"
                        ></circle>
                        <circle
                            stroke-linecap="round"
                            stroke-dasharray="0 440"
                            stroke-width="20"
                            stroke="#000"
                            fill="none"
                            r="70"
                            cy="120"
                            cx="85"
                            class="pl__ring pl__ring--c"
                        ></circle>
                        <circle
                            stroke-linecap="round"
                            stroke-dasharray="0 440"
                            stroke-width="20"
                            stroke="#000"
                            fill="none"
                            r="70"
                            cy="120"
                            cx="155"
                            class="pl__ring pl__ring--d"
                        ></circle>
                        </svg>


                        <div className="col-lg-12 col-12">
                            <div className="text-center mb-5">
                                <h4 className="section-title">Who are you?</h4> {/* kệ noá đi =)) */}
                            </div>
                        </div>

                        <div className="Login1">
                            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                                <div className="custom-block custom-block-full">
                                    <div className="custom-block-image-wrap">
                                        <Link to="/login">
                                        <div class="buttons">
                                            <button class="btn">
                                                <span></span>
                                                <p data-start="good luck!" data-text="Login" data-title="Admin"></p>
                                            </button>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                                <div className="custom-block custom-block-full">
                                    <div className="custom-block-image-wrap">
                                        <Link to="/home">
                                        <div class="buttons">
                                            <button class="btn">
                                                <span></span>
                                                <p data-start="good luck!" data-text="Start!" data-title="Player"></p>
                                            </button>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default move;