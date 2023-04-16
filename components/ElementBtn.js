import { addElement } from "@/store/markdownSlice";
import React from "react";
import { useDispatch } from "react-redux";

function ElementBtn({item}) {
  const dispatch = useDispatch();
  return (
    <button className="btn" onClick={() => dispatch(addElement(item.value))}>
      {item.name}
    </button>
  );
}

export default ElementBtn;
