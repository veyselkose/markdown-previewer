import { updateMarkdown } from "@/store/markdownSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Editor() {
  const { markdown, helpActive } = useSelector((state) => state.markdown);
  const help = useSelector((state) => state.markdown.help);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateMarkdown("# Hello World!"));
  }, []);
  console.log(markdown);
  return (
    <div className="editor">
      <textarea
        className="resize-none w-full !h-full p-4 text-xl bg-gray-100 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        name=""
        id=""
        value={helpActive ? help : markdown}
        disabled={helpActive}
        onChange={(e) => dispatch(updateMarkdown(e.target.value))}
      ></textarea>
    </div>
  );
}

export default Editor;
