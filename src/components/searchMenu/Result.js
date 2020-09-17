import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {menuClose} from "../../redux";
import {useDispatch} from "react-redux";

const Linkk = styled(Link)`
  margin-top: 15px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 5px;
  border-bottom: 1px solid #333;
`;
const Photo = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  background: ${props => `url(${props.bg}) no-repeat center/cover`};
`;
const Dsc = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: #000;
  font-size: 1rem;
`;
const Price = styled.p`
  font-size: 1.1rem;
  color: #000;
`;
const Result = ({id,photo,name,price}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(menuClose());
    };
    return (
        <Linkk onClick={handleClick} to={`/${id}`}>
            <Photo bg={photo}/>
            <Dsc>
                <Title>{name}</Title>
                <Price>{price}</Price>
            </Dsc>
        </Linkk>
    );
};

export default Result;