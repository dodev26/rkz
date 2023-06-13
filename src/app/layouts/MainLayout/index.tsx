import Footer from 'app/components/Footer';
import HeaderAuth from 'app/components/HeaderAuth';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from 'styles/global-styles';
import MyBreadcrumb from './Components/MyBreadcrumb';

const MainLayout = () => {
  return (
    <Wrapper>
      <HeaderAuth />
      <MyBreadcrumb />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default MainLayout;
