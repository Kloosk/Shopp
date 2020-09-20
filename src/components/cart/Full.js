import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {cartClose} from "../../redux";

const Container = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  height: 100px;
  cursor: pointer;
  margin: 15px 0;
  text-decoration: none;
  color: #333;
  position: relative;
`;
const Bg = styled.div`
  height: 100px;
  width: 160px;
  margin-right: 20px;
  background: ${props => `url(${props.img}) no-repeat center/cover`};
`;
const Title = styled.h1`
  font-size: 1rem;
`;
const Price = styled.p`
  font-size: 1rem;
  text-align: right;
`;
const Delete = styled.button`
  border: none;
  background: transparent;
  font-size: 2.5rem;
  position: absolute;
  top: 0;
  right: 20px;
  color: #000;
  cursor: pointer;
`;
const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
`;
const Full = ({img,id,name,price}) => {
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(['cart']);
    const deleteItem = () => {
        let newCookie = [...cookies.cart];
        for(let i=0; i<cookies.cart.length; i++){
            if(cookies.cart[i].id === id){
                newCookie.splice(i,1);
                break;
            }
        }
        setCookie('cart',newCookie);
    };
    return (
        <Container onClick={() => {dispatch(cartClose())}} to={`/${id}`}>
            <Delete onClick={deleteItem}>&times;</Delete>
            <Bg img={img}></Bg>
            <Flex>
                <Title>{name}</Title>
                <Price>{price}zł</Price>
            </Flex>
        </Container>
    );
};

export default Full;