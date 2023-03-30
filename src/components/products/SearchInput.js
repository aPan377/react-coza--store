import React, { forwardRef, useEffect, useRef, useState } from "react";

import { MdOutlineClear } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

const SearchInput = forwardRef((props, ref) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <input
        type="text"
        placeholder="Product title..."
        ref={ref}
        onChange={(e) => setSearchParams({ search: e.target.value })}
      />
      <span
        onClick={() => {
          ref.current.value = "";
          props.clear();
        }}
        aria-expanded={ref.current.value ? true : false}
      >
        <MdOutlineClear />
      </span>
    </>
  );
});

export default SearchInput;
