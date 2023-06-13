import styled from 'styled-components';

export const TitleFieldsWrapper = styled.div`
  width: 100%;
  padding: 3px 0px 3px 15px;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  color: #272d4e;
  background-color: #f1fcff;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 4px;
    background-color: #20c48d;
  }
`;
