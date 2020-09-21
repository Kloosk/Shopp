import React, {useEffect} from 'react';
import styled from 'styled-components'
import auth from "../../auth";
import {useHistory} from "react-router";
import {useCookies} from "react-cookie";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 5vw;
`;
const H1 = styled.h1`
  font-size: 1.3rem;
  color: #000; 
`;
const P = styled.p`
  font-size: 1rem;
  color: #000; 
`;
const LastStep = () => {
    const history = useHistory();
    const [cookie,setCookie,removeCookie] = useCookies(['cart']);
    useEffect(() => {
        removeCookie('cart');
        setTimeout(() => {
            auth.logout(() => {
                history.push("/order");
            });
        },5000);
    },[]);
    return (
        <Container>
            <H1>Transakcja przebiegła pomyślnie</H1>
            <P>Za chwilę zostaniesz przeniesiony na stronę główną.</P>
        </Container>
    );
};

export default LastStep;