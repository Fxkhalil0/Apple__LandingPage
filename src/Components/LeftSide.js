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
                                <img style={{ width: "600px" }} src={pinklogo} alt="" />
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