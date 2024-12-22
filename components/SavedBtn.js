import React from "react";

function SavedBtn({ setSavedListShow, savedListShow }) {
  return (
    <button className={`hidden sm:flex headerBtn ms-auto ${savedListShow ? "btnActive" : ""}`} onClick={() => setSavedListShow(!savedListShow)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M400 0H176a64.11 64.11 0 0 0-62 48h228a74 74 0 0 1 74 74v304.89l22 17.6a16 16 0 0 0 19.34.5a16.41 16.41 0 0 0 6.66-13.42V64a64 64 0 0 0-64-64"
        />
        <path
          fill="currentColor"
          d="M320 80H112a64 64 0 0 0-64 64v351.62A16.36 16.36 0 0 0 54.6 509a16 16 0 0 0 19.71-.71L216 388.92l141.69 119.32a16 16 0 0 0 19.6.79a16.4 16.4 0 0 0 6.71-13.44V144a64 64 0 0 0-64-64"
        />
      </svg>
    </button>
  );
}

export default SavedBtn;
