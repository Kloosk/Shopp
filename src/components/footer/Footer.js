import React from 'react';
import styled from 'styled-components'
import Social from "./Social";
import Info from "./Info";

const Container = styled.footer`
 margin-top: 100px;
 width: 100vw;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`;
const Copy = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
`;
const Footer = () => {
    return (
        <Container>
            <Info/>
            <Social/>
            <Copy>Copyright © 2020</Copy>
        </Container>
    );
};

export default Footer;