import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";

const Container = styled.div`
  width: 70%;
  padding-top: 20px;
  margin: 30px 0;
  position: relative;
  @media (min-width: 992px){
      width: 100%;
      margin: 10px 0;
    }
`;
const Delete = styled.button`
  border: none;
  background: transparent;
  font-size: 2.5rem;
  position: absolute;
  top: 0;
  left: 5px;
  color: #000;
  cursor: pointer;
`;
const Bg = styled.div`
  width: 100%;
  height:220px; 
  background: ${props => `url(${props.bg}) no-repeat center/cover`};
`;
const Price = styled.p`
  font-size: 1.2rem;
`;
const Title = styled.p`
  font-size: 1rem;
  margin-top: 2px;
`;
const Btn = styled.button`
  width: 100%;
  color: #fff;
  font-size: 1.2rem;
  border: 0; 
  background-color: #E9500E;
  padding: 14px 18px;
  margin: 5px 0 0 0;
  cursor: pointer;
`;
const Linkk = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;
const Cookie = ({id,photo,name,price}) => {
    const [cookies, setCookie] = useCookies(['favourite']);
    const deleteItem = () => {
        let newCookie = [...cookies.favourite];
        for(let i=0; i<cookies.favourite.length; i++){
            if(cookies.favourite[i].id === id){
                newCookie.splice(i,1);
                break;
            }
        }
      setCookie('favourite',newCookie);
    };
    return (
        <Container>
            <Delete onClick={deleteItem}>&times;</Delete>
            <Bg bg={photo}></Bg>
            <Price>{price}zł</Price>
            <Title>{name}</Title>
            <Linkk to={`/${id}`}><Btn>Przejdź do produktu</Btn></Linkk>
        </Container>
    );
};

export default Cookie;