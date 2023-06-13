import { Table as antTable } from 'antd';
import { BANNERMYPAGE, PLAY } from 'app/assets';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'styles/media';

export const MyPageWrapper = styled.div``;

export const TextBgPink = styled.div`
  background-color: #ff82a0;
  font-weight: 900;
  font-size: 16px;
  line-height: 23px;
  margin-top: 50px;
  color: #ffffff;
  &.top {
    padding: 20px 46px;
    & > a {
      text-decoration: underline;
      font-weight: 400;
    }
    ${media.lg} {
      font-size: 24px;
      line-height: 40px;
    }
  }
  &.bottom {
    font-size: 18px;
    padding: 20px;
    line-height: 33px;
    ${media.xl} {
      font-size: 28px;
      padding: 25px 0px;
      line-height: 70px;
      text-align: center;
    }
  }
`;

export const BoxWrapper = styled.div`
  &.banner {
    display: none;
    ${media.md} {
      display: block;
    }
  }
  margin-top: 30px;
  .muted-alert {
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    color: #6f757b;
    margin-top: 20px;
  }
  & > .row-text-icon {
    margin-top: 50px;
  }
`;

export const TableAntdCustom = styled(antTable)`
  &.ant-table-wrapper {
    margin-top: 25px;
    .ant-table-content {
      overflow: auto hidden;
      ${media.md} {
        overflow: unset !important;
      }
    }
    table {
      border: 2px solid #dcedf2;
      & > .ant-table-thead > tr > .ant-table-cell {
        background-color: #f1fcff;
        font-weight: 900;
        font-size: 16px;
        line-height: 40px;
        color: #072d69;
        padding: 12px 16px;
        &:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
          height: 100%;
          width: 2px;
        }
        ${media.lg} {
          font-size: 20px;
          line-height: 40px;
        }
      }
    }
  }
`;

export const ViewDetail = styled(Link)`
  display: inline-block;
  font-weight: 600;
  margin-left: auto;
  font-size: 20px;
  line-height: 40px;
  color: #22c58e;
  padding-left: 30px;
  position: relative;
  margin-top: 8px;
  transition: all 0.3s ease;
  &:hover {
    text-decoration: underline;
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    background: url(${PLAY}) no-repeat;
    width: 20px;
    height: 20px;
    float: left;
    margin: 0 6px 0 0;
  }
`;

export const BannerMyPage = styled.div`
  margin-top: 25px;
  background: url(${BANNERMYPAGE});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme._borderQuinary};
  max-width: 100%;
  max-height: 374px;
  height: 374px;
  display: none;
  ${media.md} {
    display: block;
  }
`;

export const TextWithIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  margin-bottom: 30px;
`;

export const IconWrapper = styled.div`
  width: 189px;
  height: 189px;
  border-radius: 100rem;
  background: #f2f6fc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #6f757b;
`;
