import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 10px 15px;  
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #333;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;
const P = styled.p`
  font-size: 1.1rem;
  color: #333;
`;
const Arrows = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Svg = styled.svg`
  color: #E9500E;
  width: 40px;
  height: 40px;
  margin: 0 15px;
`;
const Step = () => {
    return (
        <Container>
            <Flex>
                <P style={{color: '#E9500E'}}>1</P>
                <P style={{color: '#E9500E'}}>Zawartość</P>
            </Flex>
            <Arrows><Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></Svg></Arrows>
            <Flex>
                <P>2</P>
                <P>Podsumowanie</P>
            </Flex>
        </Container>
    );
};

export default Step;