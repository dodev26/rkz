import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import { Dimension } from 'types/interfaces';
import { normalizeProp } from 'utils';

export interface InternalSelectProps {
  $width?: Dimension;
  $shadow?: boolean;
}

export const Select = styled(AntSelect)<InternalSelectProps>`
  &.ant-select {
    width: ${props => props.$width && normalizeProp(props.$width)};
    & > .ant-select-selector {
      border-radius: 50px;
      padding: 10px 14px;
      font-family: inherit;
      border: none;
      outline: none;
      font-weight: 500;
      font-size: 16px;
      color: #272d4e;
      background-color: #f2f6fc;
      min-height: 46px;
      line-height: 24px;
      & > .ant-select-selection-placeholder {
        color: inherit;
      }
      & > .ant-select-selection-overflow {
        & > .ant-select-selection-overflow-item {
          & > .ant-select-selection-search {
            width: auto;
            margin-inline-start: 0px;
          }
        }
      }
      & > .ant-select-selection-search {
        display: flex;
        align-items: center;
        padding-right: 10px;
      }
      & > .ant-select-selection-item {
        line-height: 24px;
        display: flex;
        align-items: center;
        font-size: inherit;
        font-weight: inherit;
      }
    }
    &:where(.css-dev-only-do-not-override-w8mnev).ant-select-single:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      height: 24px;
    }
    &:where(.css-dev-only-do-not-override-w8mnev).ant-select-single
      .ant-select-selector
      .ant-select-selection-placeholder {
      line-height: 24px;
    }
    &:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover
      .ant-select-selector,
    &:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):focus
      .ant-select-selector {
      border-color: ${({ theme }) => theme._borderQuinary};
    }
  }
`;
