import React from 'react';
import styled from 'styled-components'

const Container = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  padding: 10px;
`;
const Ham = styled.div`
  padding:10px;
  position: relative;
  width: 35px;
  height: 30px;
`;
const Line = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: #000;
  width: 100%;
  height: 3px;
  &::before{
    content: '';
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 3px;
    top: 10px;
    left: 0;
  }
   &::after{
    content: '';
    background-color: #000;
    width: 100%;
    height: 3px;
    position: absolute;
    top: -10px;
    left: 0;
  }
`;
const Menu = () => {
    return (
        <Container>
            <Ham>
                <Line></Line>
            </Ham>
        </Container>
    );
};

export default Menu;