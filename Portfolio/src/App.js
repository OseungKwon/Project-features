import React from "react";
import Car from "./Component/Car";
import Carousel from "./Component/Carousel";
import Projects from "./Component/Projects";
import Top from "./Component/Top";

const App = () => {
  return (
    <div>
      <Top />
      <Carousel />
      <Carousel />
      <Car />
    </div>
  );
};

export default App;
