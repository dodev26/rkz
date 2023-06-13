import React from 'react';
import * as S from './Register.styles';
import { BaseInput } from 'app/components/common/BaseInput';
import { InputPassword } from 'app/components/common/BasePassword';

const Register = () => {
  const [form] = S.FormRegister.useForm();
  const onRegister = (values: any) => {
    console.log(values);
  };
  return (
    <S.FormRegister labelCol={{ span: 24 }} form={form} onFinish={onRegister}>
      <S.RegisterHeading>メールアドレスを使用して登録する</S.RegisterHeading>
      <S.RegisterSubHeading>
        すでにアカウントをお持ちの場合は、 [ログイン] をクリックしてくださいv
      </S.RegisterSubHeading>

      <S.FormRegister.Item
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
      </S.FormRegister.Item>
      <S.FormRegister.Item
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
      </S.FormRegister.Item>
      <S.FormRegister.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'メールアドレスを入力してください。',
          },
        ]}
        label="パスワードを認証する"
      >
        <InputPassword />
      </S.FormRegister.Item>
      <S.ActionsWrapper>
        <S.ForgotPassword to="/">パスワードを忘れた</S.ForgotPassword>
      </S.ActionsWrapper>
      <S.FormRegister.Item className="btn-submit">
        <S.SubmitButton htmlType="submit" type="primary">
          登録
        </S.SubmitButton>
      </S.FormRegister.Item>
      <S.TextWarning>
        ※他の人とPCを共有している場合はチェックを外してください。
      </S.TextWarning>
    </S.FormRegister>
  );
};

export default Register;
