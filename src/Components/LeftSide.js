import React, { useState } from "react";
import NavLogo from '../assets/navlogo.png'
import pinklogo from '../assets/png/pinklogo.png'
import mintlogo from '../assets/png/mintlogo.png'
import blacklogo from '../assets/png/blacklogo.png'
import bluelogo from '../assets/png/bluelogo.png'
import whitelogo from '../assets/navlogo.png'
import redgirl from '../assets/png/redheadgirl.png'
import mintgirl from '../assets/png/mintgreenheadgirl.png'
import blackgirl from '../assets/png/blackheadgirl.png'
import whitegirl from '../assets/png/whiteheadgirl.png'
import bluegirl from '../assets/png/blackheadgirl.png'
import sideredhead from '../assets/png/sideredhead.png'
import sideminthead from '../assets/png/sideminthead.png'
import sideblackhead from '../assets/png/sideblackhead.png'
import sidewhitehead from '../assets/png/sidewhitehead.png'
import sidebluehead from '../assets/png/sidebluehead.png'


function LeftSide() {
    const [color, setColor] = useState("red")
    return (
        <div className="leftside__section">
            <div className="container">
                <nav>
                    <img src={NavLogo} alt="" />
                    <ul>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>TV</li>
                        <li>Music</li>
                        <li>Support</li>
                        <li><i class="fa-solid fa-magnifying-glass" style={{ color: '#F6F5F1', fontSize: '23px' }}></i></li>
                        <li><i class='bx bx-shopping-bag' style={{ color: '#F6F5F1', fontSize: '27px' }}  ></i></li>
                    </ul>
                </nav>
                <div className="page__product">
                    <div className="page__content">
                        <h1>AirPods Max</h1>
                        <p>Introducing AirPods Max - a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.</p>
                        <h3>Colors</h3>
                        <div className="product__colors">
                            <div className="colors">
                                <div className={`item ${color === "red" ? "active" : ""}`} onClick={() => {
                                    setColor("red")
                                }}>
                                    <p className="circle red-circle-half"></p>
                                </div>
                                <div onClick={() => {
                                    setColor("mint")
                                }} className={`item ${color === "mint" ? "active" : ""}`}>
                                    <p className="circle mint-circle-half"></p>
                                </div>
                                <div onClick={() => {
                                    setColor("black")
                                }} className={`item ${color === "black" ? "active" : ""}`}>
                                    <p className="circle black-circle-half"></p>
                                </div>
                                <div onClick={() => {
                                    setColor("white")
                                }} className={`item ${color === "white" ? "active" : ""}`}>
                                    <p className="circle white-circle-half"></p>
                                </div>
                                <div onClick={() => {
                                    setColor("blue")
                                }} className={`item ${color === "blue" ? "active" : ""}`}>
                                    <p className="circle blue-circle-half"></p>
                                </div>
                            </div>
                            <div className="price">
                                <p>Price</p>
                                <h3>$549</h3>
                                <button>Buy</button>
                            </div>
                            <div className="icon">

                            </div>
                            <div className="inside__icon">

                            </div>
                            <div className="last__right__icon">

                            </div>
                            <div className="last__left__icon">

                            </div>
                        </div>
                        <div className="last__content">
                            <p>Personalize them for free</p>
                            <div className="engraving">
                                <div className="padding__div">
                                    <h3>Add Engraving</h3>
                                    <div className="feature">
                                        <p>Engrave a mix of emoji, text and numbers to make AirPods Max unmistakably yours. Only at Apple.</p>
                                        <h4>Free</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="no__engraving">
                                <div className="padding__div">
                                    <h3>No Engraving</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page__image">
                        {
                            color === "red" &&
                            <>
                                {/* <img style={{ width: "600px" }} src={pinklogo} alt="" /> */}
                                <svg fill="red" xmlns="http://www.w3.org/2000/svg" width="600" height="600" id="apple"><path d="M20.7 16.8c-.3-.1-2.5-1.1-2.5-3.9 0-2.2 1.5-3.3 2.1-3.7.1-.1.2-.2.2-.3 0-.1 0-.3-.1-.4-1.4-2.1-3.6-2.3-4.2-2.3-1.1-.1-2.2.3-3 .6-.4.2-.8.3-1.1.3-.3 0-.7-.2-1.1-.3-.7-.3-1.5-.6-2.4-.6-1.9 0-3.8 1.2-4.8 2.9-1.8 3.5-.6 8.5 1.4 11.5.8 1.2 2 2.9 3.7 2.9H9c.7 0 1.2-.2 1.7-.5.5-.2 1-.4 1.7-.4s1.2.2 1.6.4c.5.2 1 .4 1.8.4 1.7 0 2.8-1.6 3.6-2.9.9-1.3 1.4-2.7 1.5-3.2.2-.1.1-.4-.2-.5zM14.9 3.3c.7-.8 1.1-1.8 1.1-2.8-.9.2-1.9.8-2.5 1.5-.5.6-1.1 1.7-1.1 2.8.9-.1 1.9-.7 2.5-1.5z"></path></svg>
                                <img className="girl" src={redgirl} alt="" />
                                <img className="head" src={sideredhead} alt="" />
                            </>
                        }
                        {
                            color === "mint" &&
                            <>
                                <img style={{ width: "600px" }} src={mintlogo} alt="" />
                                <img className="girl" src={mintgirl} alt="" />
                                <img className="head" src={sideminthead} alt="" />
                            </>
                        }
                        {
                            color === "black" &&
                            <>
                                <img style={{ width: "600px" }} src={blacklogo} alt="" />
                                <img className="girl" src={blackgirl} alt="" />
                                <img className="head" src={sideblackhead} alt="" />
                            </>
                        }
                        {
                            color === "white" &&
                            <>
                                <img style={{ width: "600px" }} src={whitelogo} alt="" />
                                <img className="girl" src={whitegirl} alt="" />
                                <img className="head" src={sidewhitehead} alt="" />
                            </>
                        }
                        {
                            color === "blue" &&
                            <>
                                <img style={{ width: "600px" }} src={bluelogo} alt="" />
                                <img className="girl" src={bluegirl} alt="" />
                                <img className="head" src={sidebluehead} alt="" />
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;