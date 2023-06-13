import styled from 'styled-components';
import { media } from 'styles/media';

export const StepWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  column-gap: 27px;
  margin-top: 37px;
  row-gap: 30px;
  ${media.md} {
    justify-content: space-between;
    column-gap: 27px;
    row-gap: unset;
  }
`;

export const Step = styled.div`
  /* flex: 0 1 calc(20% - 13.5px);
  padding: 15px 20px;
  background: #072d75;
  border-radius: 50px;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  color: #ffffff;
  text-align: center; */
  width: 44px;
  height: 44px;
  border-radius: 100rem;
  border-radius: 50px;
  display: flex;
  background-color: #f2f6fc;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
  color: #072d75;
  position: relative;
  ${media.md} {
    width: unset;
    height: unset;
    padding: 15px 20px;
    flex: 0 1 calc(20% - 13.5px);
  }
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 30px;
    right: -30px;
    background: #e3e9f2;
    transition: all 0.3s ease-in-out;
    ${media.md} {
      display: none;
    }
  }
  &.active {
    background: #072d75;
    color: #ffffff;
    &:not(:last-child)::after {
      background: #072d75;
    }
  }
`;
