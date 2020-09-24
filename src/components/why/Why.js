import React from 'react';
import styled from 'styled-components'

const Container = styled.section`
  width: 100vw;
  padding: 0 25px;
`;
const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 40px;
    @media (min-width: 992px){
      margin: 40px 0;
  }
`;
const FlexOut = styled.div`
  @media (min-width: 992px){
     display: flex;
     align-items: center;
     justify-content: space-around;
     width: 100%;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
   @media (min-width: 992px){
    flex-direction: column;
    justify-content: center;
  }
`;
const H1 = styled.h1`
   font-size: 1.3rem;
   color: #000;
   @media (min-width: 992px){
    font-size: 1.6rem;
  }
`;
const P = styled.p`
  font-size: 1.1rem;
  color: #333;
  @media (min-width: 992px){
    font-size: 1.3rem;
  }
`;
const Svg = styled.svg`
  width: 40px;
  height: 40px;
  color: #E9500E;
  margin-right: 20px;
  @media (min-width: 992px){
     margin: 0;
     width: 60px;
     height: 60px;
  }
`;
const FlexIn = styled.div`
   @media (min-width: 992px){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
`;
const Why = () => {
    return (
        <Container>
            <Title>Dlaczego warto kupić w CCC</Title>
            <FlexOut>
            <Flex>
                <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path></Svg>
                <FlexIn>
                    <H1>Darmowa dostawa*</H1>
                    <P>Promocja ograniczona czasowo</P>
                </FlexIn>
            </Flex>
            <Flex>
                <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="undo-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z"></path></Svg>
                <FlexIn>
                    <H1>30 dni na zwrot</H1>
                    <P>dla Klubowiczów</P>
                </FlexIn>
            </Flex>
            <Flex>
                <Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></Svg>
                <FlexIn>
                    <H1>Zamów</H1>
                    <P>swoje ulubione produkty do domu</P>
                </FlexIn>
            </Flex>
            </FlexOut>
        </Container>
    );
};

export default Why;