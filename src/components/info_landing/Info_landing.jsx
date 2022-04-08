import React from "react";
import "./info_landing.scss";
import Thumb from "../../imgs/thumb.png";
import Imgage from "../../imgs/image.png";
import Ellipse_red from "../../imgs/Ellipse_red.png";
import Ellipse_blue from "../../imgs/Ellipse_blue.png";

const Info_landing = () => {
  return (
    <div className="info-landing">
      <img className="ellipse_blue" src={Ellipse_blue} alt="" />
      <img className="ellipse_red-1" src={Ellipse_red} alt="" />
      <div className="info-top">
        <div className="info-intro">
          <h2>Professional Development in Teaching & Learning (PDTL)</h2>
          <h1>Recommender</h1>
          <p>
            The University’s professional development structure PD-TL was
            enhanced in efforts to extend training opportunities to teaching
            staff (faculty and associates). In recognition that they may have
            varied teaching experiences, and hence, differing needs, an online
            diagnostic tool would be implemented to recommend personalised
            training plans.
          </p>
        </div>
        <div className="img-area">
          <img src={Thumb} alt="" />
          <p className="line-brown"></p>
        </div>
      </div>
      <div className="info-bottom">
        <div className="info-bottom-left">
          <h3>How does our recommender work?</h3>
          <p>
            With 3 simple steps, you will receive a recommedation for courses
            that you can attend to strengthen your teaching competencies.
          </p>
          <div className="steps">
            <div className="step1">
              <div className="step1-cycle cycle">
                <p>Step 1</p>
              </div>
              <div className="step1-text text">Select questionnaire</div>
            </div>
            <div className="step2">
              <div className="step2-cycle cycle">
                <p>Step 2</p>
              </div>
              <div className="step2-text text">Complete questionnaire</div>
            </div>
            <div className="step3">
              <div className="step3-cycle cycle">
                <p>Step 3</p>
              </div>
              <div className="step3-text text">
                Review recommendation and indicate interest
              </div>
            </div>
          </div>
          <div className="signin">
            <p className="signin-text">
              It’s that simple. Sign in with your SUSS ID and password to begin.
            </p>
            <button>Sign in</button>
          </div>

          <img src={Ellipse_red} alt="" />
        </div>
        <div className="info-bottom-right">
          <h3>View our PDTL Programme Guide</h3>
          <img src={Imgage} alt="" />
          <div className="visit">
            <p className="visit-text">
              Visit our SUSS Teaching & Learning Centre (TLC) website
            </p>
            <button>Visit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info_landing;
