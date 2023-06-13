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
  ${media.md} {
    display: flex;
  }
`;
export const NavBarMobile = styled.nav`
  flex: 1;
  display: flex;
  ${media.md} {
    display: none;
  }
`;
export const NavListItem = styled.ul`
  display: flex;
  column-gap: 17px;
`;
export const NavItem = styled.li`
  .ant-btn {
    font-size: 15px;
    ${media.xxl} {
      font-size: 16px;
      line-height: 20px;
    }
  }
  .ant-btn.btn-header {
    min-width: 150px;
    padding: 10px;
    ${media.xxl} {
      min-width: 200px;
    }
  }
  .ant-btn.btn-header-sign-in {
    ${media.xl} {
      min-width: 120px;
    }
    ${media.xxl} {
      min-width: 131px;
    }
  }
`;

export const LogoHeader = styled(Link)`
  font-weight: 700;
  font-size: 25px;
  font-family: 'Montserrat';
  line-height: 39px;
  color: ${p => p.theme._textColorPrimary};
  text-transform: uppercase;
  ${media.xl} {
    font-size: 32px;
  }
`;
