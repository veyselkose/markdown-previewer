import { createSlice } from "@reduxjs/toolkit";

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

const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    help,
    helpActive: false,
    markdown: "",
    dark: false,
  },
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
    },
  },
});

export const { updateMarkdown, toggleHelp, addElement ,toggleTheme} = markdownSlice.actions;

export default markdownSlice.reducer;
