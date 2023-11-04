import React, { useEffect } from "react";
import "./Info.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Info() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="info-page">
      <div className="info-section">
        <div className="info-cards d-flex flex-row">
          <div data-aos="flip-left">
            <div className=" cards info-1 d-flex flex-column">
              <div>
                <img
                  className="info-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGMT5FroyuGVxjzzj4kR0PotTpK_W-2ts8f9r5rfpRIiytNzRdQ7CtklWuLag4PE9zw0&usqp=CAU"
                  alt=""
                />
              </div>
              <div>
                <h3>Experienced Trainers</h3>
                <p className="info-desc">
                  A personal trainer is there to help with your fitness goals,
                  but they're also there to help improve your overall wellbeing. They assist you in each and every step.
                </p>
                <a href="">
                  <button className="button1">Know More</button>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="flip-left">
            <div className="cards info-2">
              <div>
                <img
                  className="info-img"
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwZXF1aXBtZW50fGVufDB8fDB8fHww&w=1000&q=80"
                  alt=""
                />
              </div>
              <div>
                <h3>Advanced Equipments</h3>
                <p className="info-desc">
                  Bowflex, Titan, Horizon, and Power Fitness are our top picks.
                  But some other reliable brands include Some of the most
                  reliable gym equipment brands include Precor, Matrix, and
                  LifeFitness.
                </p>
                <a href="#equipments-page">
                  <button className="button1">Know More</button>
                </a>
              </div>
            </div>
          </div>
          <div data-aos="flip-left">
            <div className="cards info-3">
              <div>
                <img
                  className="info-img"
                  src="https://images.everydayhealth.com/images/best-and-worst-diet-plans-for-weight-loss-1440x810.jpg?sfvrsn=e66c2823_1"
                  alt=""
                />
              </div>
              <div>
                <h3>Customized Diet Plans</h3>
                <p className="info-desc">
                  A personalized diet plan fits into your lifestyle and
                  schedule. You will not have to take out extra time from your
                  busy schedule to make those special recipes for yourself.
                </p>
                <a href="">
                  <button className="button1">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
