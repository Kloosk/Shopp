import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Item from "../item/Item";
import {useSelector} from "react-redux";
import SortMenu from "./SortMenu";

const Container = styled.div`
  width: 100vw;
`;
const AllItems = styled.main`
  padding: 0 25px 0 15px;
  width: 100%;
  margin-top: 2vh;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-items: center;
  grid-gap: 10px;
`;
const Items = ({shoes}) => {
    const [allShoes,setAllShoes] = useState(shoes);
    const method = useSelector(state => state.method.method);

    useEffect(() => {
        switch(method){
            case 'grow':{
                let temp = [...allShoes];
                temp.sort((a,b) => parseFloat(a.price) - parseFloat(b.price));
                setAllShoes(temp);
                break;
            }
            case 'decrease':{
                let temp = [...allShoes];
                temp.sort((a,b) => parseFloat(b.price) - parseFloat(a.price));
                setAllShoes(temp);
                break;
            }
            case 'default' :{
                setAllShoes(shoes);
                break;
            }
            default: break;
        }
    },[method]);

    return (
        <Container>
            <Nav/>
            <SortMenu/>
            <AllItems>
                {allShoes.map(item => <Item key={item._id} item={item}/>)}
            </AllItems>
            <Footer/>
        </Container>
    );
};

export default Items;