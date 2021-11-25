import React, { ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./App.css";
import Title from "./Title";
import Text from "./Text";
import Photo from "./Photo";
import { KeyboardEvent } from "react";
import Counter from "./Counter";
import { useState } from "react";
import Pad from "./pages/Test/components/Pad";
import Calculator from "./pages/Test/components/Calculator";
import Test from "./pages/Test";

const App = () => {
  const [latestName, setLatestName] = useState("");
  const updateLatestName = (name: string) => {
    setLatestName(name);
  };

  return (
    <>
      <Test />
      <Pad keyName="789" callback={updateLatestName} />
      <Pad keyName="456" callback={updateLatestName} />
      <Pad keyName="123" callback={updateLatestName} />
      <article>{latestName} is clicked!</article>
    </>
  );
};
export default App;
