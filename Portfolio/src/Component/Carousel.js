import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../Img/img1.jpg";
import img2 from "../Img/img2.jpg";
import img3 from "../Img/img3.jpg";
import { list } from "./CircleLinkedList";

const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 25rem;
    height: 15rem;
  }
`;
const Main = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  > .move-right {
    opacity: 0.5;
    transform: translate(10rem, 0);
    height: 80%;
    width: 80%;
    transition-duration: 0.2s;
  }
  > .move-left {
    opacity: 0.5;
    transform: translate(-10rem, 0);
    height: 80%;
    width: 80%;
    transition-duration: 0.2s;
  }
`;
const LeftBack = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 15rem;

  > img {
    opacity: 0.5;
    height: 80%;
    width: 80%;
    object-fit: cover;
    overflow: hidden;
  }
  > .move-right {
    opacity: 1;
    z-index: 20;
    transform: translate(10rem, 0);
    height: 100%;
    width: 100%;
    transition-duration: 0.2s;
  }
  > .move-left {
    transform: translate(20rem, 0);
    height: 80%;
    width: 80%;
    transition-duration: 0.2s;
  }
`;
const RightBack = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 15rem;

  > img {
    opacity: 0.5;
    height: 80%;
    width: 80%;
    object-fit: cover;
    overflow: hidden;
  }
  > .move-left {
    opacity: 1;
    z-index: 20;
    transform: translate(-10rem, 0);
    height: 100%;
    width: 100%;
    transition-duration: 0.2s;
  }
  > .move-right {
    transform: translate(-20rem, 0);
    height: 80%;
    width: 80%;
    transition-duration: 0.2s;
  }
`;

const Carousel = () => {
  list.insert(img1);
  list.insert(img2);
  list.insert(img3);

  const [main, setMain] = useState(list.tail);
  const [show, setShow] = useState([false, false]);

  const rightButton = async () => {
    await setShow([false, true]);
    await setTimeout(() => {
      setMain(main.prev);
      setShow([false, false]);
    }, 200);
  };
  const leftButton = async () => {
    await setShow([true, false]);
    await setTimeout(() => {
      setMain(main.next);
      setShow([false, false]);
    }, 200);
  };
  return (
    <div>
      <Gallery>
        <LeftBack onClick={leftButton}>
          <img
            src={main.prev.data}
            alt="이미지"
            className={[(show[0] && "move-left") || (show[1] && "move-right")]}
          />
        </LeftBack>
        <Main>
          <img
            src={main.data}
            alt="이미지"
            className={[(show[0] && "move-left") || (show[1] && "move-right")]}
          />
        </Main>
        <RightBack onClick={rightButton}>
          <img
            src={main.next.data}
            alt="이미지"
            className={[(show[0] && "move-left") || (show[1] && "move-right")]}
          />
        </RightBack>
      </Gallery>
    </div>
  );
};

export default Carousel;
