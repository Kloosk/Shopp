import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from './img/img.jpg';
import img2 from './img/imgg.jpg';
import {Link} from "react-router-dom";

const Container = styled.section`
 width: 90vw;
 margin: 10vh auto 0 auto;
`;
const SlideEach = styled.div`
`;
const Element = styled.div`
    width: 100%;
    height: 30vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position:relative;
    &::after{
    content: '';
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.4;
}
`;
const Linkk = styled(Link)`
  color: #000;
  text-decoration: none;
  z-index: 2;
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: 10%;
  background: #fff;
  padding: 7px 14px;
  border: none;
  width: 40%;
  text-align: center;
  font-size: 1.2rem;
`;
const Title = styled.h1`
  z-index:5;
  position: absolute;
  color: #fff;
  top: 50%;
  left: 5%;
  letter-spacing: 2px;
  font-size: 4rem;
  text-transform: uppercase;
  transform: translateY(-50%);
`;
const Slideshow = () => {
    const slideImages = [img1,img2];

    const properties = {
        duration: 5000,
        transitionDuration: 200,
        infinite: true,
        indicators: true,
        arrows: false,
    };
    return (
        <Container>
            <Slide {...properties}>
                <SlideEach>
                    <Element style={{'backgroundImage': `url(${slideImages[0]})`}}>
                        <Linkk to="/women">Zobacz więcej</Linkk>
                        <Title>Women</Title>
                    </Element>
                </SlideEach>
                <SlideEach>
                    <Element style={{'backgroundImage': `url(${slideImages[1]})`}}>
                        <Linkk to="/men">Zobacz więcej</Linkk>
                        <Title>Men</Title>
                    </Element>
                </SlideEach>
            </Slide>
        </Container>
    )
};
export default Slideshow