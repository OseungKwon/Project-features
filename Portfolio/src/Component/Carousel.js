import React, { useState } from "react";
import styled from "styled-components";
import { CircularLinkedList } from "./CircleLinkedList";
import img1 from "../Img/img1.jpg";
import img2 from "../Img/img2.jpg";
import img3 from "../Img/img3.jpg";

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 25rem;
    height: 15rem;
    overflow: hidden;
  }
`;
const Main = styled.div`
  z-index: 10;
  > img {
    height: 100%;
    object-fit: cover;
  }
`;
const LeftBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 15rem;
  > img {
    height: 80%;
    object-fit: cover;
  }
`;
const RightBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 15rem;
  > img {
    height: 80%;
    object-fit: cover;
  }
`;

const Carousel = () => {
  const [main, setMain] = useState(2);
  const library = [img1, img2, img3];
  const leftButton = () => {
    main > 0 && setMain(main - 1);
  };
  const rightButton = () => {
    main < library.length - 1 && setMain(main + 1);
  };
  return (
    <div>
      <Gallery>
        <LeftBack>
          <img src={library[main - 1]} alt="이미지" style={{ opacity: 0.5 }} />
        </LeftBack>
        <Main>
          <img src={library[main]} alt="이미지" />
        </Main>
        <RightBack>
          <img src={library[main - 1]} alt="이미지" style={{ opacity: 0.5 }} />
        </RightBack>
      </Gallery>
      <Button onClick={leftButton}>left</Button>
      <Button onClick={rightButton}>right</Button>
    </div>
  );
};

export default Carousel;
