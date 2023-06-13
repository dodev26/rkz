import styled from 'styled-components';
import { media } from 'styles/media';

export const RegisterSevenWrapper = styled.div`
  .ant-form {
    .wraptext-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      row-gap: 30px;
      & > h3 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 25px;
        color: #272d4e;
        ${media.lg} {
          font-size: 24px;
          line-height: 32px;
        }
      }
      & > div {
        max-width: 920px;
        font-size: 14px;
        word-break: keep-all;
        margin-left: 10px;
        margin-right: 10px;
        ${media.lg} {
          font-size: 16px;
        }
      }
    }
    .btn-register-step {
      margin-top: 0px;
    }
    &.form-register-five {
      margin-bottom: 30px;
    }
  }
`;

export const TitleTable = styled.h3`
  font-family: inherit;
  font-weight: 700;
  font-size: 25px;
  line-height: 70px;
  color: #072d75;
  margin-bottom: 20px;
`;

export const TableWrapper = styled.div`
  padding: 20px;
  background: #f2f6fc;
  border-radius: 20px;
  width: 100%;
  overflow-x: auto;
  & > .ant-table-wrapper {
    table {
      & > .ant-table-thead {
        & > tr {
          & > th.ant-table-cell {
            background: #072d75;
            color: #ffffff;
            &::before {
              display: none;
            }
          }
        }
      }
      & > .ant-table-tbody {
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 16px;
        color: #272d4e;
      }
    }
  }
`;
