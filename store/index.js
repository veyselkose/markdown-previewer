import { configureStore } from "@reduxjs/toolkit";
import markdownSlice from "./markdownSlice";

const store = configureStore({
  reducer: {
    markdown: markdownSlice,
  },
});

export default store;