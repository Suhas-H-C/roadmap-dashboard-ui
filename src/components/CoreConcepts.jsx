import React from "react";
import "../css/CoreConcepts.css";
import { CORE_CONCEPTS } from "../utils/Data";
import CoreConcept from "./CoreConcept";

const CoreConcepts = () => {
  return (
    <section id="coreConcepts">
      <ul>
        {CORE_CONCEPTS.map((item, index) => (
          <CoreConcept
            key={index}
            img={item.image}
            title={item.title}
            desc={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
