import React from "react";
import "../css/CoreConcepts.css";

const CoreConcept = ({ img, title = "Not Mapped", desc }) => {
  return (
    <li>
      <img className="img" src={img} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  );
};

export default CoreConcept;
