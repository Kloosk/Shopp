import React from 'react';
import styled from 'styled-components'
import TopbarSubSubMenu from "./TopbarSubSubMenu";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {menuOff} from "../../../../redux";

const Container = styled.nav`
  z-index: 7;
  position: absolute;
  top: 0;
  left: 0;
  width: 70vw;
  height: 100vh;
  background-color: #fff;
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
const Linkk = styled(Link)`
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
const SubSubMenu = () => {
    const show = useSelector(state => state.subsubmenu.subsubmenu);
    const name = useSelector(state => state.subsubmenu.name);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(menuOff());
    };
    return (
        <Container menuStatus={show}>
            <TopbarSubSubMenu/>
            {name === "Buty" &&
            <Ul>
                <Li><Linkk onClick={handleClick} to="/women/sportowe">Sportowe</Linkk></Li>
                <Li><Linkk onClick={handleClick} to="/women/sportowe">Półbuty</Linkk></Li>
                <Li><Linkk onClick={handleClick} to="/women/sandaly">Sandały</Linkk></Li>
                <Li><Linkk onClick={handleClick} to="/women/sportowe">Trampki</Linkk></Li>
            </Ul>
            }
            {name === "Marki" &&
            <Ul>
                <Li><Linkk onClick={handleClick} to="/men/sportowe">Lasocki</Linkk></Li>
                <Li><Linkk onClick={handleClick} to="/men/sandaly">VANS</Linkk></Li>
                <Li><Linkk onClick={handleClick} to="/men/sportowe">Jenny Fairy</Linkk></Li>
            </Ul>
            }
        </Container>
    );
};

export default SubSubMenu;