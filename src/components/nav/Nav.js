import React from 'react';
import styled from 'styled-components';
import Menu from "../menu/Menu";
import Elements from "./elements/Elements";
import Logo from "./logo/Logo";
import Mobile from "../menuMobile/Mobile";
import SearchMenu from "../searchMenu/SearchMenu";
import CartMenu from "../cart/CartMenu";
import NavDesktop from "./NavDesktop";

const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 8vh;
  background-color: #fff;
  padding: 0 4px;
  z-index: 999;
  @media (min-width: 992px){
  border-bottom: 2px solid #000;
  }
  @media (min-width: 300px) 
  and (max-width: 814px)
  and (orientation: landscape) {
    height: 50px;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-right: 10px;
`;
const FlexIn = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Nav = () => {
    return (
        <Container>
            <Flex>
                <FlexIn>
                    <Menu/>
                    <Logo/>
                </FlexIn>
                <Elements/>
            </Flex>
            <Mobile/>
            <SearchMenu/>
            <CartMenu/>
            <NavDesktop/>
        </Container>
    );
};

export default Nav;