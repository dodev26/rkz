import { Form } from 'antd';
import { BaseCheckBoxV2 } from 'app/components/BaseCheckBoxV2';
import styled from 'styled-components';

export const RegisterOneWrapper = styled.div``;
export const RegisterOneForm = styled(Form)`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  .row-form-field-rgto {
    margin-top: 56px;
    .ant-select > .ant-select-selector {
      background-color: #f2f6fc;
    }
    & > .ant-col:last-child {
      margin-top: 30px;
      .ant-btn {
        max-width: 250px;
        display: block;
        margin: 0 auto;
      }
    }
  }
`;

export const GroupTextWarning = styled.div`
  font-family: 'Montserrat';
  margin-top: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: calc(40 / 20);
  color: ${({ theme }) => theme._textColorPrimary};
  em {
    display: block;
  }
  em:not(:first-child) {
    color: #f5616a;
  }
`;

export const ListCheckbox = styled(BaseCheckBoxV2.Group)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 15px;
`;
