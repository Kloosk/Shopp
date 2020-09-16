import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  cursor: pointer;
  border: 1px solid #fff;
  &:hover{
    border: 1px solid #F5F5F5;
  }
`;
const Bg = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: ${props => `url(${props.bg}) no-repeat center/cover`};
`;
const Favourite = styled.button`
  position: absolute;
  left: 5px;
  bottom: 5px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;
const Svg = styled.svg`
  color: #000;
  width: 25px;
  height: 25px;
  ${Favourite}:hover &{
     color: #E9500E;
  }
`;
const Price = styled.p`
  margin: 5px 0 0 5px;
  color: #000;
  font-size: 1rem;
`;
const Title = styled.h1`
  margin: 5px 0 0 5px;
  color: #000;
  font-size: 1rem;
`;
const Linkk = styled(Link)`
  text-decoration: none;
`;
const Item = ({item}) => {
    return (
        <Container>
            <Linkk to={`/${item._id}`}>
                <Bg bg={item.photos[0]}>
                    <Favourite><Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></Svg></Favourite>
                </Bg>
                <Price>{item.price}zł</Price>
                <Title>{item.name}</Title>
            </Linkk>
        </Container>
    );
};

export default Item;