import React from 'react';
import styled from 'styled-components'
import TopbarSubMenu from "../TopbarSubMenu";


const Container = styled.nav`
  z-index: 6;
  position: absolute;
  top: 0;
  left: 0;
  width: 70vw;
  height: 100vh;
  transition: transform 0.2s ease-out;
  transform: ${props => props.menuStatus ? 'translateX(0)' : 'translateX(-102%)'};
`;
const Ul = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
`;
const Li = styled.li`

`;
const Btn = styled.button`
  border: none;
  outline: none;
  font-size: 1.1rem;
  width: 100%;
  height: 60px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background: transparent;
`;
const Svg = styled.svg`
  width: 15px;
  height: 15px;
`;
const Women = ({show}) => {
    return (
        <Container menuStatus={show}>
            <TopbarSubMenu/>
            <Ul>
                <Li><Btn>Buty<Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></Svg></Btn></Li>
                <Li><Btn>Marki<Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></Svg></Btn></Li>
                <Li><Btn>Polecane<Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></Svg></Btn></Li>
            </Ul>
        </Container>
    );
};

export default Women;