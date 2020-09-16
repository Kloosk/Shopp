import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Items from "../../items/Items";
const axios = require('axios');

const Container = styled.div`
width: 100vw;
`;
const SandalyMen = () => {
    const [shoes,setShoes] = useState(null);
    useEffect(() => {
        axios.get('https://shopp-api.herokuapp.com/men/sandaly')
            .then((res) => {
                setShoes(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[]);
    return (
        <Container>
            {shoes && <Items shoes={shoes}/>}
        </Container>
    );
};

export default SandalyMen;