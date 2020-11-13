import React from "react";
import "../style/OLXApp.css";

function OLXApp() {
  return (
    <div className="olx-app">
      <div className="col">
        <img
          src="https://statics.olx.com.pk/external/base/img/phone-app.webp"
          alt=""
        />
      </div>
      <div className="col border-right">
        <h2>TRY THE OLX APP</h2>
        <p>
          Buy, sell and find just about anything using the app on your mobile.
        </p>
      </div>
      <div className="col">
        <h5>GET YOUR APP TODAY</h5>
        <div className="social">
          <img
            src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp"
            alt=""
          />
          <img
            src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default OLXApp;
