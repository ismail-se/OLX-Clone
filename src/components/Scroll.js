import React, { useEffect, useState } from "react";
import arrow from "../img/down-arrow.svg";
import "../style/Scroll.css";

function Scroll({showScroll}) {
  
  const [show, setShow] = useState(showScroll ? false : true);

  const handleScroll = () => {
    
    if (window.pageYOffset > showScroll) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showScroll) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <div>
      {show &&
      <div onClick={handleClick} className="back-to-top">
        <img className="arrow" src={arrow} alt="" /> Back to top
      </div>}
    </div>
  );
}

export default Scroll;
