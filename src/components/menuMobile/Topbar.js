import React from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {menuOff} from "../../redux";

const Container = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #000;
`;
const Title = styled.h1`
  font-size: 1.2rem;
  color: #000;
`;
const Exit = styled.button`
  padding: 10px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;
const Svg = styled.svg`
  color: #000;
  width: 3vw;
  height: 3vh;
`;
const Topbar = () => {
    const dispatch = useDispatch();
    const handleMenu = () => {
        dispatch(menuOff());
    };
    return (
        <Container>
            <Title>Wybierz kategorię</Title>
            <Exit onClick={handleMenu}><Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></Svg></Exit>
        </Container>
    );
};

export default Topbar;