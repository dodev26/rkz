import Footer from 'app/components/Footer';
import Header from 'app/components/HeaderNoAuth';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from 'styles/global-styles';

const HomeLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default HomeLayout;
