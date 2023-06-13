import styled from 'styled-components';
import { media } from 'styles/media';

export const RegisterFourWrapper = styled.div`
  .ant-form {
    .ant-form-item.checkbox-form {
      .ant-form-item-control-input-content {
        display: flex;
        align-items: center;
        justify-content: center;
        & > .ant-radio-group {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          row-gap: 10px;
          ${media.sm} {
            flex-direction: row;
            row-gap: unset;
          }
        }
      }
    }
  }
`;
export const TextWrapper = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #272d4e;
  &.text-wrapper-first {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    margin-top: 40px;
  }
  &.text-wrapper-second {
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
`;
