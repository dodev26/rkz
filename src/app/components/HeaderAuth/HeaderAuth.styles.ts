import styled from 'styled-components';
import BaseButton from 'app/components/common/BaseButton';

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
  font-size: 32px;
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
  column-gap: 66px;
`;
export const NavList = styled.ul`
  display: none;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
`;
export const NavItem = styled.li`
  word-break: break-all;
  padding: 10px 18px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme._backgroundComponentSecondary};
  font-family: inherit;
  font-weight: 700;
  font-size: 20px;
  color: white;
`;
export const BtnLogout = styled(BaseButton)`
  &.ant-btn {
    width: 146px;
    height: 47px;
  }
`;
