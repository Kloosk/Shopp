import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cartClose, menuClose} from "../../../redux";
import {useCookies} from "react-cookie";

const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  text-decoration: none;
 `;
const Quantity = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 20px;
    height: 20px;
    background-color: #E9500E;
    color: #fff;
    border-radius: 50%;
    padding-top: 2px;
    font-size: 1rem;
`;
const Svg = styled.svg`
  color: #E9500E;
  width: 4vw;
  height: 4vh;
`;
const P = styled.p`
  font-size: 0.8rem;
  color: #333;
  ${Container}:hover &{
    color: #E9500E;
  }
`;
const Favourite = () => {
    const [cookies] = useCookies(['favourite']);
    const [numOfCookie,setNumCookie] = useState(0);
    useEffect(() => {
        Array.isArray(cookies.favourite) ? setNumCookie(cookies.favourite.length) : setNumCookie(0);
    },[cookies.favourite]);

    const dispatch = useDispatch();
    const exit = () => {
        dispatch(cartClose());
        dispatch(menuClose());
    };
    return (
        <Container to="/favourite" onClick={exit}>
            <Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></Svg>
            <P>Ulubione</P>
            <Quantity>{numOfCookie}</Quantity>
        </Container>
    );
};

export default Favourite;