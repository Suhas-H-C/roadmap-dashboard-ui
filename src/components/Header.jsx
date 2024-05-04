import React from "react";
const Header = (props) => {
  return (
    <header>
      <img src={props.img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {props.title} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
