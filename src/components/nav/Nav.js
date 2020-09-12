import React from 'react';
import styled from 'styled-components';
import Menu from "../menu/Menu";
import Elements from "./elements/Elements";
import Logo from "./logo/Logo";
import Mobile from "../menuMobile/Mobile";

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height:8vh;
  background-color: #fff;
  border-bottom: 1px solid #333;
  padding: 0 4px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
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
        </Container>
    );
};

export default Nav;