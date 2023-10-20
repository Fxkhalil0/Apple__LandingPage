import React, { useState } from "react";
import NavLogo from '../assets/navlogo.png'
import pinklogo from '../assets/png/pinklogo.png'



function LeftSide() {
    const [color, setColor] = useState("")
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
                        <img style={{width:"600px"}} src={pinklogo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;