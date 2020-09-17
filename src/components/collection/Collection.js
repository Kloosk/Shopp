import React from 'react';
import styled from 'styled-components'
import img from './img/img.jpg'
import img2 from './img/img2.jpg'
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
`;
const Flex = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Bg = styled.div`
  height: 40vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Title = styled.h1`
  margin: 20px 0;
  font-size: 1.5rem;
  color: #000;
`;
const Linkk = styled(Link)`
  font-size: 1.1rem;
  color: #000;
`;
const Collection = () => {
    return (
        <Container>
            <Flex>
                <Bg style={{backgroundImage: `url(${img})`}}></Bg>
                <Title>Jenny Fairy - sandały</Title>
                <Linkk to="/men">Zobacz więcej</Linkk>
            </Flex>
            <Flex>
                <Bg style={{backgroundImage: `url(${img2})`}}></Bg>
                <Title>Jenny Fairy - sportowe</Title>
                <Linkk to="/women">Zobacz więcej</Linkk>
            </Flex>
        </Container>
    );
};

export default Collection;