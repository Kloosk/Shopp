import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div`
  z-index: 1000;
  display: none;
  position: absolute;
  top: 102%;
  right: 0;
  width: 100vw;
  background-color: #fff;
  padding: 15px 0;
  height: 7vh;
  @media (min-width: 992px){
    display: block;
  }
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Li = styled.li`
border-bottom: 2px solid #fff;
 &:hover{
    border-bottom: 2px solid #E9500E;
  }
`;
const Linkk = styled(Link)`
  color: #000;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover{
    color: #E9500E;
  }
`;
const DropDown = styled.div`
  display: none;
  position: absolute;
  left: 0;
  width: 100vw;
  background-color: #fff;
  min-height: 30vh;
  align-items: start;
  border-bottom: 2px solid #000;
  padding: 25px 14vw;
 ${Li}:hover &{
    display: flex;
  }
`;
const DropUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 125px;
`;
const DropLi = styled.li`
  margin: 7px 0;
  padding: 3px;
`;
const DropLinkk = styled(Linkk)`
  font-size: 1.1rem;
   padding: 5px;
`;
const DropLinkkTitle = styled(Linkk)`
  font-size: 1.4rem;
   padding: 5px;
`;
const NavDesktop = () => {
    return (
        <Container>
            <Ul>
                <Li>
                    <Linkk to="/men">Nowości</Linkk>
                    <DropDown>
                        <DropUl>
                            <DropLi><DropLinkkTitle  to="/men">Buty</DropLinkkTitle></DropLi>
                            <DropLi><DropLinkk  to="/men">Sportowe</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Półbuty</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Sandały</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Trampki</DropLinkk></DropLi>
                        </DropUl>
                        <DropUl>
                            <DropLi><DropLinkkTitle to="/men">Marki</DropLinkkTitle></DropLi>
                            <DropLi><DropLinkk  to="/men">Sportowe</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Półbuty</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Sandały</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Trampki</DropLinkk></DropLi>
                        </DropUl>
                    </DropDown>
                </Li>
                <Li><Linkk to="/women">Damskie</Linkk>
                    <DropDown>
                        <DropUl>
                            <DropLi><DropLinkkTitle  to="/women">Buty</DropLinkkTitle></DropLi>
                            <DropLi><DropLinkk  to="/women/sportowe">Sportowe</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/women/sandaly">Półbuty</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/women/sandaly">Sandały</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/women/sportowe">Trampki</DropLinkk></DropLi>
                        </DropUl>
                        <DropUl>
                            <DropLi><DropLinkkTitle to="/men">Marki</DropLinkkTitle></DropLi>
                            <DropLi><DropLinkk  to="/men">Sportowe</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Półbuty</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Sandały</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Trampki</DropLinkk></DropLi>
                        </DropUl>
                    </DropDown>
                </Li>
                <Li><Linkk to="/men">Męskie</Linkk>
                    <DropDown>
                        <DropUl>
                            <DropLi><DropLinkkTitle  to="/men">Buty</DropLinkkTitle></DropLi>
                            <DropLi><DropLinkk  to="/men">Sportowe</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Półbuty</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Sandały</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Trampki</DropLinkk></DropLi>
                        </DropUl>
                        <DropUl>
                            <DropLi><DropLinkkTitle to="/men">Marki</DropLinkkTitle></DropLi>
                            <DropLi><DropLinkk  to="/men">Sportowe</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Półbuty</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Sandały</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Trampki</DropLinkk></DropLi>
                        </DropUl>
                    </DropDown>
                </Li>
                <Li><Linkk to="/women">Wyprzedaż</Linkk>
                    <DropDown>
                        <DropUl>
                            <DropLi><DropLinkkTitle  to="/men">Buty</DropLinkkTitle></DropLi>
                            <DropLi><DropLinkk  to="/men">Sportowe</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Półbuty</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Sandały</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Trampki</DropLinkk></DropLi>
                        </DropUl>
                        <DropUl>
                            <DropLi><DropLinkkTitle to="/men">Marki</DropLinkkTitle></DropLi>
                            <DropLi><DropLinkk  to="/men">Sportowe</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Półbuty</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Sandały</DropLinkk></DropLi>
                            <DropLi><DropLinkk  to="/men">Trampki</DropLinkk></DropLi>
                        </DropUl>
                    </DropDown>
                </Li>
            </Ul>
        </Container>
    );
};

export default NavDesktop;