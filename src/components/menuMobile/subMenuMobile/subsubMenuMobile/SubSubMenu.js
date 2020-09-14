import React from 'react';
import styled from 'styled-components'
import TopbarSubSubMenu from "./TopbarSubSubMenu";
import {useSelector} from "react-redux";



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
const SubSubMenu = () => {
    const show = useSelector(state => state.subsubmenu.subsubmenu);
    const name = useSelector(state => state.subsubmenu.name);
    return (
        <Container menuStatus={show}>
            <TopbarSubSubMenu/>
            {name === "Buty" &&
            <Ul>
                <Li><Link href="#">Sportowe</Link></Li>
                <Li><Link href="#">Półbuty</Link></Li>
                <Li><Link href="#">Sandały</Link></Li>
                <Li><Link href="#">Trampki</Link></Li>
            </Ul>
            }
            {name === "Marki" &&
            <Ul>
                <Li><Link href="#">Lasocki</Link></Li>
                <Li><Link href="#">VANS</Link></Li>
                <Li><Link href="#">Jenny Fairy</Link></Li>
            </Ul>
            }
        </Container>
    );
};

export default SubSubMenu;