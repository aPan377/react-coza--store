import React, { useEffect, useRef, useState } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import slider1 from "../../images/product-detail-01.jpg";
import slider2 from "../../images/product-detail-02.jpg";
import slider3 from "../../images/product-detail-03.jpg";

const Slider = () => {
  //   const imgList = [img, img, img];

  const imgList = [
    {
      id: 1,
      src: slider1,
    },
    {
      id: 2,
      src: slider2,
    },
    {
      id: 3,
      src: slider3,
    },
  ];

  const imgListRef = useRef([]);

  const [slideIndex, setSlideIndex] = useState(0);
  const currIndexRef = useRef(0);

  function handleSlideIncrement() {
    if (slideIndex >= 0 && slideIndex <= 1) {
      setSlideIndex((slideIndex) => slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  }
  function handleSlideDecrement() {
    if (slideIndex == 0) {
      setSlideIndex(2);
    } else {
      setSlideIndex((slideIndex) => slideIndex - 1);
    }
  }

  function changeSlideImage(id) {
    setSlideIndex(id - 1);
  }

  useEffect(() => {
    currIndexRef.current = slideIndex;
    imgListRef.current.forEach((image) =>
      image.setAttribute("data-visibility", "false")
    );
    imgListRef.current[currIndexRef.current].setAttribute(
      "data-visibility",
      "true"
    );
  }, [slideIndex]);

  return (
    <>
      <div className="images--list">
        {imgList.map((item) => (
          <div key={item.id}>
            <img
              src={item.src}
              onClick={() => {
                changeSlideImage(item.id);
              }}
            />
          </div>
        ))}
      </div>
      <div className="images--slider--container">
        <div className="images--slider">
          {imgList.map((item) => (
            <img
              src={item.src}
              key={item.id}
              data-visibility="false"
              ref={(node) => {
                if (node && !imgListRef.current.includes(node)) {
                  imgListRef.current.push(node);
                }
              }}
            />
          ))}
        </div>
        <div className="images--slider--arrows">
          <div>
            <AiOutlineLeft id="slideLeft" onClick={handleSlideDecrement} />
          </div>
          <div>
            <AiOutlineRight id="slideRight" onClick={handleSlideIncrement} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
