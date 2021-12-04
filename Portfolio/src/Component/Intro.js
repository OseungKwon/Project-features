import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useScroll } from "../Hook/hooks";
import useScrollFadeIn from "./useScrollFadeIn";
import { AiOutlineDown } from "react-icons/ai";

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100vh;
  font-size: 3rem;
  white-space: pre-line;
  div {
    padding: 0.5rem;
  }
`;
const Bottom = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 2rem;
`;
const Contact = styled.div`
  font-size: 1rem;
  b:first-child {
    padding-right: 1rem;
  }
  a {
    color: gray;
  }
`;

const Intro = () => {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.scrollY > 0 && show) {
      setShow(false);
      window.scrollTo({ top: 1000, behavior: "smooth" });
    }
  }, [scrollY, show]);

  return (
    <MainStyle>
      <div {...useScrollFadeIn("up", 1, 0)}>안녕하세요</div>
      <div {...useScrollFadeIn("up", 1, 0.5)}>신입 프론트엔드 개발자</div>
      <div {...useScrollFadeIn("up", 1, 1.1)}>권오승입니다</div>
      <Bottom>
        <Contact {...useScrollFadeIn("up", 1, 2)}>
          <b>Contact</b>email: 00osos@naver.com <b>|</b> github:
          <a href="https://github.com/OseungKwon">OseungKwon</a>
        </Contact>
        <AiOutlineDown style={{ fontSize: "3rem" }} />
      </Bottom>
    </MainStyle>
  );
};

export default Intro;
