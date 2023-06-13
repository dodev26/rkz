import styled from 'styled-components';
import { media } from 'styles/media';

export const RegisterSixWrapper = styled.div``;
export const PrivateText = styled.div`
  padding-left: 105px;
  margin-top: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 32px;
  color: #272d4e;
  position: relative;
  margin-bottom: 20px;
  ${media.xxl} {
    font-size: 24px;
  }
  &::before {
    content: '非公開';
    border: 1px solid #f5616a;
    font-size: 10px;
    padding: 0px 10px;
    border-radius: 20px;
    color: #f5616a;
    padding: 4px 8px;
    line-height: 10px;
    top: 5px;
    left: 0;
    position: absolute;
    ${media.xl} {
      line-height: 12px;
      padding: 4px 10px;
    }
  }
`;

export const MoreFieldButton = styled.div`
  padding-left: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #272d4e;
  cursor: pointer;
  position: relative;
  margin-bottom: 30px;
  &::after {
    content: '+';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    line-height: 10px;
    display: flex;
    align-items: center;
    background-color: transparent;
    padding-bottom: 2px;
    justify-content: center;
    border: 1px solid #c7d3e4;
  }
`;
