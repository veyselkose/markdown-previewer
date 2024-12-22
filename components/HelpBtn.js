import { toggleHelp } from "@/store/markdownSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function HelpBtn() {
  const dispatch = useDispatch();
  const helpActive = useSelector((state) => state.markdown.helpActive);
  return (
    <button
      className={`flex headerBtn !w-[calc(100%-32px)] mx-auto mt-4 sm:mt-0 sm:mx-0 sm:!w-11 sm:ms-4 font-bold ${helpActive ? "btnActive" : ""}`}
      onClick={() => dispatch(toggleHelp())}
    >
      ?
    </button>
  );
}

export default HelpBtn;
