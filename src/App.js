import './App.css';
import React, { useState } from "react";
import NavLogo from './assets/navlogo.png'
import pinklogoo from './assets/pinklogoo.png'
import mintlogo from './assets/png/mintlogo.png'
import blacklogo from './assets/png/blacklogo.png'
import bluelogo from './assets/png/bluelogo.png'
import whitelogo from './assets/png/silverlogo.png'
import redgirl from './assets/png/redheadgirl.png'
import mintgirl from './assets/png/mintgreenheadgirl.png'
import blackgirl from './assets/png/blackheadgirl.png'
import whitegirl from './assets/png/whiteheadgirl.png'
import bluegirl from './assets/png/blackheadgirl.png'
import sideredhead from './assets/png/sideredhead.png'
import sideminthead from './assets/png/sideminthead.png'
import sideblackhead from './assets/png/sideblackhead.png'
import sidewhitehead from './assets/png/sidewhitehead.png'
import sidebluehead from './assets/png/sidebluehead.png'
import topIcon from './assets/png/icons8-circled-menu-50.png'

function App() {
  const [color, setColor] = useState("red")

  return (
    <div className="App" style={{backgroundColor:color === "red"? '#f7aaa4': color === "mint" ?"#9ff4b7":color === "white" ?"#f9f9f9":color === "black" ?"#595959":color === "blue" ?"#a1b3f4":""}}>
      <div className="leftside__section">
        {/* <div className="container"> */}
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
              <h1 style={{backgroundColor:color === "red"? '#f7aaa4': color === "mint" ?"#9ff4b7":color === "white" ?"#f9f9f9":color === "black" ?"#595959":color === "blue" ?"#a1b3f4":"",
            boxShadow:color === "red"? '0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c': color === "mint" ?'0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c':color === "white" ?'0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c':color === "black" ?'0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c':color === "blue" ?'0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c':""
            }}>AirPods Max</h1>
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
                <div className="price" style={{backgroundColor:color === "red"? '#f7aaa4': color === "mint" ?"#9ff4b7":color === "white" ?"#f9f9f9":color === "black" ?"#595959":color === "blue" ?"#a1b3f4":""}}>
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
            {
              color === "red" && 
                <div className="page__image"
                  style={{
                    position: 'relative',
                    
                  }}
                >
                  <img style={{ width: "650px" , filter: 'drop-shadow(5px 1px 30px #BC7F86)'}} src={pinklogoo} alt="" />
                  {/* <img className="girl" src={redgirl} alt="" /> */}
                  <img className="head" src={sideredhead} alt="" />
                </div>
              
            }

            {
              color === "mint" &&
              <>
                <div className="page__image"
                  style={{
                    position: 'relative',
                    
                  }}
                >
                  <img style={{ width: "650px" , filter: 'drop-shadow(5px 1px 30px #BC7F86)'}} src={mintlogo} alt="" />
                  {/* <img className="girl" src={redgirl} alt="" /> */}
                  <img className="head" src={sideminthead} alt="" />
                </div>
              </>
            }
            {
              color === "black" &&
              <>
                <div className="page__image"
                  style={{
                    position: 'relative',
                    
                  }}
                >
                  <img style={{ width: "650px" , filter: 'drop-shadow(5px 1px 30px #BC7F86)'}} src={blacklogo} alt="" />
                  {/* <img className="girl" src={redgirl} alt="" /> */}
                  <img className="head" src={sideblackhead} alt="" />
                </div>
              </>
            }
            {
              color === "white" &&
              <>
                <div className="page__image"
                  style={{
                    position: 'relative',
                    
                  }}
                >
                  <img style={{ width: "650px" , filter: 'drop-shadow(5px 1px 30px #BC7F86)'}} src={whitelogo} alt="" />
                  {/* <img className="girl" src={redgirl} alt="" /> */}
                  <img className="head" src={sidewhitehead} alt="" />
                </div>
              </>
            }
            {
              color === "blue" &&
              <>
                <div className="page__image"
                  style={{
                    position: 'relative',
                    
                  }}
                >
                  <img style={{ width: "650px" , filter: 'drop-shadow(5px 1px 30px #BC7F86)'}} src={bluelogo} alt="" />
                  {/* <img className="girl" src={redgirl} alt="" /> */}
                  <img className="head" src={sidebluehead} alt="" />
                </div>
              </>
            }
          </div>
        </div>
      <div className="rightside__section" style={{backgroundColor:color === "red"? '#F9BDBD': color === "mint" ?"#c4fcd3":color === "white" ?"#fff":color === "black" ?"#000":color === "blue" ?"#ced9ff":""}}>
        <div className="padding">
          <div className="right__icons">
              <img src={topIcon} alt='' />
            <div className="bottom__icon">
              <i class="fa-solid fa-paper-plane"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
