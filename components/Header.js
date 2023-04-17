import { toggleHelp, toggleTheme } from "@/store/markdownSlice";
import { useDispatch, useSelector } from "react-redux";
import ThemeBtn from "./ThemeBtn";

function Header() {
  const helpActive = useSelector((state) => state.markdown.helpActive);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <h1 className="text-xl sm:text-2xl font-bold">Markdown Previewer</h1>
      <ThemeBtn />

      <button
        className={`headerBtn ms-4 font-bold ${helpActive ? "helpActive" : ""}`}
        onClick={() => dispatch(toggleHelp())}
      >
        ?
      </button>
    </header>
  );
}

export default Header;
