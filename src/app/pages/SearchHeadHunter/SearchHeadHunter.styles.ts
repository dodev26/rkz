import { Form } from 'antd';
import styled from 'styled-components';
import { media } from 'styles/media';

export const SearchHeadHunterWrapper = styled.div`
  padding: 40px 0px;
`;

export const FormSearchHeadHunter = styled(Form)`
  &.ant-form {
    width: 100%;
    border: 2px solid #b5c2d9;
    border-radius: 20px;
    padding: 20px 15px;
    overflow-x: hidden;
    margin-top: 30px;
    ${media.xl} {
      padding: 30px;
    }
    & > .ant-row {
      .ant-form-item-label {
        display: flex;
        align-items: center;
        & > label {
          font-weight: 700;
          font-size: 16px;
          line-height: 40px;
          color: #272d4e;
          ${media.xl} {
            font-size: 20px;
          }
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
          ${media.md} {
            column-gap: 20px;
          }
          ${media.xl} {
            column-gap: 30px;
          }
        }
      }
    }
    .ant-select > .ant-select-selector {
      background-color: #f2f6fc;
      border: 1px solid #dce5f2;
    }
  }
`;

export const ListCardHeadHunter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-top: 40px;
`;
