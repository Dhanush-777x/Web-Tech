import React from "react";
import './home.css'
function Homecomp() {

    return (
      <>
        <div className="home-section innerwidth">
          <div className="left-section  d-flex flex-row justify-content-center">
            <div className="card1">
              <h1 className="heading1">Feel The Power</h1>
              <h3 className="motto">Stay Fit Stay Confident</h3>
              <a href="#info-page" className="link">
                <button className="pos">Get Started</button>
              </a>
            </div>
            <div className="image-div">
              <img
                className="home-image"
                src="https://res.cloudinary.com/dvznq1gfv/image/upload/v1693027927/png-clipart-%D8%AA%D9%86%D8%A7%D8%B3%D8%A8_%D8%A7%D9%86%D8%AF%D8%A7%D9%85-sport-bodybuilding-mobile-phones-gym-gloves-physical-fitness-sport-removebg-preview_k3nv2z.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default Homecomp;