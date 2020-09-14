import React from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";

const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  min-height: 30vh;
  padding: 10px 10px;
  background-color: #fff;
  display: flex;
  opacity:  ${props => props.open ? 1 : 0};
  z-index: -1;
  transform: ${props => props.open ? `translateY(0)` : `translateY(-100%)`};
`;
const P = styled.p`
  font-size: 1rem;
  padding-left: 10px;
`;
const Cart = () => {
    const open = useSelector(state => state.cart.open);
    return (
        <Container open={open}>
            <P>Nie ma produktów w koszyku.</P>
        </Container>
    );
};

export default Cart;