import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "./useScrollFadeIn";

const MainStyle = styled.div`
  display: flex;
  padding: 5rem;
  color: white;
  flex-direction: row;
  align-items: center;
`;
const Item = styled.div`
  display: inline;
  font-size: 2rem;
  padding: 2rem;
`;
const Space = styled.div`
  height: 20rem;
`;

const skills = [
  "JavaScript(ES8)",
  "React",
  "Next.js",
  "Redux",
  "UI(material-ui,antd)"
];

const Skill = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.1),
    2: useScrollFadeIn("up", 1, 0.2),
    3: useScrollFadeIn("up", 1, 0.3),
    4: useScrollFadeIn("up", 1, 0.4)
  };
  return (
    <div>
      <MainStyle>
        <h1 style={{ display: "inline", marginRight: "15rem" }}>Skills</h1>
        {skills.map((skill, index) => (
          <Item key={skill} {...animatedItem[index]}>
            {skill}
          </Item>
        ))}
      </MainStyle>
      <hr style={{ color: "white", borderColor: "white" }} />
      {/* <Space /> */}
    </div>
  );
};

export default Skill;
