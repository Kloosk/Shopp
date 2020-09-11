import React from 'react';
import styled from 'styled-components'
import logo from './ccc_logo.png'

const Container = styled.div`
  width: 22vw;
  height: 100%;
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;
const Logo = () => {
    return (
        <Container></Container>
    );
};

export default Logo;