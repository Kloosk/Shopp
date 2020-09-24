import React from 'react';
import styled from 'styled-components'
import Search from "./Search";
import Favourite from "./Favourite";
import Cart from "./Cart";
import {
    Link
} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartClose, menuClose} from "../../../redux";

const Container = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Li = styled.li`
   height: 100%;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 3px;
   @media (min-width: 992px){
    padding: 0 10px;
  }
`;
const Href = styled(Link)`
  text-decoration: none;
  color: #000;
  height: 100%;
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   @media (min-width: 992px){
    width: auto;
  }
`;
const Btn = styled.button`
  border: none;
  outline: none;
  width: 10vw;
  background: transparent;
     @media (min-width: 992px){
    width: auto;
  }
`;
const P = styled.p`
  font-size: 0.8rem;
  color: #333;
  ${Href}:hover &{
   color: #E9500E;
  }
`;
const Svg = styled.svg`
  color: #000;
  height: 4vh;
  width:4vw;
  @media (min-width: 992px){
    width: 25px;
    height: 25px;
  }
`;
const Elements = () => {
    const dispatch = useDispatch();
    const exit = () => {
        dispatch(cartClose());
        dispatch(menuClose());
    };
    return (
        <Container>
            <Li><Btn><Search/></Btn></Li>
            <Li>
                <Href to="/registration" onClick={exit}>
                    <Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></Svg>
                    <P>Zaloguj</P>
                </Href>
            </Li>
            <Li><Btn><Favourite/></Btn></Li>
            <Li><Btn><Cart/></Btn></Li>
        </Container>
    );
};

export default Elements;