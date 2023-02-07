import React from "react";

import slide1 from "../../../images/slide-01.jpg";
import slide2 from "../../../images/slide-02.jpg";
import slide3 from "../../../images/slide-03.jpg";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slider = () => {
  return (
    <div className="slider--container">
      <div className="slide--wrap">
        <div className="slide">
          <img src={slide1} />
          <div className="slide--text">
            <div className="slide--text1">Women Collection 2023</div>
            <div className="slide--text2">New Season</div>
            <div className="slide--text3 shopHov">Shop Now</div>
          </div>
        </div>
        {/* <div className="slide">
          <img src={slide2} />
          <div className="slide--text">
            <div className="slide--text1">Men New Season</div>
            <div className="slide--text2">Jackets & Coats</div>
            <div className="slide--text3">Shop Now</div>
          </div>
        </div>
        <div className="slide">
          <img src={slide3} />
          <div className="slide--text">
            <div className="slide--text1">Men Collection 2023</div>
            <div className="slide--text2">New Arrivals</div>
            <div className="slide--text3">Shop Now</div>
          </div>
        </div> */}
      </div>
      <div className="slider--buttons">
        <div className="slider--but-prev">
          <AiOutlineLeft />
        </div>
        <div className="slider--but-next">
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
