import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Empty from "./empty/Empty";
import Cookies from "./cookies/Cookies";
import {useCookies} from "react-cookie";
import {cartClose, menuClose} from "../../redux";
import {useDispatch} from "react-redux";

const Container = styled.div`
  width: 100vw;
  @media (min-width: 992px){
   margin-top: 18vh;
  }
`;
const Favourite = () => {
    const [cookies] = useCookies(['favourite']);
    const [numOfCookie,setNumCookie] = useState(false);
    useEffect(() => {
        if(Array.isArray(cookies.favourite) && cookies.favourite.length > 0){
            setNumCookie(true)
        }else{
            setNumCookie(false);
        }
    },[cookies.favourite]);
    const dispatch = useDispatch();
    const closeAllMenu = () => {
        dispatch(cartClose());
        dispatch(menuClose());
    };
    return (
        <>
            <Nav/>
            <Container onClick={closeAllMenu}>
                {numOfCookie ? <Cookies/> : <Empty/>}
                <Footer/>
            </Container>
        </>
    );
};

export default Favourite;