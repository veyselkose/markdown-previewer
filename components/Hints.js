import { addElement } from "@/store/markdownSlice";
import React from "react";
import { useDispatch } from "react-redux";
import elements from "@/lib/markdownElements";

function Hints() {
  const dispatch = useDispatch();

  return (
    <div className="hints">
      <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
        This is a simple Markdown Previewer. You can type your markdown code in the left panel and
        see the result in the right panel.
      </p>

      <p className="text-sm mb-2">Click on a buttons below to add it to your editor</p>
      <ul className="flex flex-col gap-3 h-full">
        {elements.map((item) => (
          <li key={item.name}>
            <button className="btn" onClick={() => dispatch(addElement(item.value))}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hints;
