import styled from 'styled-components';

export const RegisterThreeWrapper = styled.div`
  .date-picker {
    position: relative;
    &::after {
      content: '〜 現職';
      position: absolute;
      top: 50%;
      right: -70px;
      transform: translateY(-50%);
      font-weight: 500;
      font-size: 14px;
      line-height: 29px;
      color: #272d4e;
    }
  }
`;
