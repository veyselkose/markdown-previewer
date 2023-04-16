import { updateMarkdown } from "@/store/markdownSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Editor({menu}) {
  const { markdown, helpActive } = useSelector((state) => state.markdown);
  const help = useSelector((state) => state.markdown.help);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateMarkdown("# Hello World!"));
  }, []);
  return (
    <div  className={`editor ${
      menu === "editor" ? "translate-100" : menu === "preview" ? "translate-200" : ""
    }`}>
      <textarea
        className="textarea"
        name="textarea-editor"
        id="text-area-editor"
        value={helpActive ? help : markdown}
        disabled={helpActive}
        onChange={(e) => dispatch(updateMarkdown(e.target.value))}
      ></textarea>
    </div>
  );
}

export default Editor;
