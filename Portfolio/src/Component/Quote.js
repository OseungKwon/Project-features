import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { throttle } from "lodash";
import { useScroll } from "../Hook/hooks";
const blink = keyframes`
    50% {
        border-color: transparent;
    }
`;

const Span = styled.span`
  border-left: 0.1em solid $font;
  animation: ${blink} 0.7s steps(1) infinite;
`;
const QuoteStyle = styled.div`
  position: relative;
  bottom: 7.2rem;
  left: 3rem;
  &__text span {
    animation: letter-glow 0.7s 0s ease both;
    @include nth-ani-delay(180, 0.05s);
  }
`;
const Quote = ({ start }) => {
  const quote = ["나누는 것을 좋아하는", "배움에 주저함이 없는"];
  const [text, setText] = useState("");
  const { scrollY } = useScroll();

  const [doIt, setDoIt] = useState([1, 1, 1]);
  const divide = [start + 100, start + 300, start + 600, start + 1000];

  if (scrollY > divide[0] && scrollY < divide[1] && doIt[0]) {
    setDoIt([0, 1, 1]);
    for (let i = 1; i < quote[0].length + 1; i++) {
      (function (x) {
        setTimeout(function () {
          console.log(x);
          setText(quote[0].substring(0, x));
        }, 200 * x);
      })(i);
    }
  }
  if (scrollY > divide[2] && scrollY < divide[3] && doIt[2]) {
    setText("");

    setDoIt([1, 1, 0]);
    for (let i = 1; i < quote[1].length + 1; i++) {
      (function (x) {
        setTimeout(function () {
          console.log(x);
          setText(quote[1].substring(0, x));
        }, 200 * x);
      })(i);
    }
  }

  return (
    <QuoteStyle>
      <span>{text}</span>
      <Span
        id="cursor"
        style={{
          borderLeft: "0.1em solid white",
          animation: "blink .7s step(1) intinite"
        }}
      ></Span>
    </QuoteStyle>
  );
};

export default Quote;
