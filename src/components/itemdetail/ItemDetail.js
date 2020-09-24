import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import {useParams} from "react-router";
import Photos from "./Photos";
import AddCartBtn from "./AddCartBtn";
import AddFavBtn from "./AddFavBtn";
const axios = require('axios');

const Container = styled.div`
  margin-top: 10vh;
  width: 100vw;
`;
const Title = styled.h1`
  font-size: 1.2rem;
  color: #000;
  margin: 15px 0;
  @media (min-width: 992px){
      font-size: 1.4rem;
    }
`;
const Price = styled.p`
  font-size: 1.3rem;
  color: #000;
  @media (min-width: 992px){
      font-size: 1.6rem;
    }
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  @media (min-width: 992px){
      display: flex;
      width: 80%;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
    }
`;
const Flex = styled.main`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  @media (min-width: 992px){
      width: 50%;
    }
`;
const FlexDesktop = styled.div`
  @media (min-width: 992px){
      width: 100%;
      margin-left: 10vw;
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
    },[id]);

    return (
        <Container>
            <Nav/>
            <Wrapper>
                {item && <Photos imgs={item.photos}/>}
                <FlexDesktop>
                {item &&  <Title>{item.name}</Title>}
                {item &&  <Price>{item.price}zł</Price>}
                <Flex>
                    <AddCartBtn item={item}/>
                    <AddFavBtn  item={item}/>
                </Flex>
                </FlexDesktop>
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default ItemDetail;