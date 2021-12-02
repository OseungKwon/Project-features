import React from "react";
import Car from "./Component/Car";
import Carousel from "./Component/Carousel";
import Projects from "./Component/Projects";
import Quote from "./Component/Quote";
import Top from "./Component/Top";

const App = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Top />
      <Carousel />
      <Carousel />
      <Car />
    </div>
  );
};

export default App;
