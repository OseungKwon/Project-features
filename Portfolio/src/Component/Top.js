import React from "react";
import styled from "styled-components";
import Quote from "./Quote";

const MainStyle = styled.div`
  padding: 10rem;
  background-color: black;
  height: 40rem;
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

const Highlight = styled.a`
  color: #13ca91;
  display: inline;
`;

const Top = () => {
  return (
    <div>
      <MainStyle>
        <h1 style={{ marginBottom: "10rem" }}>
          {" "}
          저는
          <QuoteWrapper>
            <div>[</div>
            <div>]</div>
          </QuoteWrapper>
          개발자입니다
          <Quote quote="나누는 것을 좋아하는" yAxis={120} />
        </h1>
        <h2>- 프로그래밍 스터디 운영</h2>
        <h3>
          qna 페이지를 통해 js, python 등에서 코드를 짜다가 생긴 문제를 같이
          고민하고 해결하였습니다. 알고리즘 스터디를 진행해, 다른 사람에게
          코드를 설명하는 능력을 키웠으며, 다른 관점에서 문제에 접근할 수 있는
          시야를 키웠습니다. html, css, js에 대한 강의를 초보 개발자들을
          대상으로 진행하였습니다.
        </h3>
        <h2 style={{ marginTop: "5rem" }}>- 블로그 운영</h2>

        <h3>
          qna 페이지를 통해 js, python 등에서 코딩을 하면서 겪었던 시행착오들,
          얻었던 지식들을 정리하고 사람들에게 공유하기 위해
          <Highlight href="https://velog.io/@wkahd01" target="_blank">
            블로그
          </Highlight>
          를 운영하고 있습니다. 간단하게 해당 기술에 대한 설명이 들어간 글 부터,
          저의 경험과 함께 프로젝트 과정이 어떠하였는지 등에 대한 내용이 주를
          이루고 있습니다.
        </h3>
      </MainStyle>
      <MainStyle>
        <h1 style={{ marginBottom: "10rem" }}>
          저는
          <QuoteWrapper>
            <div>[</div>
            <div>]</div>
          </QuoteWrapper>
          개발자입니다
          <Quote quote="배움을 주저하지 않는" yAxis={300} />
        </h1>
        <h2>- 프로그래밍 스터디 운영</h2>
        <h3>
          qna 페이지를 통해 js, python 등에서 코드를 짜다가 생긴 문제를 같이
          고민하고 해결하였습니다. 알고리즘 스터디를 진행해, 다른 사람에게
          코드를 설명하는 능력을 키웠으며, 다른 관점에서 문제에 접근할 수 있는
          시야를 키웠습니다. html, css, js에 대한 강의를 초보 개발자들을
          대상으로 진행하였습니다.
        </h3>
        <h2 style={{ marginTop: "5rem" }}>- 블로그 운영</h2>

        <h3>
          qna 페이지를 통해 js, python 등에서 코딩을 하면서 겪었던 시행착오들,
          얻었던 지식들을 정리하고 사람들에게 공유하기 위해{" "}
          <a
            href="https://velog.io/@wkahd01"
            style={{
              color: "#13ca91",
              display: "inline"
            }}
          >
            블로그
          </a>
          를 운영하고 있습니다. 간단하게 해당 기술에 대한 설명이 들어간 글 부터,
          저의 경험과 함께 프로젝트 과정이 어떠하였는지 등에 대한 내용이 주를
          이루고 있습니다.
        </h3>
      </MainStyle>
    </div>
  );
};

export default Top;
