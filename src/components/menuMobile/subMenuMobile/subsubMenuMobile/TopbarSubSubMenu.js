import React from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {menuOff, submenuOff, subSubMenuOff} from "../../../../redux";

const Container = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #000;
`;
const Title = styled.h1`
  font-size: 1.2rem;
  color: #000;
`;
const Btn = styled.button`
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

const TopbarSubSubMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.subsubmenu.name);

    const handleMenu = () => {
        dispatch(menuOff());
        dispatch(submenuOff());
        dispatch(subSubMenuOff());
    };
    const handleSubMenu = () => {
        dispatch(subSubMenuOff());
    };
    return (
        <Container>
            <Container>
                <Btn onClick={handleSubMenu}><Svg style={{transform: 'rotate(180deg)'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></Svg></Btn>
                <Title>{name}</Title>
                <Btn onClick={handleMenu}><Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></Svg></Btn>
            </Container>
        </Container>
    );
};

export default TopbarSubSubMenu;