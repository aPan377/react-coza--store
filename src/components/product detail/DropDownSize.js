import React, { forwardRef, useEffect, useRef, useState } from "react";

const DropDownSize = forwardRef(({ inputVisibility, toggle }, ref) => {
  const sizeOptions = [
    { id: 1, size: "S" },
    { id: 2, size: "M" },
    { id: 3, size: "L" },
    { id: 4, size: "XL" },
    { id: 5, size: "XXL" },
  ];

  const [sizeInputValue, setSizeInputValue] = useState("");
  const sizeOptionRef = useRef([]);

  useEffect(() => {
    function selectOption(e) {
      setSizeInputValue(e.currentTarget.textContent);
      toggle();
    }
    sizeOptionRef.current.forEach((el) => {
      if (el) {
        el.addEventListener("click", selectOption);
      }
    });
    return () => {
      sizeOptionRef.current.forEach((el) => {
        if (el) {
          el.removeEventListener("click", selectOption);
        }
      });
    };
  }, []);

  return (
    <>
      <span>Size</span>
      <div
        className="dropDownSize"
        id="dropDownSize"
        aria-expanded={inputVisibility}
      >
        <input
          id="sizeInput"
          type="text"
          placeholder="Select a size"
          readOnly
          value={sizeInputValue}
          onClick={toggle}
          ref={ref}
        />
        <ul className="options">
          {sizeOptions.map((sizeOption) => (
            <li
              key={sizeOption.id}
              ref={(node) => {
                sizeOptionRef.current.push(node);
              }}
            >
              {sizeOption.size}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

export default DropDownSize;
