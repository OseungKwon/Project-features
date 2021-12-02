import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../Img/img1.jpg";
import img2 from "../Img/img2.jpg";
import img3 from "../Img/img3.jpg";

import p1_1 from "../Img/p1_1.png";
import p1_2 from "../Img/p1_2.png";
import p1_3 from "../Img/p1_3.png";
import p1_4 from "../Img/p1_4.png";

import p2 from "../Img/p2.png";

import { list } from "./CircleLinkedList";

const Img1 = styled.img`
  border: 1px solid #0f0f0f;
  width: 100%;
  grid-column: 1/4;
  grid-row: 1;
`;
const Img2 = styled.img`
  margin-top: 10rem;
  border: 1px solid #0f0f0f;
  width: 100%;
  grid-column: 3/5;
  grid-row: 2;
`;

const MainStyle = styled.div`
  padding: 10rem;
  background-color: black;
  height: 100rem;
  display: grid;
  color: white;

  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
`;

const Text = styled.div`
  grid-column: 4;
  grid-row: 1;
  font-weight: bold;
  margin-top: 15rem;
  padding: 2rem;
  font-size: 4rem;
`;
const Text2 = styled.div`
  grid-column: 1/3;
  grid-row: 2;
  font-weight: bold;
  margin-top: 15rem;
  padding: 2rem;
  font-size: 4rem;
`;

const Content = styled.div`
  grid-column: 4;
  grid-row: 1;
  padding: 2rem;
  margin-top: 21rem;
  font-size: 1rem;
`;
const Content2 = styled.div`
  grid-column: 1/3;
  grid-row: 2;
  padding: 2rem;
  margin-top: 21rem;
  font-size: 1rem;
`;

const Car = () => {
  list.insert(p1_4);
  list.insert(p1_3);
  list.insert(p1_2);
  list.insert(p1_1);

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
    <MainStyle>
      <Img1 src={p1_1} alt="img" />
      <Text>HANDPAINTING</Text>
      <Content>
        수화를 통해 청각 예술의 한 분야인 음악을, 시각 예술로 바꾸어주는 새로운
        예술활동 서비스수화를 통해 청각 예술의 한 분야인 음악을, 시각 예술로
        바꾸어주는 새로운 예술활동 서비스수화를 통해 청각 예술의 한 분야인
        음악을, 시각 예술로 바꾸어주는 새로운 예술활동 서비스수화를 통해 청각
        예술의 한 분야인 음악을, 시각 예술로 바꾸어주는 새로운 예술활동
        서비스수화를 통해 청각 예술의 한 분야인 음악을, 시각 예술로 바꾸어주는
        새로운 예술활동 서비스수화를 통해 청각 예술의 한 분야인 음악을, 시각
        예술로 바꾸어주는 새로운 예술활동 서비스수화를 통해 청각 예술의 한
        분야인 음악을, 시각 예술로 바꾸어주는 새로운 예술활동 서비스수화를 통해
        청각 예술의 한 분야인 음악을, 시각 예술로 바꾸어주는 새로운 예술활동
        서비스수화를 통해 청각 예술의 한 분야인 음악을, 시각 예술로 바꾸어주는
        새로운 예술활동 서비스수화를 통해 청각 예술의 한 분야인 음악을, 시각
        예술로 바꾸어주는 새로운 예술활동 서비스수화를 통해 청각 예술의 한
        분야인 음악을, 시각 예술로 바꾸어주는 새로운 예술활동 서비스수화를 통해
        청각 예술의 한 분야인 음악을, 시각 예술로 바꾸어주는 새로운 예술활동
        서비스
      </Content>
      <Img2 src={p2} alt="img" />
      <Text2>DEPL</Text2>
      <Content2>
        DEPL 코드 리뷰 서비스 프로젝트. 코드 리뷰 서비스를 만들기 전, 1차 MVP로
        qnaPage, blog 페이지를 만들었다. 여기서 qnaPage에 기여함코드 리뷰
        서비스를 만들기 전, 1차 MVP로 qnaPage, blog 페이지를 만들었다. 여기서
        qnaPage에 기여함코드 리뷰 서비스를 만들기 전, 1차 MVP로 qnaPage, blog
        페이지를 만들었다. 여기서 qnaPage에 기여함코드 리뷰 서비스를 만들기 전,
        1차 MVP로 qnaPage, blog 페이지를 만들었다. 여기서 qnaPage에 기여함코드
        리뷰 서비스를 만들기 전, 1차 MVP로 qnaPage, blog 페이지를 만들었다.
        여기서 qnaPage에 기여함코드 리뷰 서비스를 만들기 전, 1차 MVP로 qnaPage,
        blog 페이지를 만들었다. 여기서 qnaPage에 기여함코드 리뷰 서비스를 만들기
        전, 1차 MVP로 qnaPage, blog 페이지를 만들었다. 여기서 qnaPage에
        기여함코드 리뷰 서비스를 만들기 전, 1차 MVP로 qnaPage, blog 페이지를
        만들었다. 여기서 qnaPage에 기여함코드 리뷰 서비스를 만들기 전, 1차 MVP로
        qnaPage, blog 페이지를 만들었다. 여기서 qnaPage에 기여함코드 리뷰
        서비스를 만들기 전, 1차 MVP로 qnaPage, blog 페이지를 만들었다. 여기서
        qnaPage에 기여함
      </Content2>
    </MainStyle>
  );
};

export default Car;
