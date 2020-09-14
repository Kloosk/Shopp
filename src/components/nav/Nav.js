import React from 'react';
import styled from 'styled-components';
import Menu from "../menu/Menu";
import Elements from "./elements/Elements";
import Logo from "./logo/Logo";
import Mobile from "../menuMobile/Mobile";
import SearchMenu from "../searchMenu/SearchMenu";
import Cart from "../cart/Cart";

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 8vh;
  background-color: #fff;
  padding: 0 4px;
  z-index: 999;
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
            <Cart/>
        </Container>
    );
};

export default Nav;