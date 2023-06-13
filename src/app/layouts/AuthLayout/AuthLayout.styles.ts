import styled from 'styled-components';
import { media } from 'styles/media';

export const AuthLayoutWrapper = styled.div`
  position: relative;
  height: auto;
  overflow: hidden;
  width: 100%;
  ${media.lg} {
    padding: 32px;
    height: 100vh;
  }
`;
export const AuthLogoWrapper = styled.div`
  font-family: inherit;
  position: absolute;
  font-weight: 700;
  font-size: 25px;
  top: 15px;
  left: 0;
  line-height: calc(39 / 32);
  color: ${({ theme }) => theme._textColorPrimary};
  text-transform: uppercase;
  ${media.lg} {
    font-size: 32px;
    top: 32px;
    left: 32px;
  }
  ${media.xl} {
    left: 50px;
  }
`;

export const AuthContainer = styled.div`
  margin-top: 110px;
  ${media.lg} {
    margin-top: 0px;
    display: flex;
    height: 100%;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;

export const BannerImageAuth = styled.div`
  display: none;
  height: 100%;
  border-radius: 40px;
  background-color: #e6f8f4;
  align-items: center;
  justify-content: center;

  ${media.xl} {
    display: flex;
    padding: 20px;
    max-width: 500px;
  }
  ${media.xxl} {
    max-width: 768px;
    width: 100%;
    padding: 0px;
  }
  & > img {
    max-width: 678.35px;
    max-height: 517.45px;
    width: 100%;
  }
`;
