import { Arrow_top } from 'app/assets';
import styled from 'styled-components';
import { media } from 'styles/media';

export const CardOfferWrapper = styled.div`
  padding: 0px;
  overflow: hidden;
  border-radius: 20px;
  & > .row-content-offer {
    &:first-child > .col-title {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        background: url(${Arrow_top});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 20px;
        height: 20px;
        top: 10px;
        left: 6px;
        ${media.xl} {
          width: 26px;
          height: 26px;
          top: 10px;
          left: 10px;
        }
      }
    }
  }
`;

export const RowOffer = styled.div`
  display: flex;
  flex-flow: row wrap;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(7, 45, 117, 0.26);
  }
`;

export const ColOffer = styled.div`
  &.col-title {
    flex: 0 0 130px;
    background: #072d75;
    padding: 12px 12px 12px 30px;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;

    ${media.xl} {
      font-size: 20px;
      flex: 0 0 247px;
      line-height: 40px;
      padding: 14px 0px 14px 48px;
    }
  }
  &.col-content {
    flex: 1 1 calc(100% - 130px);
    background: #f2f6fc;
    font-weight: 500;
    color: #6f757b;
    font-size: 16px;
    line-height: 22px;
    position: relative;
    padding: 12px 20px;
    ${media.xl} {
      flex: 1 1 calc(100% - 247px);
      padding: 14px 40px;
      font-size: 20px;
      line-height: 40px;
    }
    .btn-see-detail {
      padding: 15px 35px;
      background: #24c68f;
      border-radius: 50px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #ffffff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      margin-left: auto;
      display: none;
      ${media.xl} {
        display: inline-block;
      }
    }
  }
`;
