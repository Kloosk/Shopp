import React from 'react';
import styled from 'styled-components'
import {Slide} from "react-slideshow-image";

const Container = styled.section`
 width: 90vw;
 margin: 10vh auto 0 auto;
 @media (min-width: 992px){
      width: 40%;
    }
`;
const SlideEach = styled.div`

`;
const Element = styled.div`
    width: 100%;
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (min-width: 300px) 
    and (max-width: 814px)
    and (orientation: landscape) {
       height: 85vh;
    }
`;
const Photos = ({imgs}) => {
    const properties = {
        transitionDuration: 200,
        autoplay: false,
        indicators: true,
        arrows: true,
    };
    return (
        <Container>
            <Slide {...properties}>
                <SlideEach>
                    <Element style={{'backgroundImage': `url(${imgs[0]})`}}></Element>
                </SlideEach>
                <SlideEach>
                    <Element style={{'backgroundImage': `url(${imgs[1]})`}}></Element>
                </SlideEach>
            </Slide>
        </Container>
    )
};
export default Photos;