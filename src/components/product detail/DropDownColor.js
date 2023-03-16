import React, { forwardRef, useEffect, useRef, useState } from "react";

const DropDownColor = forwardRef(({ inputVisibility, toggle }, ref) => {
  const colorOptions = [
    { id: 1, color: "White" },
    { id: 2, color: "Black" },
    { id: 3, color: "Blue" },
    { id: 4, color: "Brown" },
    { id: 5, color: "Olive" },
  ];

  const [colorInputValue, setColorInputValue] = useState("");
  const colorOptionRef = useRef([]);

  useEffect(() => {
    function selectOption(e) {
      setColorInputValue(e.currentTarget.textContent);
      toggle();
    }
    colorOptionRef.current.forEach((el) => {
      if (el) {
        el.addEventListener("click", selectOption);
      }
    });
    return () => {
      colorOptionRef.current.forEach((el) => {
        if (el) {
          el.removeEventListener("click", selectOption);
        }
      });
    };
  });

  return (
    <>
      <span>Color</span>
      <div
        className="dropDownColor"
        id="dropDownColor"
        aria-expanded={inputVisibility}
      >
        <input
          id="colorInput"
          type="text"
          placeholder="Select a color"
          readOnly
          value={colorInputValue}
          onClick={() => toggle()}
          ref={ref}
        />
        <ul className="options">
          {colorOptions.map((colorOption) => (
            <li
              key={colorOption.id}
              ref={(node) => {
                colorOptionRef.current.push(node);
              }}
            >
              {colorOption.color}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

export default DropDownColor;
