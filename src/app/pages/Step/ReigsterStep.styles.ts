import { Form } from 'antd';
import styled from 'styled-components';

interface IFieldWrapper {
  maxWidth?: number;
}
export const RegisterWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 40px 0px 70px 0px;
`;

export const FieldWrapper = styled.div<IFieldWrapper>`
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '100%')};
  margin-top: 40px;
`;

export const RegisterFormWrapper = styled(Form)`
  &.ant-form {
    .ant-form-item {
      & > .ant-form-item-row {
        & > .ant-form-item-label {
          display: flex;
          align-items: center;
          & > label {
            font-family: inherit;
            font-weight: 500;
            font-size: 16px;
            color: #272d4e;
            &::after {
              display: none;
            }
          }
        }
      }
    }
    .btn-register-step {
      display: block;
      margin-top: 50px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
