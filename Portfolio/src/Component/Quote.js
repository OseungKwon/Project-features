import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

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
const Quote = ({ quote, yAxis }) => {
  const [text, setText] = useState("");

  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);
  const [doIt, setDoIt] = useState(true);

  if (scrollY > yAxis && doIt) {
    setDoIt(false);
    setLoading(false);
    for (let i = 1; i < quote.length + 1; i++) {
      (function (x) {
        setTimeout(function () {
          console.log(x);
          setText(quote.substring(0, x));
        }, 200 * x);
      })(i);
    }
  }
  useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", () => {
      if (mounted) {
        console.log("이벤트 시작", scrollY);
        setScrollY(window.pageYOffset);
        setLoading(false);
      }
    });
    return () => {
      console.log("이벤트 종료");
      mounted = false;
      // window.removeEventListener('scroll', debounce(listener, delay));
    };
  }, []);

  //   useEffect(() => {
  //     loopNum &&
  //       setTimeout(() => {
  //         if (count === fullText.length) {
  //           setIndex(index);
  //         }
  //         setCount(count + 1);
  //         setText(dataText.substring(0, count + 1));
  //       }, 200);

  //     return () => clearTimeout(text);
  //   }, [count, fullText, index, text]);
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
