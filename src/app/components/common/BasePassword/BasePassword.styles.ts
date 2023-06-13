import styled from 'styled-components';
import { BaseInput } from 'app/components/common/BaseInput';

export const InputPassword = styled(BaseInput.Password)`
  &.ant-input-password {
    border-radius: 50px;
    padding: 10px 14px;
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #d0d5dd;
    &:focus,
    &:hover {
      border-color: ${({ theme }) => theme._borderQuinary};
    }
  }
`;
