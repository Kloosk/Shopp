import React from 'react';
import styled from 'styled-components'
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Login from "./Login";
import Reg from "./Reg";

const Container = styled.div`
  width: 100vw;
  margin-top: 10vh;
`;
const Registration = () => {
    return (
        <Container>
            <Nav/>
            <Login/>
            <Reg/>
            <Footer/>
        </Container>
    );
};

export default Registration;