import styled from 'styled-components';
import { Checkbox as AntdCheckbox } from 'antd';

const { Group } = AntdCheckbox;

export const Checkbox = styled(AntdCheckbox)`
  &.ant-checkbox-wrapper {
    & > .ant-checkbox {
    }
    & > .ant-checkbox.ant-checkbox-checked {
      & > .ant-checkbox-inner {
        background-color: ${({ theme }) => theme._backgroundComponentSecondary};
        border-color: ${({ theme }) => theme._backgroundComponentSecondary};
        &::after {
          /* border: 2px solid ${({ theme }) => theme._borderQuinary}; */
        }
      }
      &:where(.css-dev-only-do-not-override-w8mnev).ant-checkbox-checked:after {
        border: 2px solid ${({ theme }) => theme._borderQuinary};
      }
    }
    :where(.css-dev-only-do-not-override-w8mnev).ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
      .ant-checkbox-inner,
    :where(.css-dev-only-do-not-override-w8mnev).ant-checkbox:not(.ant-checkbox-disabled):hover
      .ant-checkbox-inner {
      border-color: unset;
    }
    :where(.css-dev-only-do-not-override-w8mnev).ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
      .ant-checkbox-checked:not(.ant-checkbox-disabled)
      .ant-checkbox-inner {
      background-color: ${({ theme }) => theme._backgroundComponentSecondary};
    }
  }
`;

export const CheckboxGroup = styled(Group)``;
