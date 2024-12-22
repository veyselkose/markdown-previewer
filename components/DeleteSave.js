import { deleteMarkdown } from "@/store/markdownSlice";
import React from "react";
import { useDispatch } from "react-redux";

function DeleteSave({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(deleteMarkdown(id))}
      className="ms-auto bg-gray-300 transition-all dark:bg-zinc-800 flex items-center justify-center h-6 w-6 flex-shrink-0 rounded hover:ring-2 hover:ring-gray-300 active:!bg-red-600"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
        />
      </svg>
    </button>
  );
}

export default DeleteSave;
