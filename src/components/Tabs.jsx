import React from "react";

const Tabs = ({ children, buttons, ...props }) => {
  //   const HeadingContainer = props.headingContainer;
  return (
    <>
      <props.HeadingContainer>{props.title}</props.HeadingContainer>
      {buttons}
      {children}
    </>
  );
};

export default Tabs;
