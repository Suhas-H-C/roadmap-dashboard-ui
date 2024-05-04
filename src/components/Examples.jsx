import React, { useState } from "react";
import { EXAMPLES } from "../utils/Data";
import TabButton from "./TabButton";
import Tabs from "./Tabs";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  const [tabContent, setTabContent] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    setTabContent(
      <div id="tab-content">
        <h3>{EXAMPLES[selectedButton].title}</h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>{EXAMPLES[selectedButton].code}</code>
        </pre>
      </div>
    );
  };

  return (
    <>
      <Tabs
        title="Examples"
        //keep this uppercases to indicate it's not a built in tag
        HeadingContainer="h2"
        buttons={
          <section id="tabButtons">
            <TabButton
              isSelected={selectedTopic === "Components"}
              onClick={() => handleSelect("Components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "JSX"}
              onClick={() => handleSelect("JSX")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "Props"}
              onClick={() => handleSelect("Props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "State"}
              onClick={() => handleSelect("State")}
            >
              State
            </TabButton>
          </section>
        }
      >
        {tabContent}
      </Tabs>
    </>
  );
};

export default Examples;
