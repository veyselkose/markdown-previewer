import React from "react";

function MenuBtn({ menu, setMenu, setSavedListShow }) {
  return (
    <button
      onClick={() => {
        setMenu(!menu);
        setSavedListShow(!menu);
      }}
      className={`flex sm:hidden headerBtn ms-4`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="48"
          d="M88 152h336M88 256h336M88 360h336"
        />
      </svg>
    </button>
  );
}

export default MenuBtn;
