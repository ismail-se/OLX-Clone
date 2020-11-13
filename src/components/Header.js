import React, { useState } from "react";
import Modal from "./Modal";
import "../style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import sell from "../img/sell.png";
import arrow from "../img/down-arrow.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <div className="header-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
            alt=""
          />
        </div>
        <div className="header-input">
          <div className="select">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              className="search-products rotate"
              value="Pakistan"
              placeholder="Search city, area or local"
            />
            <img className="arrow" src={arrow} alt="" />
          </div>
          <div className="search">
            <input
              type="text"
              className="search-products"
              placeholder="Find Cars, Mobile Phones and more..."
            />
            <button className="submit-btn">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="header-btns">
          <div
            className="header-login"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Login
          </div>
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            className="header-sale"
          >
            <img class="sell" src={sell} alt="" />
          </div>
        </div>
      </header>

      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        Fancy Item
      </Modal>
    </>
  );
}

export default Header;
