import React from 'react';
import styled from 'styled-components'
import Topbar from "./Topbar";
import {useDispatch, useSelector} from "react-redux";
import {menuOff, submenuOn} from "../../redux";
import SubMenu from "./subMenuMobile/SubMenu";
import SubSubMenu from "./subMenuMobile/subsubMenuMobile/SubSubMenu";

const Over = styled.div`
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: transform 0.2s ease-out;
  transform: ${props => props.menuStatus ? 'translateX(0)' : 'translateX(-102%)'};
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 70vw;
  width: 30vw;
  height: 100vh;
  z-index: 4;
  background-color: #000;
  opacity: 0.8;
 
`;

const Container = styled.nav`
  width: 70vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  opacity: 1;
  background-color: #fff;
  color: #000;
`;
const Ul = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
`;
const Li = styled.li`

`;
const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  text-decoration: none;
  width: 100%;
  padding: 0 25px;
  height: 60px;
  cursor: pointer;
  color: #000;
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
const Hr = styled.hr`
  width: 95%;
  height: 3px;
  background-color: #000;
  margin: 40px auto;
  border: none;
`;
const Mobile = () => {
    const dispatch = useDispatch();
    const menuStatus = useSelector(state => state.menu.menu);
    const handleMenu = () => {
        dispatch(menuOff());
    };
    return (
        <Over menuStatus={menuStatus}>
            <Container>
                <Topbar/>
                <Ul>
                    <Li><Btn onClick={() => dispatch(submenuOn('Nowości'))}>Nowości<Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></Svg></Btn></Li>
                    <Li><Btn onClick={() => dispatch(submenuOn('Damskie'))}>Damskie<Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></Svg></Btn></Li>
                    <Li><Btn onClick={() => dispatch(submenuOn('Męskie'))}>Męskie<Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></Svg></Btn></Li>
                    <Li><Link href="#">Wyprzedaż</Link></Li>
                    <Hr></Hr>
                    <Li><Btn>Zamówienia i kontakt<Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></Svg></Btn></Li>
                    <Li><Link href="#">Zaloguj</Link></Li>
                    <Li><Link href="#">Znajdź sklep</Link></Li>
                </Ul>
            </Container>
            <SubMenu/>
            <SubSubMenu/>
            <Overlay onClick={handleMenu}></Overlay>
        </Over>
    );
};

export default Mobile;