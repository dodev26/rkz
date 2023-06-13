import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Wrapper } from 'styles/global-styles';
import { IMAGE_BANNER_HOME as BannerAuth } from 'app/assets';
import * as S from './AuthLayout.styles';
const AuthLayout = () => {
  return (
    <Wrapper>
      <Container>
        <S.AuthLayoutWrapper>
          <S.AuthLogoWrapper>REKAIZEN</S.AuthLogoWrapper>
          <S.AuthContainer>
            <Outlet />
            <S.BannerImageAuth>
              <img src={BannerAuth} alt="img banner rekaizen" />
            </S.BannerImageAuth>
          </S.AuthContainer>
        </S.AuthLayoutWrapper>
      </Container>
    </Wrapper>
  );
};

export default AuthLayout;
