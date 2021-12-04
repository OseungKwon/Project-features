import React from "react";
import Car from "./Component/Car";
import Skill from "./Component/Skill";
import Top from "./Component/Top";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

const App = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Top />
      <Skill />
      {/* <Carousel />
      <Carousel /> */}
      <Car />
    </div>
  );
};

export default App;

// const App = () => (
//   <ReactFullpage
//     scrollOverflow={true}
//     licenseKey={"YOUR_KEY_HERE"}
//     // scrollingSpeed={200} /* Options here */
//     render={({ state, fullpageApi }) => {
//       return (
//         <div>
//           <h1>hi</h1>
//           <ReactFullpage.Wrapper>
//             <div className="section" style={{ backgroundColor: "black" }}>
//               <Top />
//             </div>
//             <div className="section">
//               <Car />
//             </div>
//           </ReactFullpage.Wrapper>
//         </div>
//       );
//     }}
//   />
// );
// export default App;
