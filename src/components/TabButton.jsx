import React from "react";
import "../css/TabButton.css";
const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? "activateButton" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
