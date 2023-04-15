import { toggleHelp } from "@/store/markdownSlice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  return (
    <header className="header">
      <h1 className="text-2xl font-bold">Markdown Previewer</h1>
      <button className="bg-red-500  h-11 w-11 rounded ms-auto">theme</button>
      <button className="bg-blue-100 h-11 w-11 rounded ms-4" onClick={() => dispatch(toggleHelp())}>
        ?
      </button>
    </header>
  );
}

export default Header;
