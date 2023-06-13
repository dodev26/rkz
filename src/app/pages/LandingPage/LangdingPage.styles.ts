import { Form } from 'antd';
import { BG_BLACK_CURVED } from 'app/assets';
import { BaseTypography } from 'app/components/common/BaseTypography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'styles/media';

export const BannerSection = styled.section`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme._backgroundQuinary};
  padding-top: 100px;
  padding-bottom: 80px;
  ${media.lg} {
    padding-top: 158px;
  }
  ${media.xxl} {
    height: 882px;
  }
`;
export const BannerImage = styled(motion.div)`
  max-width: 845.35px;
  margin-left: auto;
  margin-top: 50px;
  ${media.lg} {
    margin-top: 0;
  }
`;
export const TitleBanner = styled(motion.h1)`
  color: ${({ theme }) => theme._textColorPrimary};
  font-family: inherit;
  font-weight: 700;
  position: relative;
  width: 100%;
  height: fit-content;
  font-size: 55px;
  max-width: 185px;
  ${media.xl} {
    font-size: 85px;
    line-height: 95px;
    max-width: 340px;
  }
  ${media.xxl} {
    font-size: 100px;
    line-height: 112px;
  }

  &::after {
    position: absolute;
    content: '';
    bottom: -20px;
    width: 100%;
    height: 8px;
    left: 0;
    border-radius: 10px;
    background-color: ${({ theme }) => theme._backgroundComponentSecondary};
    animation: width 1s ease-in-out;
    @keyframes width {
      0% {
        width: 0px;
      }
      100% {
        width: 111.69px;
      }
    }
    ${media.lg} {
      bottom: -55px;
      width: 111.69px;
      height: 14px;
    }
  }
`;

export const DescCard = styled.p`
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(22 / 14);
  ${media.xl} {
    font-weight: 500;
    font-size: 18px;
    line-height: calc(30 / 18);
  }
  &.text-muted {
    color: ${({ theme }) => theme._textMuted};
  }
`;

export const SectionHomeOne = styled.section`
  padding: 60px 0px;
  width: 100%;
  height: auto;
  ${media.xl} {
    padding: 83px 0 73px 0;
  }
  .row-card-section-one {
    margin-top: 40px;
    ${media.xl} {
      margin-top: 78px;
    }
    &.ant-row {
      & > .ant-col:not(:last-child) {
        margin-bottom: 30px;
      }
    }
    .desc-card {
      max-width: 100%;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      ${media.xl} {
        min-height: 60px;
      }
    }
    img {
      border-radius: 25px;
      display: block;
      border: 2px solid ${({ theme }) => theme._borderQuinary};
    }
    a {
      margin-top: 10px;
    }
  }
`;
export const SectionHomeTwo = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme._backgroundSixth};
  padding: 60px 0px 0px 0px;
  ${media.md} {
    max-height: 358px;
  }
  ${media.xl} {
    padding: 159px 0px 123px 0px;
  }
`;
export const SectionHomeThree = styled.section`
  overflow-x: hidden;
  width: 100%;
  background: url(${BG_BLACK_CURVED});
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 150px 0px 100px 0px;
  height: auto;
  ${media.xl} {
    height: 1524px;
    overflow-x: unset;
    padding: 163.5px 0px 151.5px 0px;
  }

  .first-row {
    margin-top: 40px;
    ${media.md} {
      margin-top: 55px;
    }
    ${media.xl} {
      margin-top: 97px;
    }
  }
  .secondary-row {
    margin-top: 40px;
    ${media.md} {
      margin-top: 55px;
    }
    ${media.xl} {
      margin-top: 114px;
    }
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme._backgroundSixth};
    z-index: -1;
  }
`;

export const SectionHomeFour = styled.section`
  padding: 0px 0 60px 0;
  ${media.xl} {
    padding: 150px 0 150px 0;
  }
`;
export const GroupDesc = styled.div`
  max-width: 854px;
  .small-title {
    font-family: inherit;
    font-weight: 700;
    font-size: 16px;
    line-height: calc(19 / 16);
    display: inline-block;
    padding-bottom: 8px;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.38);
  }
  h3.main-title {
    font-family: inherit;
    font-weight: 700;
    margin-top: 11px;
    margin-bottom: 0;
    font-size: 24px;
    line-height: calc(29 / 24);
    color: ${({ theme }) => theme._textSecondary};
  }
  .desc {
    margin-top: 34px;
    font-family: inherit;
    font-weight: 400;
    font-size: 15px;
    line-height: calc(30 / 15);
    color: ${({ theme }) => theme._textSecondary};
  }
  .btn-details {
    padding: 15px 30px;
    font-family: inherit;
    margin-top: 34px;
    font-weight: 600;
    font-size: 16px;
    line-height: calc(22 / 16);
    width: max-content;
    ${media.xl} {
      padding: 21px 95px;
      width: 256px;
      font-size: 18px;
      line-height: calc(22 / 18);
    }
  }
`;

export const ImageAnimation = styled.div`
  max-height: 300px;
  height: 300px;
  width: 100%;
  position: relative;
  z-index: 1;
  ${media.sm} {
    max-height: 400px;
    height: 400px;
  }
  ${media.md} {
    max-height: 500px;
    height: 500px;
  }
  ${media.xl} {
    max-height: 548px;
    height: 548px;
  }
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme._borderQuinary};
  }

  &.img-right {
    &::after {
      position: absolute;
      content: '';
      height: 65px;
      top: 0;
      left: 42px;
      width: 65px;
      border: 5px solid rgba(255, 255, 255, 0.37);
      border-radius: 100rem;
      transform: translateY(-50%);
      z-index: -1;
    }
    &::before {
      content: '';
      position: absolute;
      width: 262px;
      height: 262px;
      border-radius: 100rem;
      border: 5px solid rgba(255, 255, 255, 0.62);
      right: 0;
      top: 0;
      transform: translate(85px, -60px);
      z-index: -1;
    }
  }
  &.img-left {
    &::after {
      position: absolute;
      content: '';
      height: 65px;
      top: 0;
      width: 65px;
      border: 5px solid rgba(255, 255, 255, 0.37);
      border-radius: 100rem;
      transform: translateX(calc(-100% - 35px));
    }
    &::before {
      position: absolute;
      content: '';
      height: 401px;
      bottom: -64px;
      width: 401px;
      border: 5px solid rgba(255, 255, 255, 0.37);
      border-radius: 100rem;
      z-index: -1;
      transform: translateX(-40%);
    }
  }
`;

export const Text = styled(BaseTypography.Text)`
  color: ${({ theme }) => theme._text};
  &.secondary {
    color: ${({ theme }) => theme._textColorSecondary};
  }
`;

export const Title = styled(BaseTypography.Title)`
  &.title-for-card {
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme._text};
    margin-top: 10px;
    margin-bottom: 0px;
    line-height: calc(40 / 20);
    ${media.xl} {
      font-size: 36px;
      line-height: calc(70 / 36);
    }
  }
  &.title-section {
    max-width: 100%;
    font-family: inherit;
    font-style: inherit;
    font-weight: 700;
    font-size: 30px;
    line-height: calc(39 / 30);
    text-align: center;
    margin-bottom: 9px;
    ${media.md} {
      max-width: 600px;
    }
    ${media.lg} {
      max-width: 800px;
    }
    ${media.xl} {
      font-size: 50px;
      line-height: calc(70 / 50);
      max-width: 1054px;
    }
    &.normal {
      color: ${({ theme }) => theme._textSecondary};
    }
    &.primary {
      color: ${({ theme }) => theme._textColorPrimary};
    }
    &.secondary {
      color: ${({ theme }) => theme._textColorSecondary};
    }
    &.medium {
      font-size: 30px;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWithLink = styled(Link)`
  font-family: inherit;
  font-style: inherit;
  font-weight: 700;
  font-size: 14px;
  display: block;
  line-height: 25px;
  color: ${({ theme }) => theme._textColorSecondary};
  &:hover {
    text-decoration: underline;
  }
  ${media.xl} {
    font-size: 20px;
  }
`;

export const SectionHomeFive = styled.section`
  padding: 60px 0px;
  background-color: ${({ theme }) => theme._backgroundQuinary};
  ${media.xl} {
    padding: 75px 0px 109px 0px;
  }
  .row-card-section-five {
    margin-top: 40px;
    ${media.xl} {
      margin-top: 82px;
    }
    &.ant-row {
      & > .ant-col:not(:last-child) {
        margin-bottom: 30px;
        ${media.lg} {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export const SectionHomeSix = styled.section`
  /* padding-top: 102px;
  padding-bottom: 100px; */
  padding: 60px 0px 60px 0px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 53px;
  align-items: center;
  row-gap: 15px;
  ${media.xl} {
    flex-direction: row;
    justify-content: center;
    column-gap: 32px;
  }
  & > button.ant-btn {
    max-width: 250px;
    width: 100%;
    ${media.md} {
      max-width: 300px;
    }
    ${media.xl} {
      max-width: 360px;
      flex-basis: 50%;
      font-size: 24px;
      width: 100%;
      height: 85px;
      line-height: 70px;
      padding: 6px 24px;
    }
  }
`;

export const FlexibleWrapper = styled.div`
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  ${media.md} {
    flex-direction: row;
    column-gap: 35px;
  }
`;
export const FlexibleItemText = styled.div`
  flex-basis: 100%;
`;

export const FlexibleItemImg = styled.div`
  flex: 0 0 280px;
  position: relative;
  ${media.md} {
    flex: 0 0 350px;
  }
  ${media.xl} {
    flex: 0 0 430px;
  }
  .dot-group {
    max-width: 111px;
    position: absolute;
    top: 50%;
    transform: translate(calc(100% + 5.75px), -50%);
    background-color: transparent;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 44.63px;
    & > span {
      width: 7.05px;
      height: 7.05px;
      border-radius: 100rem;
      display: block;
      background-color: white;
    }
  }
`;

export const FlexGroupIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  position: relative;
  column-gap: 15px;
  ${media.sm} {
    column-gap: 30px;
  }
  ${media.xl} {
    margin-top: 82px;
    column-gap: unset;
  }
`;

export const GroupIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 36px;
  position: relative;
  & > img {
    max-width: 150px;
    width: 70px;
    height: 70px;
    ${media.md} {
      width: 100px;
      height: 100px;
    }
    ${media.lg} {
      width: 120px;
      height: 120px;
    }
    ${media.xl} {
      width: 150px;
      height: 150px;
    }
  }
  & > span {
    max-width: 294px;
    display: block;
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: calc(29 / 24);
    color: ${({ theme }) => theme._textColorPrimary};
    text-align: center;
    ${media.xl} {
      font-size: 24px;
    }
  }
`;

export const FormHome = styled(Form)`
  width: 100%;
  &.ant-form {
    display: flex;
    flex-direction: column;
    ${media.md} {
      flex-direction: row;
      justify-content: space-between;
    }
    .ant-select {
      & > .ant-select-selector {
        background-color: #e3e9f2;
        ${media.md} {
          width: 140px;
        }
        ${media.xl} {
          width: 240px;
        }
        ${media.xxl} {
          width: 320px;
        }
      }
    }
    .ant-input {
      ${media.md} {
        width: 140px;
      }
      ${media.xl} {
        width: 180px;
      }
      ${media.xxl} {
        width: 232px;
      }
    }
    .ant-form-item-row {
      display: flex;

      ${media.md} {
        column-gap: 15px;
      }
      ${media.xl} {
        column-gap: 30px;
      }
    }
    .ant-form-item .ant-form-item-label {
      display: flex;
      align-items: center;
      & > label {
        font-weight: 700;
        line-height: 39px;
        color: #272d4e;
        &::after {
          display: none;
        }
        ${media.xl} {
          font-size: 24px;
        }
        ${media.xxl} {
          font-size: 32px;
        }
      }
    }
    .btn-search {
      &.ant-btn {
        ${media.md} {
          width: 120px;
        }
        ${media.xl} {
          width: 179px;
        }
      }
    }
  }
`;
