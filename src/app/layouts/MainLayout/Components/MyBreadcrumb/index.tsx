import React from 'react';
import * as S from './MyBreadcrumb.styles';
import { Container } from 'styles/global-styles';
import Base from 'antd/es/typography/Base';
import { BaseBreadcrumb } from 'app/components/common/BaseBreadcrumb';

const MyBreadcrumb = () => {
  return (
    <S.MyBreadcrumbWrapper>
      <Container>
        <S.BreadCrumb
          separator=">"
          items={[
            {
              title: 'Home',
            },
            {
              title: 'Application Center',
              href: '',
            },
          ]}
        />
      </Container>
    </S.MyBreadcrumbWrapper>
  );
};

export default MyBreadcrumb;
