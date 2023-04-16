import { marked } from "marked";
import { useSelector } from "react-redux";

function Preview({menu}) {
  const { markdown, help, helpActive } = useSelector((state) => state.markdown);
  const parsedText = marked.parse(helpActive ? help : markdown);
  const processedText = { __html: parsedText };
  return (
    <div  className={`preview ${
      menu === "editor" ? "translate-100" : menu === "preview" ? "translate-200" : ""
    }`}>
      <article className="prose lg:prose-lg dark:prose-invert" dangerouslySetInnerHTML={processedText} />
    </div>
  );
}

export default Preview;
