import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Wrapper } from 'styles/global-styles';

const AuthLayout = () => {
  return (
    <Wrapper>
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default AuthLayout;
