import React from "react";
import NavLogo from '../assets/navlogo.png'







function LeftSide() {
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
                        <div className="last__content">
                            <p>Personalize them for free</p>
                            <div className="engraving">
                                <h3>Add Engraving</h3>
                                <div className="feature">
                                    <p>Engrave a mix of emoji, text and numbers to make AirPods Max unmistakably yours. Only at Apple.</p>
                                    <h4>Free</h4>
                                </div>
                            </div>
                            <div className="engraving">
                                <h3>No Engraving</h3>
                            </div>
                        </div>
                    </div>
                    <div className="page__image">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;