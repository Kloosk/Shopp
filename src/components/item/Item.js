import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import AddFavBtn from "../itemdetail/AddFavBtn";

const Container = styled.div`
 position: relative;
  width: 100%;
  cursor: pointer;
  border: 1px solid #fff;
  &:hover{
    border: 1px solid #F5F5F5;
  }
`;
const Bg = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => `url(${props.bg}) no-repeat center/cover`};
`;
const Favourite = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
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
            <Favourite><AddFavBtn item={item}/></Favourite>
            <Linkk to={`/${item._id}`}>
                <Bg bg={item.photos[0]}></Bg>
                <Price>{item.price}zł</Price>
                <Title>{item.name}</Title>
            </Linkk>
        </Container>
    );
};

export default Item;