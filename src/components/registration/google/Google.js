import React from 'react';
import styled from 'styled-components'
import GoogleLogin from 'react-google-login';

const Btn = styled.button`
  border: 1px solid #333;
  border-radius: 4px;
  color: #333;
  background: transparent;
  font-size: 1.1rem;
  width:100%;
  padding: 12px 0;
  cursor: pointer;
  &:hover{
     color: #E9500E;
     border: 1px solid #E9500E;
  }
`;
const Google = () => {
    const responseGoogle = (response) => {
        console.log(response);
    };
    return (
            <GoogleLogin
                clientId="AIzaSyBzYegf3YeVyCizenK8sQtVaZ1esGmst0E"
                render={renderProps => (
                    <Btn onClick={renderProps.onClick} disabled={renderProps.disabled}>Zaloguj przez Google</Btn>
                )}
                buttonText="Zaloguj przez google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
    );
};

export default Google;