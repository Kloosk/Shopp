import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import FullMenu from "./FullMenu";
import {useCookies} from "react-cookie";
import {Link} from "react-router-dom";
import {cartClose} from "../../redux";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  width: 100vw;
  min-height: 15vh;
  border-bottom: 1px solid #333;
  padding: 10px 10px;
  background-color: #fff;
  opacity:  ${props => props.open ? 1 : 0};
  z-index: -1;
  transform: ${props => props.open ? `translateY(0)` : `translateY(-100%)`};
  @media (min-width: 992px){
      width: 30vw;
    }
`;
const P = styled.p`
  font-size: 1rem;
  padding-left: 10px;
  color: #000;
`;
const Sum = styled.div`
  padding-top: 10px;
  border-top: 1px solid #333;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Price = styled.p`
   font-size: 1rem;
   color: #000;
`;
const Btn = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  background-color: #E9500E;
  padding: 14px 0;
  width: 90%;
  border: none;
  border-radius: 4px;
  margin-top: 25px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;
const CartMenu = () => {
    const dispatch = useDispatch();
    const [cookies] = useCookies(['cart']);
    const open = useSelector(state => state.cart.open);
    const [sumOfItem,setSumOfItem] = useState(0);
    const [numOfItem,setNumOfItem] = useState(false);
    useEffect(() => {
        if(Array.isArray(cookies.cart) && cookies.cart.length > 0){
            setNumOfItem(true);
            //sum all price
            let sum = cookies.cart.reduce((a,b) => ({price: a.price + b.price}));
            setSumOfItem(sum.price);
        }else{
            setNumOfItem(false);
        }

    },[cookies.cart]);
    return (
        <Container open={open}>
            {numOfItem ? cookies.cart.map(el =><FullMenu key={el.id} id={el.id} name={el.name} price={el.price} img={el.photo}/>): <P>Nie ma produktów w koszyku.</P>}
            {numOfItem && <Sum>
                <P>Wartość produktów</P>
                <Price>{sumOfItem.toFixed(2)}zł</Price>
            </Sum>}
            {numOfItem && <Btn onClick={() => {dispatch(cartClose())}} to="/cart">Przejdź do koszyka</Btn>}
        </Container>
    );
};

export default CartMenu;