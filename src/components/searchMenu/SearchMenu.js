import React from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";

const Container = styled.div`
 position: absolute;
 width: 100vw;
 height: 60px;
 padding: 10px 10px;
 background-color: #fff;
 display: flex;
 top: 100%;
 left: 0;
 opacity:  ${props => props.open ? 1 : 0};
 z-index: -1;
 transform: ${props => props.open ? `translateY(0)` : `translateY(-100%)`};
`;
const Input = styled.input`
  border: none;
  width: 70%;
  font-size: 1rem;
  padding-left: 5px;
  color: #000;
  outline: none;
  &:focus{
  border-bottom: 1px solid #000;
  }
`;
const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin-left: 10px;
`;
const Svg = styled.svg`
  width: 45px;
  height: 45px;
`;
const P = styled.p`
  font-size: 0.8rem;
  color: #333;
  ${Container}:hover &{
    color: #E9500E;
  }
`;
const SearchMenu = () => {
    const open = useSelector(state => state.searchmenu.open);
    return (
        <Container open={open}>
            <Input type="text" placeholder="Wpisz czego szukasz..."/>
            <SearchIcon>
                <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></Svg>
                <P>Szukaj</P>
            </SearchIcon>
        </Container>
    );
};

export default SearchMenu;