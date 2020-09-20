import React from 'react';
import styled from 'styled-components'
import Slideshow from "../slideshow/Slideshow";
import Collection from "../collection/Collection";
import CompanyList from "../companylist/CompanyList";
import Why from "../why/Why";
import Club from "../club/Club";
import Footer from "../footer/Footer";
import {useDispatch} from "react-redux";
import {cartClose, menuClose} from "../../redux";

const Container = styled.div`
  width: 100%;
`;
const Main = () => {
    const dispatch = useDispatch();
    const closeAllMenu = () => {
        dispatch(cartClose());
        dispatch(menuClose());
    };
    return (
        <Container onClick={closeAllMenu}>
            <Slideshow/>
            <Collection/>
            <CompanyList/>
            <Why/>
            <Club/>
            <Footer/>
        </Container>
    );
};

export default Main;