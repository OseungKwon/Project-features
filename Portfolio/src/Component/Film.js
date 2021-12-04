import React, { useState } from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import p1_1 from "../Img/p1_1.png";
import p1_2 from "../Img/p1_2.png";
import p1_3 from "../Img/p1_3.png";
import p1_4 from "../Img/p1_4.png";

const MainStyle = styled.div`
  padding: 10rem;
  background-color: black;
  height: 30rem;
  color: white;
`;

const Gallery = styled.div`
  display: flex;
  position: relative;
  right: 10rem;
  margin-bottom: 10rem;
  display: flex;
  img {
    width: 25rem;
    height: 15rem;
  }
`;

const SelectArea = styled.div`
  display: flex;
  flex-direction: row;
`;
const Selector = styled.div`
  margin: 0.2rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: white;
`;

const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const Film = () => {
  const list = [p1_1, p1_2, p1_3, p1_4];

  return (
    <MainStyle style={{ width: "50rem" }}>
      <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls>
        <Img src={p1_1} alt="img" className="sliderimg" />
        <Img src={p1_2} alt="img" className="sliderimg" />
        <Img src={p1_3} alt="img" className="sliderimg" />
        <Img src={p1_4} alt="img" className="sliderimg" />
      </AliceCarousel>
    </MainStyle>
  );
};
{
  /* <AliceCarousel
  items={this.state.galleryItems}
  responsive={this.responsive}
  autoPlayInterval={2000}
  autoPlayDirection="rtl"
  autoPlay={true}
  fadeOutAnimation={true}
  mouseTrackingEnabled={true}
  disableAutoPlayOnAction={true}
/>; */
}

export default Film;
