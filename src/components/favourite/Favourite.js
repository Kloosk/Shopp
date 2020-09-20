import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Empty from "./empty/Empty";
import Cookies from "./cookies/Cookies";
import {useCookies} from "react-cookie";

const Container = styled.div`
  width: 100vw;
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

    return (
        <Container>
            <Nav/>
            {numOfCookie ? <Cookies/> : <Empty/>}
            <Footer/>
        </Container>
    );
};

export default Favourite;