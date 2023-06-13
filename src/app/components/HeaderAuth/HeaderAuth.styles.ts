import styled from 'styled-components';
import BaseButton from 'app/components/common/BaseButton';
import { media } from 'styles/media';

export const HeaderAuthWrapper = styled.header`
  .container-header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Logo = styled.div`
  font-family: inherit;
  font-weight: 700;
  /* font-size: 32px; */
  font-size: 25px;
  line-height: 39px;
  text-transform: uppercase;
  color: ${({ theme }) => theme._textColorPrimary};
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  flex-basis: 100%;
  justify-content: flex-end;
  column-gap: 15px;
  ${media.lg} {
    column-gap: 25px;
  }
  ${media.xxl} {
    column-gap: 66px;
  }
`;
export const NavList = styled.ul`
  display: none;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  ${media.lg} {
    display: flex;
  }
  ${media.xxl} {
    column-gap: 30px;
  }
`;
export const NavItem = styled.li`
  padding: 10px;
  border-radius: 50px;
  color: ${({ theme }) => theme._textColorPrimary};
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
  transition: all 0.2s ease-in-out;
  &:has(a.active) {
    background-color: ${({ theme }) => theme._backgroundComponentSecondary};
    color: white;
  }
  ${media.xl} {
    font-size: 16px;
  }
  ${media.xxl} {
    padding: 10px 18px;
  }
`;
export const BtnLogout = styled(BaseButton)`
  &.ant-btn {
    width: 85px;
    height: 45px;
    font-size: 14px;
    display: none;
    ${media.lg} {
      display: flex;
    }
    ${media.xl} {
      width: 146px;
      height: 47px;
    }
  }
`;

export const Hamburger = styled(BaseButton)`
  &.ant-btn {
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme._backgroundComponentSecondary};
    ${media.lg} {
      display: none;
    }
  }
`;
