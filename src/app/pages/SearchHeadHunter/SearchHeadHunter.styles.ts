import { Form } from 'antd';
import styled from 'styled-components';

export const SearchHeadHunterWrapper = styled.div`
  padding: 40px 0px;
`;

export const FormSearchHeadHunter = styled(Form)`
  &.ant-form {
    width: 100%;
    border: 2px solid #b5c2d9;
    border-radius: 20px;
    padding: 30px;
    margin-top: 30px;
    & > .ant-row {
      .ant-form-item-label {
        display: flex;
        align-items: center;
        & > label {
          font-weight: 700;
          font-size: 20px;
          line-height: 40px;
          color: #272d4e;
          &::after {
            display: none;
          }
        }
      }
    }
    .last-col {
      .ant-form-item-control-input-content {
        display: flex;
        align-items: center;
        .ant-radio-group {
          display: flex;
          column-gap: 30px;
        }
      }
    }
  }
`;

export const ListCardHeadHunter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-top: 40px;
`;
