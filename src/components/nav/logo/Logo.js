import React from 'react';
import styled from 'styled-components'
import logo from './ccc_logo.png'
import {Link} from "react-router-dom";

const Container = styled(Link)`
  width: 22vw;
  height: 100%;
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;
const Logo = () => {
    return (
        <Container to="/"></Container>
    );
};

export default Logo;