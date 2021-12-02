import React from "react";
import styled from "styled-components";
import Quote from "./Quote";

const MainStyle = styled.div`
  padding: 10rem;
  background-color: black;
  height: 100rem;
  color: white;

  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
`;
const QuoteWrapper = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  div {
    font-size: 4rem;
  }
  div:first-child {
    padding-right: 40rem;
  }
`;

const Top = () => {
  return (
    <MainStyle>
      <h1>
        저는
        <QuoteWrapper>
          <div>[</div>
          <div>]</div>
        </QuoteWrapper>
        개발자입니다
        <Quote />
      </h1>
    </MainStyle>
  );
};

export default Top;
