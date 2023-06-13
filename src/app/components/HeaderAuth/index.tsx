import React from 'react';
import * as S from './HeaderAuth.styles';
import { Container, LinkButton } from 'styles/global-styles';

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
    pathname: '/headhunter-search',
  },
  {
    name: '特集記事',
    pathname: '/special-article',
  },
];
const HeaderAuth = () => {
  return (
    <S.HeaderAuthWrapper>
      <Container className="container-header">
        <S.Logo>REKAIZEN</S.Logo>
        <S.Navbar>
          <S.NavList>
            {Navbar.map(item => (
              <S.NavItem key={item.name}>
                <LinkButton to={item.pathname}>{item.name}</LinkButton>
              </S.NavItem>
            ))}
          </S.NavList>
          <S.BtnLogout>LOGOUT</S.BtnLogout>
        </S.Navbar>
      </Container>
    </S.HeaderAuthWrapper>
  );
};

export default HeaderAuth;
