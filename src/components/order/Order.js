import React from 'react';
import styled from 'styled-components'
import Step from "./Step";

const Container = styled.div`
  margin-top: 10px;
  
`;
const Order = () => {
    return (
        <Container>
            <Step/>
        </Container>
    );
};

export default Order;