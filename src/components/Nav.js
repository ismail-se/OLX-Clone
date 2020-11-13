import React, { useState } from "react";
import "../style/Nav.css";
import arrow from "../img/down-arrow.svg";
import Categories from "./Categories";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    let arrow = document.querySelector(".arrow-cat");
    setIsOpen(false);
    arrow.classList.remove("rotate180");
  };
  const onClose = () => {
    let arrow = document.querySelector(".arrow-cat");
    setIsOpen(true);
    arrow.classList.add("rotate180");
  };
  return (
    <>
      <nav>
        <div
          onClick={() => {
            isOpen ? onOpen() : onClose();
          }}
          className="all"
        >
          <strong>ALL CATEGORIES</strong>
          <img className="arrow arrow-cat" src={arrow} alt="" />
        </div>
        <ul>
          <li>Mobile Phones</li>
          <li>Cars</li>
          <li>Motorcycles</li>
          <li>Houses</li>
          <li>TV - Video - Audio</li>
          <li>Tablets</li>
          <li>Land & Plots</li>
        </ul>
      </nav>
      <Categories open={isOpen} onClose={onClose} />
    </>
  );
}

export default Nav;
