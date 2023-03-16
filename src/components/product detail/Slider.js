import React, { useEffect, useRef, useState } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slider = () => {
  //   const imgList = [img, img, img];

  const imgList = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
