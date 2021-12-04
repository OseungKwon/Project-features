import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Quote from "./Quote";

import { useScroll } from "../Hook/hooks";
import { AiOutlineUp } from "react-icons/ai";

const MainStyle = styled.div`
  display: block;
  padding: 10rem;
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
  color: white;
  display: inline;
`;

const Content = styled.div`
  white-space: pre-wrap;
  h2 {
    color: #13ca91;
  }
  h3 {
    color: #bfbfbf;
  }
  padding-top: 47rem;
  line-height: 2rem;
`;

const Intro = styled.div`
  width: 100vw;
  color: white;
  position: fixed;
  background-color: black;
  top: 0rem;
  padding-top: 2rem;
  padding-left: 10rem;
`;

const Icon = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const Top = () => {
  const { scrollY } = useScroll();
  const start = 900;
  const end = 2500;
  const [show, setShow] = useState([1, 0]);
  const [doIt, setDoIt] = useState([1, 1, 1]);
  console.log(start, scrollY, end);
  if (scrollY < start && doIt[0]) {
    setDoIt([0, 1, 1]);
    setShow([0, 0]);
  }

  if (scrollY < end && scrollY > start && doIt[1]) {
    setDoIt([1, 0, 1]);
    setShow([0, 1]);
  }
  if (scrollY > end && doIt[2]) {
    setDoIt([1, 1, 0]);
    setShow([0, 0]);
  }
  return (
    <div>
      <Intro style={{ display: `${show[1] ? "block" : "none"}` }}>
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
          저는
          <QuoteWrapper>
            <div>[</div>
            <div>]</div>
          </QuoteWrapper>
          개발자입니다
          <Quote start={start} end={end} />
        </div>
      </Intro>
      <MainStyle>
        <Content>
          <Icon>
            <AiOutlineUp
              style={{
                fontSize: "6rem",
                color: "gray",
                marginBottom: "2rem"
              }}
            />
          </Icon>
          <h2>- 프로그래밍 스터디 운영</h2>
          <h3>
            {`qna 페이지를 통해 js, python 등에서 코드를 짜다가 생긴 문제를 같이 고민하고 해결하였습니다. 
알고리즘 스터디를 진행해, 다른 사람에게 코드를 설명하는 능력을 키웠으며, 다른 관점에서 문제에 접근할 수 있는 시야를 키웠습니다. 
html, css, js에 대한 강의를 초보 개발자들을 대상으로 진행하였습니다.`}
          </h3>
          <h2 style={{ marginTop: "5rem" }}>- 블로그 운영</h2>
          <h3>
            {`qna 페이지를 통해 js, python 등에서 코딩을 하면서 겪었던 시행착오들,얻었던 지식들을 정리하고 사람들에게 공유하기 위해 `}
            <Highlight href="https://velog.io/@wkahd01" target="_blank">
              블로그
            </Highlight>
            {`를 운영하고 있습니다.
간단하게 해당 기술에 대한 설명이 들어간 글부터, 저의 경험과 함께 프로젝트 과정이 어떠하였는지 등에 대한 내용이 주를 이루고 있습니다.`}
          </h3>
          <h2 style={{ marginTop: "5rem" }}>- 광대역 융합 네트워크 연구실</h2>
          <h3>
            <Highlight
              href="http://bcnlab.hongik.ac.kr/lab-members.html"
              target="_blank"
            >
              홍익대학교 광대역 융합 네트워크 연구실
            </Highlight>
            {`에서 학부생으로 다니고 있으며,(2021.01.01~ing)
주로 NDN(Named Data Networking)과 SDN(Software Defined Networking)과 관련된 연구를 하고 있습니다.`}
          </h3>
          <h2 style={{ marginTop: "5rem" }}>- 1일 1코딩</h2>
          <h3>
            {`프로그래밍 실력을 늘리기 위해, 하루에 한 번 이상은 코드를 보면서 이를 개선하거나 새롭게 만드는 것을 좋아합니다.
`}
            <Highlight href="https://github.com/OseungKwon" target="_blank">
              깃(허브)
            </Highlight>
            {`를 다룰 줄 알며, 꾸준히 커밋을 하고 있습니다.`}
          </h3>
        </Content>
      </MainStyle>
      <hr style={{ color: "white", borderColor: "white" }} />
    </div>
  );
};

export default Top;
