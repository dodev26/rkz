import React from 'react';
import * as S from './Footer.styles';
import { Container } from 'styles/global-styles';
import { BaseCol } from 'app/components/common/BaseCol';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const FooterItem = [
  {
    id: _.uniqueId(),
    title: 'COMPANY',
    listLink: [
      {
        id: _.uniqueId(),
        name: 'About',
        pathName: '/about',
      },
      {
        id: _.uniqueId(),
        name: 'Careers',
        pathName: '/careers',
      },
      {
        id: _.uniqueId(),
        name: 'Brand Center',
        pathName: '/brand-center',
      },
    ],
  },
  {
    id: _.uniqueId(),
    title: 'HELP CENTER',
    listLink: [
      {
        id: _.uniqueId(),
        name: 'Discord Server',
        pathName: '/discord-server',
      },
      {
        id: _.uniqueId(),
        name: 'Twitter',
        pathName: '/twitter',
      },
      {
        id: _.uniqueId(),
        name: 'Facebook',
        pathName: '/facebook',
      },
      {
        id: _.uniqueId(),
        name: 'Contact',
        pathName: '/contact',
      },
    ],
  },
  {
    id: _.uniqueId(),
    title: 'LEGAL',
    listLink: [
      {
        id: _.uniqueId(),
        name: 'Privacy Policy',
        pathName: '/privacy-policy',
      },
      {
        id: _.uniqueId(),
        name: 'Licensing',
        pathName: '/licensing',
      },
      {
        id: _.uniqueId(),
        name: 'Terms & Conditions',
        pathName: '/terms-conditions',
      },
    ],
  },
  {
    id: _.uniqueId(),
    title: 'DOWNLOAD',
    listLink: [
      {
        id: _.uniqueId(),
        name: 'iOS',
        pathName: '/ios',
      },
      {
        id: _.uniqueId(),
        name: 'Android',
        pathName: '/android',
      },
      {
        id: _.uniqueId(),
        name: 'Windows',
        pathName: '/windows',
      },
      {
        id: _.uniqueId(),
        name: 'MacOs',
        pathName: '/macos',
      },
    ],
  },
];
const Footer = () => {
  return (
    <S.FotterWrapper>
      <Container>
        <S.FooterGroupLogo>
          <S.FooterLogo>REKAIZEN</S.FooterLogo>
          <S.FooterHelpText>ヘルプ</S.FooterHelpText>
        </S.FooterGroupLogo>
        <S.RowListLinkFooter justify="space-between" align="top">
          {FooterItem.map(item => (
            <BaseCol xs={24} sm={12} lg={6} key={item.id}>
              <S.TitleListLinkFooter>{item.title}</S.TitleListLinkFooter>
              <S.ListLink>
                {item.listLink.map(link => (
                  <li>
                    <Link to={link.pathName} key={link.id}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </S.ListLink>
            </BaseCol>
          ))}
        </S.RowListLinkFooter>
        <S.TextFooter>© 2023—Rekaizen. All Rights Reserved.</S.TextFooter>
      </Container>
    </S.FotterWrapper>
  );
};

export default Footer;
