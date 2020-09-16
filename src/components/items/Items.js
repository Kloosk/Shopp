import React from 'react';
import styled from 'styled-components'
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Item from "../item/Item";

const Container = styled.div`
  width: 100vw;
`;
const AllItems = styled.main`
  padding: 0 25px 0 15px;
  width: 100%;
  margin-top: 10vh;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-items: center;
  grid-gap: 10px;
`;
const Items = ({shoes}) => {
    return (
        <Container>
            <Nav/>
            <AllItems>
                {shoes.map(item => <Item key={item._id} item={item}/>)}
            </AllItems>
            <Footer/>
        </Container>
    );
};

export default Items;