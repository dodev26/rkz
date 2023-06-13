import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'styles/media';

export const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  ${media.xl} {
    top: 47px;
  }
`;
export const NavBarDesktop = styled.nav`
  flex: 1;
  display: none;
  ${media.lg} {
    display: flex;
  }
`;
export const NavBarMobile = styled.nav`
  flex: 1;
  display: flex;
  ${media.lg} {
    display: none;
  }
`;
export const NavListItem = styled.ul`
  display: flex;
  column-gap: 17px;
`;
export const NavItem = styled.li`
  .hambuger-menu.ant-btn {
    border-radius: 10px;
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme._backgroundComponentSecondary};
    color: ${({ theme }) => theme._textSecondary};
  }
  .ant-btn {
    font-size: 16px;
    line-height: 20px;
  }
  .ant-btn.btn-header-sign-in {
    border-radius: 30px;
    padding: 10px 20px;
    height: auto;
    overflow: hidden;
    font-family: inherit;
    text-transform: uppercase;
    height: 47px;
    ${media.lg} {
      padding: 15px 38px;
      min-width: 131px;
    }
  }
  .btn-header {
    min-width: 200px;
    padding: 15px;
  }
`;

export const LogoHeader = styled(Link)`
  font-weight: 700;
  font-size: 25px;
  font-family: 'Montserrat';
  line-height: 39px;
  color: ${p => p.theme._textColorPrimary};
  text-transform: uppercase;
`;
