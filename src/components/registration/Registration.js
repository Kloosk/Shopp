import React from 'react';
import styled from 'styled-components'
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Login from "./Login";
import Reg from "./Reg";
import {useDispatch} from "react-redux";
import {cartClose, menuClose} from "../../redux";

const Container = styled.div`
  width: 100vw;
  margin-top: 10vh;
  @media (min-width: 992px){
   margin-top: 17vh;
  }
`;
const Registration = () => {
    const dispatch = useDispatch();
    const closeAllMenu = () => {
        dispatch(cartClose());
        dispatch(menuClose());
    };
    return (
        <>
            <Nav/>
            <Container onClick={closeAllMenu}>
                <Login/>
                <Reg/>
                <Footer/>
            </Container>
        </>
    );
};

export default Registration;