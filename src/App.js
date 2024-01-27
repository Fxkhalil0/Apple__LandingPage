import "./App.css";
import React, { useState } from "react";
import NavLogo from "./assets/navlogo.png";
import pinklogoo from "./assets/pinklogoo.png";
import mintlogo from "./assets/png/mintlogo.png";
import blacklogo from "./assets/png/blacklogo.png";
import bluelogo from "./assets/png/bluelogo.png";
import whitelogo from "./assets/png/silverlogo.png";
import redgirl from "./assets/png/redheadgirl.png";
import mintgirl from "./assets/png/mintgreenheadgirl.png";
import blackgirl from "./assets/png/blackheadgirl.png";
import whitegirl from "./assets/png/whiteheadgirl.png";
import bluegirl from "./assets/png/blackheadgirl.png";
import sideredhead from "./assets/png/sideredhead.png";
import sideminthead from "./assets/png/sideminthead.png";
import sideblackhead from "./assets/png/sideblackhead.png";
import sidewhitehead from "./assets/png/sidewhitehead.png";
import sidebluehead from "./assets/png/sidebluehead.png";
import topIcon from "./assets/png/icons8-circled-menu-50.png";
import topIconBlack from "./assets/png/icons8-circled-menu-50 (1).png";
import circle from "./assets/png/Glossy-white-button-badge-on-transparent-background-PNG.png";
import redgrap from "./assets/png/redgrap.png";
import redhead from "./assets/png/redhead.png";
import usb from "./assets/png/pngegg (1).png";
import bluehead from "./assets/png/bluehead1.png";
import bluegrap from "./assets/png/bluegrap.png";
import blackhead from "./assets/png/blackhead.png";
import blackgrap from "./assets/png/blackgrap.png";
import minthead from "./assets/png/minthead.png";
import mintgrap from "./assets/png/mintgrap.png";
import whitehead from "./assets/png/whitehead.png";
import whitegrap from "./assets/png/whitegrap.png";

function App() {
  const [color, setColor] = useState("red");
  const style = {
    position: "absolute",
    content: "",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    backgroundColor: color === "red"?"rgba(149, 62, 62, 0.174)":"black",
    borderRadius: "15px",
    boxShadow: color === "red"?"0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c":"black",
    borderBottom: color === "red"?"4px solid #e287849c":"black",
  };
  const beforBroductColors = {
    content: '',
  position: "absolute",
  bottom: "-17px",
  left: "20px",
  width: "52%",
  borderBottom: "6px solid #f5bcb8",
  }
const afterBroductColors = {
  content: '',
  position: "absolute",
  top: "3px",
  right: "1px",
  height: "44%",
  borderRight: "6px solid #f5bcb8",
}

const afterPrice ={
  content: '',
  position: "absolute",
  top: "-5px",
  right: "26px",
  width: "68%",
  borderTop: "6px solid #f5bcb8",
}
const beforePrice = {
  content: '',
  position: "absolute",
  top: "18px",
  right: "108px",
  height: "40%",
  borderLeft: "6px solid #f5bcb8",
}
const afterEngraving = {
  content: '',
  position: "absolute",
  height: "93%",
  width: "98%",
  top: "4px",
  left: "5px",
  backgroundColor: "transparent",
  borderRadius: "10px",
}
const afterNoEngraving = {
  content: '',
  position: "absolute",
  height: "87%",
  width: "98%",
  top: "5px",
  left: "5px",
  backgroundColor: "transparent",
  borderRadius: "10px",
  boxShadow: "inset -5px -5px 9px #d9a0979e, inset 5px 5px 9px #59575a12",
}
  return (
    <div
      className="App"
      style={{
        backgroundColor:
          color === "red"
            ? "#f7aaa4"
            : color === "mint"
            ? "#9ff4b7"
            : color === "white"
            ? "#f9f9f9"
            : color === "black"
            ? "#595959"
            : color === "blue"
            ? "rgb(139 152 200)"
            : "",
      }}
    >
      <div className="leftside__section">
        {/* <div className="container"> */}
        <nav style={{ color: color === "white" && "black" }}>
          <img src={NavLogo} alt="" />
          <ul>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>TV</li>
            <li>Music</li>
            <li>Support</li>
            <li>
              <i
                class="fa-solid fa-magnifying-glass"
                style={{ color: "#F6F5F1", fontSize: "23px" }}
              ></i>
            </li>
            <li>
              <i
                class="bx bx-shopping-bag"
                style={{ color: "#F6F5F1", fontSize: "27px" }}
              ></i>
            </li>
          </ul>
        </nav>
        <div className="page__product">
          <div className="page__content">
            <h1
              style={{
                color: color === "white" && "black",
                backgroundColor:
                  color === "red"
                    ? "#f7aaa4"
                    : color === "mint"
                    ? "#9ff4b7"
                    : color === "white"
                    ? "#f9f9f9"
                    : color === "black"
                    ? "#595959"
                    : color === "blue"
                    ? "#a1b3f4"
                    : "",
                boxShadow:
                  color === "red"
                    ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                    : color === "mint"
                    ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                    : color === "white"
                    ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                    : color === "black"
                    ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                    : color === "blue"
                    ? "0px -2px 10px 0px #2f536da1, 0px 5px 10px 0px #2f536d"
                    : "",
                borderTop:
                  color === "red"
                    ? "4px solid #f9bdbcad"
                    : color === "mint"
                    ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                    : color === "white"
                    ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                    : color === "black"
                    ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                    : color === "blue"
                    ? "4px solid rgb(47 83 109 / 19%)"
                    : "",
                borderBottom:
                  color === "red"
                    ? "4px solid #e287849c"
                    : color === "mint"
                    ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                    : color === "white"
                    ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                    : color === "black"
                    ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                    : color === "blue"
                    ? "4px solid rgb(47 83 109 / 65%)"
                    : "",
              }}
            >
              AirPods Max
            </h1>
            <p style={{ color: color === "white" && "black" }}>
              Introducing AirPods Max - a perfect balance of exhilarating
              high-fidelity audio and the effortless magic of AirPods. The
              ultimate personal listening experience is here.
            </p>
            <h3 style={{ color: color === "white" && "black" }}>Colors</h3>
            <div className="product__colors">
              <div style={beforBroductColors}></div>
              <div className="colors">
                <div
                  className={`item ${color === "red" ? "active" : ""}`}
                  onClick={() => {
                    setColor("red");
                  }}
                >
                  <p className="circle red-circle-half"></p>
                  {
                    color == "red" && 
                  <div style={style}> </div>
                  }
                </div>
                <div
                  onClick={() => {
                    setColor("mint");
                  }}
                  className={`item ${color === "mint" ? "active" : ""}`}
                >
                  <p className="circle mint-circle-half"></p>
                  {
                    color == "mint" && 
                  <div style={style}> </div>
                  }
                </div>
                <div
                  onClick={() => {
                    setColor("black");
                  }}
                  className={`item ${color === "black" ? "active" : ""}`}
                >
                  <p className="circle black-circle-half"></p>
                  {
                    color == "black" && 
                  <div style={style}> </div>
                  }
                </div>
                <div
                  onClick={() => {
                    setColor("white");
                  }}
                  className={`item ${color === "white" ? "active" : ""}`}
                >
                  <p className="circle white-circle-half"></p>
                  {
                    color == "white" && 
                  <div style={style}> </div>
                  }
                </div>
                <div
                  onClick={() => {
                    setColor("blue");
                  }}
                  className={`item ${color === "blue" ? "active" : ""}`}
                >
                  <p className="circle blue-circle-half"></p>
                  {
                    color == "blue" && 
                  <div style={style}> </div>
                  }
                </div>
              </div>
              <div
                className="price"
                style={{
                  color: color === "white" && "black",
                  backgroundColor:
                    color === "red"
                      ? "#f7aaa4"
                      : color === "mint"
                      ? "#9ff4b7"
                      : color === "white"
                      ? "#f9f9f9"
                      : color === "black"
                      ? "#595959"
                      : color === "blue"
                      ? "rgb(139, 152, 200)"
                      : "",
                }}
              >
                <div style={beforePrice}></div>
                <p>Price</p>
                <h3>$549</h3>
                <button>Buy</button>
                <div style={afterPrice}></div>
              </div>
              <div className="icon"></div>
              <div className="inside__icon"></div>
              <div className="last__right__icon"></div>
              <div className="last__left__icon"></div>
              <div style={afterBroductColors}></div>
            </div>
            <div className="last__content">
              <p style={{ color: color === "white" && "black" }}>
                Personalize them for free
              </p>
              <div
                style={{
                  color: color === "white" && "black",
                  boxShadow:
                    color === "red"
                      ? "-5px -5px 9px #d9a0979e, 5px 5px 9px rgb(94 104 121 / 4%)"
                      : color === "mint"
                      ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                      : color === "white"
                      ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                      : color === "black"
                      ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                      : color === "blue"
                      ? "-5px -5px 9px #92a8bdb0, 5px 5px 9px #2f536d80"
                      : "",
                  "& after": {
                    boxShadow:
                      color === "red"
                        ? "inset -5px -5px 9px #d9a0979e, inset 5px 5px 9px #59575a12"
                        : "",
                  },
                }}
                className="engraving"
              >
                {/*blue boxShadow -5px -5px 9px #92a8bdb0, 5px 5px 9px #2f536d80; */}
                <div className="padding__div">
                  <h3>Add Engraving</h3>
                  <div className="feature">
                    <p>
                      Engrave a mix of emoji, text and numbers to make AirPods
                      Max unmistakably yours. Only at Apple.
                    </p>
                    <h4>Free</h4>
                  </div>
                </div>
                <div style={afterEngraving}></div>
              </div>
              <div
                style={{
                  color: color === "white" && "black",
                  boxShadow:
                    color === "red"
                      ? "-5px -5px 9px #d9a0979e, 5px 5px 9px rgb(94 104 121 / 4%)"
                      : color === "mint"
                      ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                      : color === "white"
                      ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                      : color === "black"
                      ? "0px -2px 10px 0px #f9bdbcad, 0px 5px 10px 0px #e287849c"
                      : color === "blue"
                      ? "-5px -5px 9px #92a8bdb0, 5px 5px 9px #2f536d80"
                      : "",
                }}
                className="no__engraving"
              >
                <div className="padding__div">
                  <h3>No Engraving</h3>
                </div>
                <div style={afterNoEngraving}></div>
              </div>
            </div>
          </div>
          {color === "red" && (
            <div
              className="page__image"
              style={{
                position: "relative",
              }}
            >
              <img
                style={{
                  width: "650px",
                  filter: "drop-shadow(5px 1px 30px #BC7F86)",
                }}
                src={pinklogoo}
                alt=""
              />
              {/* <img className="girl" src={redgirl} alt="" /> */}
              <img className="head" src={sideredhead} alt="" />
              <img className="circle" src={circle} alt="" />
              <div className="small__images">
                <h3>what's in the box</h3>
                <div className="images">
                  <img className="headd" src={redhead} alt="" />
                  <img className="grab" src={redgrap} alt="" />
                  <img className="usb" src={usb} alt="" />
                </div>
              </div>
            </div>
          )}

          {color === "mint" && (
            <>
              <div
                className="page__image"
                style={{
                  position: "relative",
                }}
              >
                <img
                  style={{
                    width: "650px",
                    filter: "drop-shadow(5px 1px 30px #BC7F86)",
                  }}
                  src={mintlogo}
                  alt=""
                />
                {/* <img className="girl" src={redgirl} alt="" /> */}
                <img className="head" src={sideminthead} alt="" />
                <img className="circle" src={circle} alt="" />
                <div className="small__images">
                  <h3>what's in the box</h3>
                  <div className="images">
                    <img className="headd" src={minthead} alt="" />
                    <img className="grab" src={mintgrap} alt="" />
                    <img className="usb" src={usb} alt="" />
                  </div>
                </div>
              </div>
            </>
          )}
          {color === "black" && (
            <>
              <div
                className="page__image"
                style={{
                  position: "relative",
                }}
              >
                <img
                  style={{
                    width: "650px",
                    filter: "drop-shadow(5px 1px 30px #BC7F86)",
                  }}
                  src={blacklogo}
                  alt=""
                />
                {/* <img className="girl" src={redgirl} alt="" /> */}
                <img className="head" src={sideblackhead} alt="" />
                <img className="circle" src={circle} alt="" />
                <div className="small__images">
                  <h3>what's in the box</h3>
                  <div className="images">
                    <img className="headd" src={blackhead} alt="" />
                    <img className="grab" src={blackgrap} alt="" />
                    <img className="usb" src={usb} alt="" />
                  </div>
                </div>
              </div>
            </>
          )}
          {color === "white" && (
            <>
              <div
                className="page__image"
                style={{
                  position: "relative",
                }}
              >
                <img
                  style={{
                    width: "650px",
                    filter: "drop-shadow(5px 1px 30px #BC7F86)",
                  }}
                  src={whitelogo}
                  alt=""
                />
                {/* <img className="girl" src={redgirl} alt="" /> */}
                <img className="head" src={sidewhitehead} alt="" />
                <img className="circle" src={circle} alt="" />
                <div className="small__images">
                  <h3 style={{ color: "black" }}>what's in the box</h3>
                  <div className="images">
                    <img className="headd" src={whitehead} alt="" />
                    <img className="grab" src={whitegrap} alt="" />
                    <img className="usb" src={usb} alt="" />
                  </div>
                </div>
              </div>
            </>
          )}
          {color === "blue" && (
            <>
              <div
                className="page__image"
                style={{
                  position: "relative",
                }}
              >
                <img
                  style={{
                    width: "650px",
                    filter: "drop-shadow(5px 1px 30px #365874)",
                  }}
                  src={bluelogo}
                  alt=""
                />
                {/* <img className="girl" src={redgirl} alt="" /> */}
                <img className="head" src={sidebluehead} alt="" />
                <img className="circle" src={circle} alt="" />
                <div className="small__images">
                  <h3>what's in the box</h3>
                  <div className="images">
                    <img className="headd" src={bluehead} alt="" />
                    <img className="grab" src={bluegrap} alt="" />
                    <img className="usb" src={usb} alt="" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className="rightside__section"
        style={{
          backgroundColor:
            color === "red"
              ? "#F9BDBD"
              : color === "mint"
              ? "#c4fcd3"
              : color === "white"
              ? "#fff"
              : color === "black"
              ? "#000"
              : color === "blue"
              ? "rgb(180 193 237)"
              : "",
        }}
      >
        <div className="padding">
          <div className="right__icons">
            {color === "white" ? (
              <img src={topIconBlack} alt="" />
            ) : (
              <img src={topIcon} alt="" />
            )}
            <div className="bottom__icon">
              <i
                style={{ color: color === "white" && "black" }}
                class="fa-solid fa-paper-plane"
              ></i>
              <i
                style={{ color: color === "white" && "black" }}
                class="fa-brands fa-instagram"
              ></i>
              <i
                style={{ color: color === "white" && "black" }}
                class="fa-brands fa-facebook-f"
              ></i>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
