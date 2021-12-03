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
  white-space: pre-wrap;
  grid-column: 4;
  grid-row: 1;
  padding: 2rem;
  margin-top: 21rem;
  font-size: 1rem;
`;
const Content2 = styled.div`
  white-space: pre-wrap;
  grid-column: 1/3;
  grid-row: 2;
  padding: 2rem;
  margin-top: 21rem;
  font-size: 1rem;
`;
const Point = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const Highlight = styled.a`
  color: #13ca91;
  display: inline;
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
        <Point>설명</Point>
        {`아이들을 대상으로 수화에 대한 긍정적 인식을 높여, 청각 장애인 차별을 없애고자 사이트를 만들게 되었습니다.
머신러닝은 mediapip의 hands를 가져와 사용했으며, 이를 응용해 손의 상대 위치에 따라 수화 동작을 인식하고, 이를 프로세싱으로 보여주는 웹사이트를 개발하였습니다.`}
        <Point>진행 사항</Point>
        {`mediapipe를 활용해 손 동작을 인식시키고, 이에 따라 파티클이 다양하게 나타나는 프로세싱 작업을 하고 있습니다.`}
        <Point>기여</Point>
        {`머신러닝과 p5.js를 연결시키고, p5.js 코드를 수정하는 역할을 맡았습니다.

프로젝트를 진행하면서, p5.js를 활용해 어떻게 웹에서 예술을 표현하는지 알게 되었으며, 디자이너/기획 분들과 작업하며서 소통을 하면서 개발하는 것이 얼마나 중요성도가 높은지 깨닫게 되었습니다.
또한, 팀원들의 코드를 리뷰, `}
        <Highlight
          href="https://velog.io/@wkahd01/공모전-코드-개선"
          target="_blank"
        >
          개선
        </Highlight>
        {`하는 시간을 가지면서, 어떻게 하면 코드를 깔끔하게 짤 수 있을까 고민하는 계기가 되었습니다.`}
      </Content>
      <Img2 src={p2} alt="img" />
      <Text2>DEPL</Text2>
      <Content2>
        <Point>설명</Point>
        {`초보 개발자, 혹은 사수가 없는 신입 개발자를 타겟으로, 코드 리뷰 서비스를 제공해주는 웹페이지.
qna 페이지, 피드 페이지, 블로그 페이지, 코드 리뷰 서비스 페이지로 이루어져 있습니다.`}
        <Point>진행 사항</Point>
        {`1차 MVP를 앞두고 있으며, 코드 리뷰 서비스를 제외한 blog, qna, userInfo에 관한 코드를 짜는 중입니다.`}
        <Point>기여</Point>
        {`qna 페이지의 프론트엔드 부분을 담당해 프로젝트를 진행 중에 있습니다.
api를 연결시키는 과정에서 백엔드 팀원과의 지속적인 소통을 하며 데이터 통신이 원활하게 이루어지도록 만들었습니다.
또한, 프론트엔드 팀원과 동시에 같은 부분을 개발하는 상황속에서 깃 커밋을 작은 단위로 쪼개는 습관을 가지게 되었으며,
qna 댓글 기능을 개발하는 과정 속에서, 댓글이 정상적으로 업데이트가 되지 않는 문제가 발생하였는데, 이를 해결하기 위해 브라우저 동작 과정과 toast-ui editor setMarkdown 기능을 학습하고 이를 응용해 해결하였습니다.`}
      </Content2>
    </MainStyle>
  );
};

export default Car;
