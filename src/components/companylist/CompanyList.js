import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './img/adidas.png'
import img2 from './img/new.png'
import img3 from './img/nike.png'
import img4 from './img/reebok.png'
import img5 from './img/puma.png'
const H1 = styled.h1`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 18px;
`;
const Img = styled.img`
  height: 10vh;
`;
const Container = styled.section`
  width: 100vw;
  margin: 40px 0;
`;

const CompanyList = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
    };
    return(
        <Container>
            <H1>Lista marek</H1>
            <Slider {...settings}>
                <Img src={img1}></Img>
                <Img src={img2}></Img>
                <Img src={img3}></Img>
                <Img src={img4}></Img>
                <Img src={img5}></Img>
            </Slider>
        </Container>
    )
};
export default CompanyList