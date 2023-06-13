import React from 'react';
import * as S from './Login.styles';
import { IMAGE_BANNER_HOME as BannerLogin, FACEBOOK, GOOGLE } from 'app/assets';
import { BaseInput } from 'app/components/common/BaseInput';
import { Container, LinkButton } from 'styles/global-styles';
import { InputPassword } from 'app/components/common/BasePassword';

const Login = () => {
  const [form] = S.FormLogin.useForm();
  const onLogin = (values: any) => {
    console.log(values);
  };
  return (
    <S.LoginWrapper>
      <S.LogoWrapper>REKAIZEN</S.LogoWrapper>
      <S.LoginContainer>
        <S.FormLogin labelCol={{ span: 24 }} form={form} onFinish={onLogin}>
          <S.LoginHeading>メールアドレスを利用してログイン</S.LoginHeading>
          <S.LoginSubHeading>
            すでに会員の方は以下のフォームからログインしてください。
          </S.LoginSubHeading>

          <S.FormLogin.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'メールアドレスを入力してください。',
              },
            ]}
            label="メールアドレス"
          >
            <BaseInput placeholder="メールアドレス" />
          </S.FormLogin.Item>
          <S.FormLogin.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'メールアドレスを入力してください。',
              },
            ]}
            label="パスワード"
          >
            <InputPassword />
          </S.FormLogin.Item>
          <S.ActionsWrapper>
            <S.FormLogin.Item>
              <S.RememberCheckbox>
                <S.RememberText>パスワードを記憶する</S.RememberText>
              </S.RememberCheckbox>
            </S.FormLogin.Item>
            <S.ForgotPassword to="/">パスワードを忘れた?</S.ForgotPassword>
          </S.ActionsWrapper>
          <S.FormLogin.Item className="btn-submit">
            <S.SubmitButton htmlType="submit" type="primary">
              ログイン
            </S.SubmitButton>
          </S.FormLogin.Item>
          <S.TextWarning>
            ※他の人とPCを共有している場合はチェックを外してください。
          </S.TextWarning>
          <S.ActionsWrapper className="btn-social-group">
            <S.SocialButton>
              <span>
                <GOOGLE />
              </span>
              Login with Google
            </S.SocialButton>
            <S.SocialButton>
              <span>
                <FACEBOOK />
              </span>
              Login with Facebook
            </S.SocialButton>
          </S.ActionsWrapper>
          <S.DontHaveAccount>
            アカウントをお持ちでない方はこちら?
          </S.DontHaveAccount>
          <LinkButton to="/">
            <S.SubmitButton style={{ marginTop: '0px' }} typeAdded="secondary">
              登録
            </S.SubmitButton>
          </LinkButton>
        </S.FormLogin>
        <S.BannerImageLogin>
          <img src={BannerLogin} alt="img banner rekaizen" />
        </S.BannerImageLogin>
      </S.LoginContainer>
    </S.LoginWrapper>
  );
};

export default Login;
