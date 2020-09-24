import React from 'react';
import styled from 'styled-components'
import {useCookies} from "react-cookie";
import Cookie from "../cookie/Cookie";

const Container = styled.div`
  margin-top: 10vh;
  min-height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(4,1fr);
      align-items: center;
      grid-gap: 5vw;
      justify-items: center;
      width: 80%;
      margin: 10vh auto 0 auto;
    }
  
`;
const Cookies = () => {
    const [cookies] = useCookies(['favourite']);
    return (
        <Container>
            {cookies.favourite && cookies.favourite.map(el => <Cookie key={el.id} id={el.id} name={el.name} price={el.price} photo={el.photo}/> )}
        </Container>
    );
};

export default Cookies;