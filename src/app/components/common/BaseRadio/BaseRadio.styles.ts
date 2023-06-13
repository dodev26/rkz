import styled from 'styled-components';
import { Radio as AntdRadio } from 'antd';

export const Radio = styled(AntdRadio)`
  &.ant-radio-wrapper {
    font-size: 16px;
    font-weight: 400;
    & > .ant-radio {
      & > .ant-radio-inner {
        border-color: ${({ theme }) => theme._borderSecondary};
        border-style: solid;
        border-width: 2px;
        width: 25px;
        background-color: white;
        height: 25px;
      }
      &.ant-radio-checked {
        & > .ant-radio-inner {
          &::after {
            width: 22px;
            height: 22px;
            margin-block-start: -11px;
            margin-inline-start: -11px;
            background-color: ${({ theme }) =>
              theme._backgroundComponentTertiary};
          }
        }
      }
    }
  }
`;

export const RadioButton = styled(AntdRadio.Button)``;
