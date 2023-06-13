import React from 'react';
import * as S from './HeaderAuth.styles';
import { Container, LinkButton } from 'styles/global-styles';
import classNames from 'classnames';
import { MenuOutlined } from '@ant-design/icons';
import { useAppContext } from 'contexts/App.context';

const Navbar = [
  {
    name: 'マイページ',
    pathname: '/mypage',
  },
  {
    name: 'レジュメ',
    pathname: '/resume',
  },
  {
    name: 'メッセージ',
    pathname: '/message',
  },
  {
    name: '求人情報検索',
    pathname: '/job-search',
  },
  {
    name: 'ヘッドハンター検索',
    pathname: '/search-headhunter',
  },
  {
    name: '特集記事',
    pathname: '/special-article',
  },
];
const HeaderAuth = () => {
  const { ToggleMenu } = useAppContext();
  return (
    <S.HeaderAuthWrapper>
      <Container className="container-header">
        <S.Logo>REKAIZEN</S.Logo>
        <S.Navbar>
          <S.NavList>
            {Navbar.map(item => (
              <S.NavItem key={item.name}>
                <LinkButton
                  className={({ isActive }) => classNames({ active: isActive })}
                  to={item.pathname}
                >
                  {item.name}
                </LinkButton>
              </S.NavItem>
            ))}
          </S.NavList>
          <S.BtnLogout>LOGOUT</S.BtnLogout>
          <S.Hamburger
            htmlType="button"
            type="text"
            onClick={ToggleMenu}
            icon={<MenuOutlined rev={undefined} />}
          />
        </S.Navbar>
      </Container>
    </S.HeaderAuthWrapper>
  );
};

export default HeaderAuth;
