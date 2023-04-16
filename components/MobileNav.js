import React from "react";

function MobileNav({ menu, setMenu }) {
  const onOptionChange = (e) => {
    setMenu(e.target.value);
  };
  return (
    <div className="nav-container">
      <input
        className="nav-input"
        type="radio"
        name="menu"
        id="appmenu"
        value="appmenu"
        checked={menu === "appmenu"}
        onChange={onOptionChange}
      />
      <label className="nav-label" htmlFor="appmenu">
        Menu
      </label>
      <input
        className="nav-input"
        type="radio"
        name="menu"
        id="editor"
        value="editor"
        checked={menu === "editor"}
        onChange={onOptionChange}
      />
      <label className="nav-label" htmlFor="editor">
        Editor
      </label>
      <input
        className="nav-input"
        type="radio"
        name="menu"
        id="preview"
        value="preview"
        checked={menu === "preview"}
        onChange={onOptionChange}
      />
      <label className="nav-label" htmlFor="preview">
        Preview
      </label>
      <div className="active"></div>
    </div>
  );
}

export default MobileNav;
