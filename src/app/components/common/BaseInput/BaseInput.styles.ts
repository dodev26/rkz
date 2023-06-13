import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const Input = styled(AntInput)`
  &textarea:where(.css-dev-only-do-not-override-w8mnev).ant-input {
    border-radius: 50px;
  }
  &.ant-input {
    border-radius: 50px;
    padding: 10px 14px;
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid ${({ theme }) => theme._borderPrimary};
    &::placeholder() {
      color: ${({ theme }) => theme._textMutedLight};
    }
    &:focus,
    &:hover {
      border-color: ${({ theme }) => theme._borderQuinary};
    }
  }
`;
export const TextAreaCustom = styled(AntInput.TextArea)`
  &.ant-input {
    border-radius: 20px;
  }
`;
