import React from "react";

const Header = ({ handleMode }) => {
  return (
    <div className="header">
      <h1>Take Notes</h1>
      <button
        onClick={() => handleMode((previousMode) => !previousMode)}
        className="save"
      >
        Change Mode
      </button>
    </div>
  );
};

export default Header;
