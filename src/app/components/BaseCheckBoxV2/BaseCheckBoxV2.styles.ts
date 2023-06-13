import styled from 'styled-components';
import { Checkbox as AntdCheckbox } from 'antd';

const { Group } = AntdCheckbox;

export const Checkbox = styled(AntdCheckbox)`
  &.ant-checkbox-wrapper {
    display: flex;
    align-items: center;

    & > .ant-checkbox {
      & > .ant-checkbox-inner {
        width: 25px;
        height: 25px;
        border-radius: 100rem;
        border: 2px solid #072d75;
      }
      &.ant-checkbox-checked {
        & > .ant-checkbox-inner {
          background-color: #072d75;
          &::after {
            inset-inline-start: 6px;
          }
        }
      }
    }
    & > span + span {
      font-weight: 500;
      font-size: 16px;
      line-height: 29px;
    }
  }
`;

export const CheckboxGroup = styled(Group)`
  &.ant-checkbox-group {
    & > .ant-checkbox-wrapper.ant-checkbox-group-item {
      display: flex;
      align-items: center;

      & > .ant-checkbox {
        & > .ant-checkbox-inner {
          width: 25px;
          height: 25px;
          border-radius: 100rem;
          border: 2px solid #072d75;
        }
        &.ant-checkbox-checked {
          & > .ant-checkbox-inner {
            background-color: #072d75;
            &::after {
              inset-inline-start: 6px;
            }
          }
        }
      }
      & > span + span {
        font-weight: 500;
        font-size: 16px;
        line-height: 29px;
      }
    }
  }
`;
