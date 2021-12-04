import React from "react";
import styled from "styled-components";

const MainStyle = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  font-size: 3rem;
`;

const Intro = () => {
  return <MainStyle>안녕하세요 신입 프론트엔드 개발자 권오승입니다.</MainStyle>;
};

export default Intro;
