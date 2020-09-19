import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";
import Result from "./Result";
const axios = require('axios');

const Container = styled.div`
 position: absolute;
 width: 100vw;
 min-height: 150px;
 padding: 10px 10px;
 background-color: #fff;
 top: 100%;
 left: 0;
 opacity:  ${props => props.open ? 1 : 0};
 z-index: -1;
 transform: ${props => props.open ? `translateY(0)` : `translateY(-100%)`};
`;
const Input = styled.input`
  border: none;
  width: 85%;
  font-size: 1rem;
  padding-left: 5px;
  color: #000;
  outline: none;
  border-bottom: 1px solid #333;
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
  width: 25px;
  height: 25px;
`;
const P = styled.p`
  font-size: 0.8rem;
  color: #333;
  ${Container}:hover &{
    color: #E9500E;
  }
`;
const SearchBar = styled.div`
 display: flex;
`;
const H1 = styled.h1`
  margin-top: 15px;
  font-size: 1rem;
  color: #000;
`;
const SearchMenu = () => {
    const [data,setData] = useState(null);
    const [filterData,setFilterData] = useState(null);
    const open = useSelector(state => state.searchmenu.open);
    const inputRef = useRef(null);
    useEffect(() => {
        axios.get('https://shopp-api.herokuapp.com/')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[]);
    const startSearch = () => {
        const inputValue = inputRef.current.value.toUpperCase();
        if(inputValue.length > 0 && inputValue !== ""){
            let copyData = [...data];
            let afterFilter = copyData.filter(el => el.name.toUpperCase().indexOf(inputValue) > -1);
            if(afterFilter.length > 0){
                setFilterData(afterFilter);
            }else{
                setFilterData(false);
            }
        }else{ setFilterData(false);}
    };
    return (
        <Container open={open}>
            <SearchBar>
                <Input onKeyUp={startSearch} ref={inputRef} type="text" placeholder="Wpisz czego szukasz..."/>
                <SearchIcon onClick={startSearch}>
                    <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></Svg>
                    <P>Szukaj</P>
                </SearchIcon>
            </SearchBar>
            {filterData ? filterData.map(el =><Result key={el._id} id={el._id} photo={el.photos[0]} name={el.name} price={el.price}/>) : <H1>Brak wyników wyszukiwania</H1>}
        </Container>
    );
};

export default SearchMenu;