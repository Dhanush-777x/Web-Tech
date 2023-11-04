import React, { useEffect } from "react";
import './footer.css'
import AOS from "aos";
import "aos/dist/aos.css";
function Footercomp() {
      useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    return (
      <div id="footer-page">
        <div className="footer-section">
          <h1 className="footer-heading" data-aos="flip-left">
            Rage Fitness
          </h1>
          <p data-aos="flip-right">Copyright © 2023 Rage Fitness</p>
          <div className="footer d-flex flex-row justify-content-center">
            <img className="footer-img" src="../images/li.png" alt="" />
            <img className="footer-img" src="../images/github.png" alt="" />
            <img className="footer-img" src="../images/gmail.png" alt="" />
            <img className="footer-img" src="../images/insta.png" alt="" />
          </div>
        </div>
      </div>
    );
}
export default Footercomp;
