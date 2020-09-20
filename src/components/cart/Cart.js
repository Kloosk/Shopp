import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import FullMenu from "./FullMenu";
import {useCookies} from "react-cookie";
import {Link, useHistory} from "react-router-dom";
import auth from "../../auth";

const Container = styled.div`
  width: 100vw;
  margin-top: 10vh;
`;
const P = styled.p`
  font-size: 1.1rem;
  color: #000;
`;
const Sum = styled.div`
  padding: 10px 15px;
  border-top: 1px solid #333;
  width: 100%;
`;
const Price = styled.p`
   font-size: 1.2rem;
   color: #000;
`;
const H1 = styled.h1`
  margin-bottom: 25px;
  font-size: 1.5rem;
  color: #000;
`;
const Flex = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const Summary = styled(Link)`
  text-decoration: none;
  display: block;
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
  border: 0; 
  width: 70vw;
  background-color: #E9500E;
  padding: 14px 0;
  margin: 30px auto 0 auto;
  cursor: pointer;
  border-radius: 4px;
`;
const Cart = () => {
    let history = useHistory();
    const [cookies] = useCookies(['cart']);
    const [sumOfItem,setSumOfItem] = useState(0);
    const [numOfItem,setNumOfItem] = useState(false);
    const [deliveryCost,setDeliveryCost] = useState(18);
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
    const login = () => {
        auth.login(() => {
           history.push("/order");
        });
    };
return (
    <>
        <Nav/>
        <Container>
            {numOfItem ? cookies.cart.map(el =><FullMenu key={el.id} id={el.id} name={el.name} price={el.price} img={el.photo}/>): <P>Nie ma produktów w koszyku.</P>}
            {numOfItem && <Sum>
                <H1>Podsumowanie</H1>
                <Flex>
                    <P>Wartość produktów</P>
                    <Price>{sumOfItem.toFixed(2)}zł</Price>
                </Flex>
                <Flex>
                    <P>Koszty dostawy</P>
                    <Price>{deliveryCost}zł</Price>
                </Flex>
                <Flex>
                    <P style={{fontSize: '2rem'}}>Suma</P>
                    <Price style={{fontSize: '2rem'}}>{(sumOfItem + deliveryCost).toFixed(2)}zł</Price>
                </Flex>
                <Summary onClick={login}>Przejdź do zamówienia</Summary>
            </Sum>}
            <Footer/>
        </Container>
    </>
    );
};

export default Cart;