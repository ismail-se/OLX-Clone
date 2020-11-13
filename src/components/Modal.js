import React from "react";
import ReactDOM from "react-dom";
import "../style/Modal.css";
import close from "../img/cancel.svg";
import facebook from "../img/facebook.svg";
import google from "../img/google.svg";

function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <img src={close} alt="" className="close-icon" onClick={onClose} />

        <div>{children}</div>
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
