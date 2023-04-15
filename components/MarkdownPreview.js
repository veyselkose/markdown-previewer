import { marked } from "marked";
import { useSelector } from "react-redux";

function Preview() {
  const { markdown, help, helpActive } = useSelector((state) => state.markdown);
  const parsedText = marked.parse(helpActive ? help : markdown);
  const processedText = { __html: parsedText };
  return (
    <div className="preview col-span-4">
      <article className="prose lg:prose-lg" dangerouslySetInnerHTML={processedText} />
    </div>
  );
}

export default Preview;
