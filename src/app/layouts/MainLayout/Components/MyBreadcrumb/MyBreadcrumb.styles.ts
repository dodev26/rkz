import { BaseBreadcrumb } from 'app/components/common/BaseBreadcrumb';
import styled from 'styled-components';

export const MyBreadcrumbWrapper = styled.div`
  width: 100%;
  padding: 10px 0px;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  background: linear-gradient(180deg, #f1fcff 0%, #f1fcff 83.7%, #f1fcff 100%);
`;

export const BreadCrumb = styled(BaseBreadcrumb)`
  &.ant-breadcrumb {
    .ant-breadcrumb-link {
      color: ${props => props.theme._textColorPrimary};
    }
    .ant-breadcrumb-separator {
      color: ${props => props.theme._textColorSecondary};
    }
  }
`;
