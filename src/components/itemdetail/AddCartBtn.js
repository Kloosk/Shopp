import React, {useState} from 'react';
import styled from 'styled-components'
import {useCookies} from "react-cookie";
import {Link} from "react-router-dom";

const Container = styled.button`
  width: 100%;
  font-size: 1rem;
  color: #fff;
  background-color: #E9500E;
  height: 50px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;
const MsgAdd = styled.div`
  display: flex;
  z-index: 999;
  position: fixed;
  padding: 15px 0;
  top: 0;
  left: 0;
  border-bottom: 1px solid #000;
  width: 100vw;
  font-size: 1.5rem;
  text-align: center;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: ${props => props.add ? `translateY(0)` : `translateY(-100%)`};
  transition: transform 0.2s ease;
`;
const MsgWar = styled(MsgAdd)`
  transform: ${props => props.warning ? `translateY(0)` : `translateY(-100%)`};
`;
const Linkk = styled(Link)`
  font-size: 1.5rem;
  margin-top: 25px;
  border: none;
  outline: none;
  color: #fff;
  background-color: #E9500E;
  padding: 12px 0;
  text-align: center;
  width: 80%;
  border-radius: 4px;
  text-decoration: none;
`;
const AddCartBtn = ({item}) => {
    const [cookies, setCookie] = useCookies(['cart']);
    const [addMsg,setAddMsg] = useState(false);
    const [warningMsg,setWarningMsg] = useState(false);
    const addMessage = () =>{
        if(addMsg === false){
            setAddMsg(true);
            setTimeout(() => {
                setAddMsg(false);
            },1100);
        }
    };
    const warningMessage = () =>{
        if(warningMsg === false && addMsg === false ) {
            setWarningMsg(true);
            setTimeout(() => {
                setWarningMsg(false);
            }, 1100);
        }
    };
    const addToCart = () => {
        let valueCookie;
        let isAvilable = false;
        if(cookies.cart) {
            for (let i = 0; i < cookies.cart.length; i++) {
                if (cookies.cart[i].id === item._id) {
                    isAvilable = true;
                    break;
                }
            }
        }
        if(isAvilable === false) {
            if (cookies.cart) {
                valueCookie = [...cookies.cart];
            } else valueCookie = [];
            valueCookie.push({
                id: item._id,
                name: item.name,
                price: item.price,
                photo: item.photos[0]
            });
            setCookie('cart',valueCookie);
            addMessage();
        }else{
            warningMessage();
        }
    };
    return (
        <>
            <MsgAdd add={addMsg}>Produkt został dodany
                <Linkk to="/cart">Przejdź do koszyka</Linkk>
            </MsgAdd>
            <MsgWar warning={warningMsg}>Produkt już został dodany
                <Linkk to="/cart">Przejdź do koszyka</Linkk>
            </MsgWar>
            <Container onClick={addToCart}>Dodaj do koszyka</Container>
        </>
    );
};

export default AddCartBtn;