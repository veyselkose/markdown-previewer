import elements from "@/lib/markdownElements";
import ElementBtn from "./ElementBtn";

function Hints({ menu }) {
  return (
    <div
      className={`hints ${
        menu === "editor" ? "translate-100" : menu === "preview" ? "translate-200" : ""
      }`}
    >
      <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
        This is a simple Markdown Previewer. You can type your markdown code in the left panel and
        see the result in the right panel.
      </p>

      <p className="text-sm mb-2">Click on a buttons below to add it to your editor</p>
      <ul className="flex flex-col gap-3">
        {elements.map((item) => (
          <li key={item.name}>
            <ElementBtn item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hints;
