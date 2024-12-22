import { createSlice } from "@reduxjs/toolkit";
import { openDB } from "idb"; // IndexedDB için gerekli kütüphane

const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

* apples
* oranges
* pears

Numbered list:

1. apples
2. oranges
3. pears

The rain---not the reign---in
Spain.

*[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

const getFromLocalStorage = (key) => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(key);
};

const initialDarkMode = (() => {
  if (typeof window !== "undefined") {
    const storedDarkMode = getFromLocalStorage("dark");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  }
  return false;
})();

// IndexedDB veritabanını başlat
const initDB = async () => {
  return openDB("MarkdownDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("markdowns")) {
        db.createObjectStore("markdowns", { keyPath: "id" });
      }
    },
  });
};

// Tüm markdown'ları getir
const fetchMarkdowns = async () => {
  const db = await initDB();
  return await db.getAll("markdowns");
};

// Yeni bir markdown kaydet
const saveMarkdownToDB = async (markdown) => {
  const db = await initDB();
  await db.put("markdowns", markdown);
};

// Belirli bir markdown'ı sil
const deleteMarkdownFromDB = async (id) => {
  const db = await initDB();
  await db.delete("markdowns", id);
};

const initialState = {
  help,
  helpActive: false,
  markdown: "",
  dark: initialDarkMode,
  markdowns: [], // Tüm markdown'ları saklayan dizi
  loading: false,
  error: null,
};

const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    updateMarkdown: (state, action) => {
      state.markdown = action.payload;
    },
    addElement: (state, action) => {
      state.markdown += action.payload;
    },
    toggleHelp: (state) => {
      state.helpActive = !state.helpActive;
    },
    toggleTheme: (state) => {
      state.dark = !state.dark;
      if (typeof window !== "undefined") {
        localStorage.setItem("dark", JSON.stringify(state.dark));
      }
    },
    setMarkdowns: (state, action) => {
      state.markdowns = action.payload;
    },
    addMarkdown: (state, action) => {
      state.markdowns.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    removeMarkdown: (state, action) => {
      state.markdowns = state.markdowns.filter((md) => md.id !== action.payload);
    },
  },
});

// Redux Thunk - Markdown'ları IndexedDB'den yükle
export const loadMarkdowns = () => async (dispatch) => {
  dispatch(markdownSlice.actions.setLoading(true));
  try {
    const markdowns = await fetchMarkdowns();
    dispatch(markdownSlice.actions.setMarkdowns(markdowns));
  } catch (error) {
    dispatch(markdownSlice.actions.setError("Markdown'lar yüklenirken hata oluştu."));
  } finally {
    dispatch(markdownSlice.actions.setLoading(false));
  }
};

// Redux Thunk - Yeni bir markdown kaydet
export const saveMarkdown = (markdown, title) => async (dispatch) => {
  try {
    const newMarkdown = { id: Date.now(), content: markdown, title: title };
    await saveMarkdownToDB(newMarkdown);
    dispatch(markdownSlice.actions.addMarkdown(newMarkdown));
  } catch (error) {
    dispatch(markdownSlice.actions.setError("Markdown kaydedilirken hata oluştu."));
  }
};

// Redux Thunk - Markdown'ı sil
export const deleteMarkdown = (id) => async (dispatch) => {
  try {
    await deleteMarkdownFromDB(id);
    dispatch(markdownSlice.actions.removeMarkdown(id));
  } catch (error) {
    dispatch(markdownSlice.actions.setError("Markdown silinirken hata oluştu."));
  }
};

export const {
  updateMarkdown,
  toggleHelp,
  addElement,
  toggleTheme,
  setMarkdowns,
  addMarkdown,
  setLoading,
  setError,
  removeMarkdown,
} = markdownSlice.actions;

export default markdownSlice.reducer;
