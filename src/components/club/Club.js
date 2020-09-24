import React from 'react';
import styled from 'styled-components'
import img1 from './img/img1.jpg'
const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 992px){
   position: relative;
  }
`;
const Bg = styled.div`
  width: 100%;
  height: 30vh;
  background-image: url(${img1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 @media (min-width: 992px){
    position: relative;
    height: 60vh;
      &::after{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000;
          opacity: 0.5;
      }
  }
`;
const Txt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80vw;
  margin: 20px 0;
  @media (min-width: 992px){
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
  }
`;
const H1 = styled.h1`
  font-size:1.2rem;
  color: #000;
 @media (min-width: 992px){
    font-size: 2rem;
    color: #fff;
  }
`;
const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #000;
  margin: 5px 0;
  @media (min-width: 992px){
    font-size: 1.4rem;
    color: #fff;
  }
`;
const P = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
  margin: 4px 0;
 @media (min-width: 992px){
    font-size: 1.2rem;
    color: #fff;
  }
`;
const Link = styled.a`
  font-size: 1.1rem;
  color: #000;
 @media (min-width: 992px){
    font-size: 1.3rem;
    color: #fff;
  }
`;
const Club = () => {
    return (
        <Container>
            <Bg></Bg>
            <Txt>
                <H1>Klub CCC</H1>
                <SubTitle>Więcej korzyści podczas zakupów</SubTitle>
                <P>Dołącz do naszego Klubu CCC - oferty specjalne oraz dodatkowe korzyści podczas zakupów - na wyciągnięcie ręki!</P>
                <Link href="#">Sprawdź</Link>
            </Txt>
        </Container>
    );
};

export default Club;