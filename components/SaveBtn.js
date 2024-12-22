import { saveMarkdown } from "@/store/markdownSlice";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SaveBtn({ isMobile }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const markdown = useSelector((state) => state.markdown.markdown);
  const handleSave = (content, x) => {
    dispatch(saveMarkdown(content, x));
    setTitle("");
  };
  return (
    <>
      <button
        className={isMobile}
        onClick={() => setShowModal(!showModal)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M400 480a16 16 0 0 1-10.63-4L256 357.41L122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16"
          />
        </svg>
      </button>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className={`
        fixed h-full w-full bg-black top-0 left-0 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center`}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col bg-white dark:bg-zinc-900 p-4 rounded-md shadow-lg"
            >
              <label htmlFor="title">Title</label>
              <input
                onChange={(e) => {
                  e.defaultPrevented;
                  setTitle(e.target.value);
                }}
                value={title}
                type="text"
                name="title"
                className="p-2 bg-gray-100 border-gray-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white border rounded-md focus:outline-none focus:!border-blue-500"
              />
              <div className="flex items-center justify-end gap-4 mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-200 transition-all dark:bg-zinc-600 flex items-center justify-center h-10 flex-shrink-0 rounded hover:ring-2 px-4 hover:ring-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleSave(markdown, title);
                    setShowModal(false);
                  }}
                  className="bg-blue-500 transition-all flex items-center justify-center h-10 flex-shrink-0 rounded hover:ring-2 px-4 hover:ring-gray-300 text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SaveBtn;
