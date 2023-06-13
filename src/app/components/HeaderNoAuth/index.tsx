import React from 'react';
import * as S from './Header.styles';
import { BaseRow } from 'app/components/common/BaseRow';
import { BaseCol } from 'app/components/common/BaseCol';
import { Container, LinkButton } from 'styles/global-styles';
import BaseButton from 'app/components/common/BaseButton';
import { MenuOutlined } from '@ant-design/icons';
import { useAppContext } from 'contexts/App.context';

const HeaderNoAuth = () => {
  const { ToggleMenu } = useAppContext();

  return (
    <S.Header>
      <Container>
        <BaseRow justify="space-between" align="middle">
          <BaseCol>
            <S.LogoHeader to="/">REKAIZEN</S.LogoHeader>
          </BaseCol>
          <BaseCol>
            <S.NavBarMobile>
              <S.NavListItem>
                <S.NavItem>
                  <BaseButton
                    onClick={ToggleMenu}
                    htmlType="button"
                    type="text"
                    className="hambuger-menu"
                    icon={<MenuOutlined rev={undefined} />}
                  />
                </S.NavItem>
              </S.NavListItem>
            </S.NavBarMobile>
            <S.NavBarDesktop>
              <S.NavListItem>
                <S.NavItem>
                  <LinkButton to="/">
                    <BaseButton htmlType="button" className="btn-header">
                      For Job Seeker
                    </BaseButton>
                  </LinkButton>
                </S.NavItem>
                <S.NavItem>
                  <LinkButton to="/">
                    <BaseButton htmlType="button" className="btn-header">
                      For Company
                    </BaseButton>
                  </LinkButton>
                </S.NavItem>
                <S.NavItem>
                  <LinkButton to="/">
                    <BaseButton
                      htmlType="button"
                      type="primary"
                      className="btn-header-sign-in"
                    >
                      Sign In
                    </BaseButton>
                  </LinkButton>
                </S.NavItem>
              </S.NavListItem>
            </S.NavBarDesktop>
          </BaseCol>
        </BaseRow>
      </Container>
    </S.Header>
  );
};

export default HeaderNoAuth;
