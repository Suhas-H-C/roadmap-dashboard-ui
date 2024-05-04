import React from "react";
import "../src/css/CoreConcepts.css";
import reactImg from "./assets/react-core-concepts.png";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import Header from "./components/Header";

function App() {
  const titleValue = "Core";
  return (
    <>
      <Header img={reactImg} title={titleValue} />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
