import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../style/Modal.css";
import close from "../img/cancel.svg";
import facebook from "../img/facebook.svg";
import google from "../img/google.svg";
import arrow from "../img/down-arrow.svg";
import post from "../img/loginPost.webp";
import favorite from "../img/loginFavorite.webp";
import chat from "../img/loginChat.webp";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const sliderData = [
  {
    id: 1,
    img: post,
    desc: "Help make OLX safer place to buy and sell",
  },
  {
    id: 2,
    img: favorite,
    desc: "Contact and close deal faster",
  },
  {
    id: 3,
    img: chat,
    desc: "save all your favourite item",
  },
];

function Modal({ open, children, onClose }) {
  const [slider, setSlider] = useState(sliderData[0]);

  if (!open) return null;

  const leftSlide = () => {
    if (slider.id === 1) {
      setSlider(sliderData[2]);
    } else {
      setSlider(sliderData[slider.id - 2]);
    }
  };
  const rightSlide = () => {
    if (slider.id === 3) {
      setSlider(sliderData[0]);
    } else {
      setSlider(sliderData[slider.id]);
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <img src={close} alt="" className="close-icon" onClick={onClose} />

        <div className="slider">
          <img className="arrow" src={arrow} alt="" onClick={leftSlide} />
          <div className="inner-slider">
            <img src={slider.img} alt="" />
            <p>{slider.desc}</p>
            <div className="dots">
              <FiberManualRecordIcon
                style={{ fontSize: "small", margin: "0 0.3rem", color: "gray" }}
              />
              <FiberManualRecordIcon
                style={{ fontSize: "small", margin: "0 0.3rem", color: "gray" }}
              />
              <FiberManualRecordIcon
                style={{ fontSize: "small", margin: "0 0.3rem", color: "gray" }}
              />
            </div>
          </div>

          <img className="arrow" onClick={rightSlide} src={arrow} alt="" />
        </div>
        <div className="continue">Continue with phone</div>
        <div className="continue">
          <img src={facebook} alt="" />
          Continue with facebook
        </div>
        <div className="continue">
          <img src={google} alt="" />
          Continue with google
        </div>
        <div className="continue">Continue with email</div>
        <p className="share">
          We won't share your personal details with anyone
        </p>
        <p className="policy">
          If you continue, you are accepting{" "}
          <a href="https://help.olx.com.pk/hc/en-us">
            OLX Terms and Conditions and Privacy Policy
          </a>
        </p>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
