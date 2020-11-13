import React from "react";
import "../style/Footer.css";
import facebook from "../img/facebook.svg";
import twitter from "../img/twitter.svg";
import youtube from "../img/youtube.svg";
import instagram from "../img/instagram.svg";

function Footer() {
  return (
    <>
      <div className="footer-nav">
        <div className="col">
          <ul>
            <li className="heading">POPULAR CATEGORIES</li>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Jobs</li>
            <li>Mobile Phone</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="heading">TRENDING SEARCH</li>
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="heading">ABOUT US</li>
            <li>About OLX Group</li>
            <li>OLX Blog</li>
            <li>Sitemap</li>
            <li>OLX for Bussiness</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="heading">OLX</li>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal and Privacy Information</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="heading">FOLLOW US</li>
            <li>
              <a href="https://www.facebook.com/olxpakistan" target="blank">
                <img className="footer-social" src={facebook} style={{ width: "24px" }} alt="Facebok" />
              </a>
              <a href="https://twitter.com/OLX_Pakistan" target="blank">
                <img className="footer-social" src={twitter} style={{ width: "24px" }} alt="Twitter" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1"
                target="blank"
              >
                <img className="footer-social" src={youtube} style={{ width: "24px" }} alt="Twitter" />
              </a>
              <a href="https://www.instagram.com/olx.pakistan/" target="blank">
                <img className="footer-social" src={instagram} style={{ width: "24px" }} alt="Twitter" />
              </a>
            </li>
            <div className="store">
              <img src="https://statics.olx.com.pk/external/base/img/appstore.webp" alt=""/>
              <img src="https://statics.olx.com.pk/external/base/img/playstore.webp" alt=""/>
            </div>
          </ul>
        </div>
      </div>
      <footer>
        <div className="left">
          <strong className="bold">Other Countries</strong>
          India - South Africa - Indonesia
        </div>
        <div className="right">
          <strong>Free Classifieds in Pakistan</strong> . © 2006-2020 OLX
        </div>
      </footer>
    </>
  );
}

export default Footer;
