import React, { useEffect, useState } from "react";

import slide1 from "../../../images/slide-01.jpg";
import slide2 from "../../../images/slide-02.jpg";
import slide3 from "../../../images/slide-03.jpg";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slider = () => {
  let [slideIndex, setSlideindex] = useState(0);

  useEffect(() => {
    if (slideIndex == 3) {
      setSlideindex((slideIndex = 0));
    } else if (slideIndex < 0) {
      setSlideindex((slideIndex = 2));
    }
  }, [slideIndex]);

  useEffect(() => {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].setAttribute("data-activeslide", "false");
    }
    slides[slideIndex].setAttribute("data-activeslide", "true");
    const sliderId = setInterval(() => {
      setSlideindex(slideIndex + 1);
    }, 10000);
    return () => clearInterval(sliderId);
  }, [slideIndex]);

  return (
    <div className="slider--container">
      <div className="slide--wrap">
        <div className="slide" data-activeslide="false">
          <img src={slide1} alt="slide background" />
          <div className="slide--text">
            <div className="slide--text1">Women Collection 2023</div>
            <div className="slide--text2">New Season</div>
            <div className="slide--text3">Shop Now</div>
          </div>
        </div>
        <div className="slide" data-activeslide="false">
          <img src={slide2} alt="slide background" />
          <div className="slide--text">
            <div className="slide--text1">Men New Season</div>
            <div className="slide--text2">Jackets & Coats</div>
            <div className="slide--text3">Shop Now</div>
          </div>
        </div>
        <div className="slide" data-activeslide="false">
          <img src={slide3} alt="slide background" />
          <div className="slide--text">
            <div className="slide--text1">Men Collection 2023</div>
            <div className="slide--text2">New Arrivals</div>
            <div className="slide--text3">Shop Now</div>
          </div>
        </div>
      </div>
      <div className="slider--buttons">
        <div
          className="slider--but-prev"
          onClick={() => setSlideindex(slideIndex - 1)}
        >
          <AiOutlineLeft />
        </div>
        <div
          className="slider--but-next"
          onClick={() => setSlideindex(slideIndex + 1)}
        >
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
