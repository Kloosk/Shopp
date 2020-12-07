import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {cartClose, cartOpen, menuClose} from "../../../redux";
import {useCookies} from "react-cookie";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
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
  @media (min-width: 992px){
    width: 25px;
    height: 25px;
  }
    @media (min-width: 300px) 
  and (max-width: 814px)
  and (orientation: landscape) {
    width: 20px;
    height: 20px;
  }
`;
const P = styled.p`
  font-size: 0.8rem;
  color: #333;
  ${Container}:hover &{
    color: #E9500E;
  }
`;
const Cart = () => {
    const [cookies] = useCookies(['cart']);
    const [numOfCookie,setNumCookie] = useState(0);
    useEffect(() => {
        Array.isArray(cookies.cart) ? setNumCookie(cookies.cart.length) : setNumCookie(0);
    },[cookies.cart]);
    const dispatch = useDispatch();
    const open = useSelector(state => state.cart.open);
    const handleClick = () => {
        if(open){
            dispatch(cartClose());
        }else {
            dispatch(menuClose());
            dispatch(cartOpen());

        }
    };
    return (
        <Container onClick={handleClick}>
            <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></Svg>
            <P>Koszyk</P>
            <Quantity>{numOfCookie}</Quantity>
        </Container>
    );
};

export default Cart