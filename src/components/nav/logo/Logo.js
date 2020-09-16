import React from 'react';
import styled from 'styled-components'
import logo from './ccc_logo.png'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartClose, menuClose} from "../../../redux";

const Container = styled(Link)`
  width: 22vw;
  height: 100%;
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;
const Logo = () => {
    const dispatch = useDispatch();
    const exit = () => {
        dispatch(cartClose());
        dispatch(menuClose());
    };
    return (
        <Container to="/" onClick={exit}></Container>
    );
};

export default Logo;