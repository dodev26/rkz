import { Form } from 'antd';
import BaseButton from 'app/components/common/BaseButton';
import { BaseCheckbox } from 'app/components/common/BaseCheckbox';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'styles/media';

export const LoginWrapper = styled.div`
  position: relative;
  height: auto;
  overflow: hidden;
  width: 100%;
  ${media.lg} {
    padding: 32px;
    height: 100vh;
  }
`;
export const LogoWrapper = styled.div`
  font-family: inherit;
  position: absolute;
  font-weight: 700;
  font-size: 25px;
  top: 15px;
  left: 15px;
  line-height: calc(39 / 32);
  color: ${({ theme }) => theme._textColorPrimary};
  text-transform: uppercase;
  ${media.lg} {
    font-size: 32px;
    top: 32px;
    left: 32px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > .ant-form-item {
    margin-bottom: 0;
    .ant-form-item-control-input {
      min-height: auto;
    }
  }
  &.btn-social-group {
    flex-direction: column;
    row-gap: 15px;
    margin-top: 20px;
    ${media.xl} {
      flex-direction: row;
      column-gap: 10px;
      row-gap: unset;
    }
  }
`;
export const LoginContainer = styled.div`
  margin-top: 110px;
  ${media.lg} {
    margin-top: 0px;
    display: flex;
    height: 100%;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;

export const RememberCheckbox = styled(BaseCheckbox)`
  display: flex;
`;

export const DontHaveAccount = styled.div`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(24 / 14);
  text-align: center;
  color: ${({ theme }) => theme._textColorPrimary};
  margin: 20px 0px;
  ${media.xl} {
    margin: 43px 0 17px 0px;
  }
`;

export const ForgotPassword = styled(Link)`
  font-family: inherit;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(20 / 12);
  color: ${({ theme }) => theme._textColorSecondary};
  display: inline-block;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
  }
`;

export const RememberText = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: calc(20 / 12);
  color: ${({ theme }) => theme._textColorTertiary};
`;
export const FormLogin = styled(Form)`
  max-width: 360px;
  position: relative;
  z-index: 10;
  margin: 0 auto;
  &.ant-form {
    .ant-form-item-label > label {
      font-weight: inherit;
      font-size: 14px;
      height: auto;
      font-weight: 700;
      line-height: calc(20 / 14);
      color: ${({ theme }) => theme._textColorPrimary};
    }
    .btn-submit {
      margin-bottom: 10px;
    }
    input,
    .ant-input-password {
      background-color: transparent;
    }
  }
  ${media.xxl} {
    margin: 30px auto 0px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 500px;
    left: -70px;
    top: 0;
    height: 500px;
    border-radius: 100rem;
    background: #f3fffc;
    filter: blur(175px);
    z-index: -1;
  }
`;

export const SocialButton = styled.button`
  padding: 10px;
  width: 100%;
  border: 1px solid #d0d5dd;
  font-family: inherit;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  font-size: 12px;
  line-height: 15px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme._background};
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme._borderQuinary};
  }
`;
export const SubmitButton = styled(BaseButton)`
  margin-top: 20px;
  &.ant-btn {
    padding: 12px 20px;
    font-weight: 700;
    font-size: 16px;
    line-height: calc(20 / 16);
  }
  ${media.xl} {
    margin-top: 34px;
  }
`;
export const LoginHeading = styled.h1`
  font-family: inherit;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(40 / 24);
  text-transform: capitalize;
  text-align: center;
  max-width: 300px;
  color: #082e75;
  margin: 0 auto 30px;
  ${media.lg} {
    max-width: 100%;
    font-size: 24px;
    text-align: left;
    word-break: keep-all;
    margin: 0 auto 15px;
  }
`;
export const LoginSubHeading = styled.p`
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #667085;
  display: none;
  ${media.md} {
    font-size: 16px;
    display: block;
    word-break: keep-all;
    margin-bottom: 33px;
  }
`;
export const BannerImageLogin = styled.div`
  display: none;
  height: 100%;
  border-radius: 40px;
  background-color: #e6f8f4;
  align-items: center;
  justify-content: center;

  ${media.xl} {
    display: flex;
    padding: 20px;
    max-width: 500px;
  }
  ${media.xxl} {
    max-width: 768px;
    width: 100%;
    padding: 0px;
  }
  & > img {
    max-width: 678.35px;
    max-height: 517.45px;
    width: 100%;
  }
`;

export const TextWarning = styled.blockquote`
  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  max-width: 250px;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme._textColorTertiary};
  display: block;
  ${media.xl} {
    max-width: 100%;
  }
`;
