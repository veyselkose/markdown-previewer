import { loadMarkdowns, updateMarkdown } from "@/store/markdownSlice";
import { useDispatch, useSelector } from "react-redux";
import ThemeBtn from "./ThemeBtn";
import SavedBtn from "./SavedBtn";
import MenuBtn from "./MenuBtn";
import SaveBtn from "./SaveBtn";
import HelpBtn from "./HelpBtn";
import DeleteSave from "./DeleteSave";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Header() {
  const [savedListShow, setSavedListShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const markdowns = useSelector((state) => state.markdown.markdowns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMarkdowns());
  }, [dispatch]);

  return (
    <header className="dark:bg-zinc-900 bg-white dark:text-white p-4 rounded-md shadow z-50 flex items-center relative">
      <h1 className="text-xl sm:text-2xl font-bold mr-4">Markdown Previewer</h1>
      <SaveBtn isMobile={"headerBtn flex ms-auto sm:hidden"} />
      <MenuBtn menu={menu} setMenu={setMenu} setSavedListShow={setSavedListShow} />
      <motion.nav className={`header-nav-mobile ${menu ? "!translate-x-[0] !opacity-100" : ""}`}>
        <SavedBtn setSavedListShow={setSavedListShow} savedListShow={savedListShow} />
        <SaveBtn isMobile={"headerBtn hidden sm:flex ms-4"} />
        <ThemeBtn />
        <HelpBtn />
        <AnimatePresence>
          {savedListShow && (
            <motion.div
              key="modal"
              initial={{ top: -50, scale: 0.1, opacity: 0 }}
              animate={{ top: "124%", scale: 1, transition: { duration: 0.3 }, opacity: 1 }}
              exit={{ top: -150, scale: 0.1, transition: { duration: 0.3 }, opacity: 0 }}
              className="savedlist"
            >
              <h3 className="text-lg font-bold p-4">Saved Markdown</h3>
              {markdowns.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p>no saved markdown</p>
                </div>
              ) : (
                <ul className="max-h-96 overflow-y-auto sm:h-36 flex flex-col gap-1 px-4">
                  <AnimatePresence>
                    {markdowns.map((markdown) => (
                      <motion.li
                        key={markdown.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="cursor-pointer bg-gray-200 text-black dark:bg-zinc-700 dark:text-white p-2 rounded-md flex"
                      >
                        <button
                          onClick={() => {
                            dispatch(updateMarkdown(markdown.content));
                            setMenu(!menu);
                          }}
                          className="flex-1"
                        >
                          {markdown.title}
                        </button>
                        <DeleteSave id={markdown.id} />
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

export default Header;
