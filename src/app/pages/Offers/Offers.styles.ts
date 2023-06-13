import BaseButton from 'app/components/common/BaseButton';
import styled from 'styled-components';
import { media } from 'styles/media';

export const OfferWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 33px 0px 288px 0px;
`;

export const NewOfferWrapper = styled.div`
  width: 100%;
  /* padding: 25px 32px; */
  padding: 15px;
  border: 2px solid #b5c2d9;
  position: relative;
  border-radius: 20px;
  margin-top: 30px;
  & > hr {
    border: 1px solid #b5c2d9;
    margin-top: 20px;
    margin-bottom: 8px;
  }
`;

export const NewOfferContentWrapper = styled.div`
  max-width: 870px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: flex-start;
  .name-company {
    color: #272d4e;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    ${media.xl} {
      font-weight: 400;
      font-size: 20px;
      line-height: 40px;
    }
  }
`;
export const NewOfferTitle = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  & > svg {
    flex-shrink: 0;
  }
  & > h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #272d4e;
    ${media.xl} {
      line-height: 40px;
      font-size: 18px;
    }
  }
`;

export const Tag = styled.div`
  border: 1px solid #0c2e76;
  border-radius: 50px;
  font-weight: 700;
  padding: 10px;
  color: #0c2e76;
  font-size: 16px;
  max-width: max-content;
  ${media.xl} {
    padding: 15px 22px;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const FooterSalary = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  color: #272d4e;
  ${media.lg} {
    font-size: 20px;
    line-height: 40px;
  }
`;

export const AttchBtn = styled(BaseButton)`
  position: absolute;
  top: 32px;
  right: 32px;
  &.attach-btn-mobile {
    top: -22px;
    right: -10px;
    &.ant-btn {
      width: 44px;
      padding: 0;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100rem;
      background: #0c2e76;
      ${media.xl} {
        display: none;
      }
    }
  }
  &.ant-btn {
    padding: 30px 43px;
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    color: #ffffff;
    width: 150px;
    display: none;
    ${media.xl} {
      display: flex;
    }
    ${media.xxl} {
      width: 247px;
    }
  }
`;
