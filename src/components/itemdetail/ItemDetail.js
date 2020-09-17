import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import {useParams} from "react-router";
import Photos from "./Photos";
const axios = require('axios');

const Container = styled.div`
  margin-top: 10vh;
  width: 100vw;
  padding: 0 20px;
`;
const Title = styled.h1`
  font-size: 1.2rem;
  color: #000;
  margin: 15px 0;
`;
const Price = styled.p`
  font-size: 1.3rem;
  color: #000;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const Flex = styled.main`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;
const AddCart = styled.button`
  width: 100%;
  font-size: 1rem;
  color: #fff;
  background-color: #E9500E;
  height: 50px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const AddFav = styled.button`
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 15px;
  width: 50px;
  height: 50px;
  background: transparent;
  border: 1px solid #8D8D8D;
  &:hover{
    border: none;
    background-color: #E9500E;
  }
`;
const Svg = styled.svg`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
  color: #000;
  width: 30px;
  height: 30px;
  ${AddFav}:hover &{
     color: #fff;
  }
`;
const ItemDetail = () => {
    const [item,setItem] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        axios.get('https://shopp-api.herokuapp.com/')
            .then((res) => {
                const result = res.data.find(el => el._id === id);
                setItem(result);
            })
            .catch((err) => {
                console.log(err);
            })
    },[]);
    return (
        <Container>
            <Nav/>
            <Wrapper>
                {item && <Photos imgs={item.photos}/>}
                {item &&  <Title>{item.name}</Title>}
                {item &&  <Price>{item.price}zł</Price>}
                <Flex>
                    <AddCart>Dodaj do koszyka</AddCart>
                    <AddFav><Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></Svg></AddFav>
                </Flex>
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default ItemDetail;