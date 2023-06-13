import React from 'react';
import * as S from './RegisterOne.styles';
import { Container } from 'styles/global-styles';
import TitteStep from '../components/TitteStep';
import { BaseInput } from 'app/components/common/BaseInput';
import { BaseRow } from 'app/components/common/BaseRow';
import { BaseCol } from 'app/components/common/BaseCol';
import { BaseSelect } from 'app/components/common/BaseSelect';
import { BaseRadio } from 'app/components/common/BaseRadio';
import BaseButton from 'app/components/common/BaseButton';
import { RegisterWrapper } from '../ReigsterStep.styles';

const CheckboxList = [
  {
    value: 1,
    label:
      'メールマガジンを受け取る（週1回）企業インタビューや転職体験談などをお届け',
  },
  {
    value: 2,
    label:
      '経歴にマッチした求人を受け取る職歴や希望条件にマッチした求人があった時のみメールでお届け',
  },
  {
    value: 3,
    label:
      '次回から自動でログインする他の人とPCを共有している場合はチェックを外してください',
  },
  {
    value: 4,
    label: 'ヘッドハンタースカウトサービス',
  },
  {
    value: 5,
    label: '企業スカウトサービス',
  },
  {
    value: 6,
    label: '顧問求人スカウトサービス',
  },
  {
    value: 7,
    label: 'リクルートダイレクトスカウトからのお知らせメール',
  },
  {
    value: 8,
    label: 'スカウトお知らせメール',
  },
  {
    value: 9,
    label: '未読お知らせメール',
  },
  {
    value: 10,
    label: '返信期限お知らせメール',
  },
  {
    value: 11,
    label: '求人お知らせメール',
  },
];
const RegisterOne = () => {
  const [form] = S.RegisterOneForm.useForm();
  const onRegister = () => {
    console.log('register');
  };
  return (
    <RegisterWrapper>
      <S.RegisterOneWrapper>
        <Container>
          <S.RegisterOneForm
            onFinish={onRegister}
            form={form}
            labelCol={{
              span: 0,
            }}
            wrapperCol={{
              span: 24,
            }}
          >
            <TitteStep title="会員登録" />
            <S.GroupTextWarning>
              <em>
                以下の情報を入力し、「登録する」ボタンをクリックしてください。
              </em>
              <em> *は、入力必須項目です。</em>
              <em>
                すでにアカウントをお持ちの場合は、[ログイン]
                をクリックしてください
              </em>
            </S.GroupTextWarning>
            <BaseRow
              gutter={{
                xs: 16,
                sm: 16,
                lg: 28,
                xl: 32,
                xxl: 46,
              }}
              className="row-form-field-rgto"
            >
              <BaseCol xs={24} md={12}>
                <S.RegisterOneForm.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <BaseInput placeholder="氏名（氏)" />
                </S.RegisterOneForm.Item>
              </BaseCol>
              <BaseCol xs={24} md={12}>
                <S.RegisterOneForm.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <BaseInput placeholder="氏名（氏)" />
                </S.RegisterOneForm.Item>
              </BaseCol>
              <BaseCol xs={24} md={12}>
                <S.RegisterOneForm.Item>
                  <BaseInput placeholder="シメイ（シ)" />
                </S.RegisterOneForm.Item>
              </BaseCol>
              <BaseCol xs={24} md={12}>
                <S.RegisterOneForm.Item>
                  <BaseInput placeholder="シメイ（メイ)" />
                </S.RegisterOneForm.Item>
              </BaseCol>
              <BaseCol xs={8}>
                <S.RegisterOneForm.Item>
                  <BaseSelect placeholder="day" />
                </S.RegisterOneForm.Item>
              </BaseCol>
              <BaseCol xs={8}>
                <S.RegisterOneForm.Item>
                  <BaseSelect placeholder="month" />
                </S.RegisterOneForm.Item>
              </BaseCol>
              <BaseCol xs={8}>
                <S.RegisterOneForm.Item>
                  <BaseSelect placeholder="year" />
                </S.RegisterOneForm.Item>
              </BaseCol>
              <BaseCol xs={24}>
                <S.RegisterOneForm.Item>
                  <BaseRadio.Group>
                    <BaseRadio value="女性 ">女性</BaseRadio>
                    <BaseRadio value="男性">男性</BaseRadio>
                  </BaseRadio.Group>
                </S.RegisterOneForm.Item>
              </BaseCol>

              <BaseCol xs={24} xl={12}>
                <BaseRow>
                  <BaseCol xs={24}>
                    <S.RegisterOneForm.Item>
                      <BaseSelect placeholder="北海道" />
                    </S.RegisterOneForm.Item>
                  </BaseCol>
                  <BaseCol xs={24}>
                    <S.RegisterOneForm.Item>
                      <BaseSelect placeholder="from 600.00 to 750.00 万円" />
                    </S.RegisterOneForm.Item>
                  </BaseCol>
                  <BaseCol xs={24}>
                    <S.RegisterOneForm.Item>
                      <BaseSelect placeholder="業種を選択する" />
                    </S.RegisterOneForm.Item>
                  </BaseCol>
                  <BaseCol xs={24}>
                    <S.RegisterOneForm.Item>
                      <BaseSelect placeholder="業種を選択する" />
                    </S.RegisterOneForm.Item>
                  </BaseCol>
                </BaseRow>
              </BaseCol>
              <BaseCol xs={24}>
                <S.RegisterOneForm.Item>
                  <S.ListCheckbox options={CheckboxList} />
                </S.RegisterOneForm.Item>
              </BaseCol>
              <BaseCol xs={24}>
                <S.RegisterOneForm.Item>
                  <BaseButton htmlType="submit" type="primary">
                    次のステップ
                  </BaseButton>
                </S.RegisterOneForm.Item>
              </BaseCol>
            </BaseRow>
          </S.RegisterOneForm>
        </Container>
      </S.RegisterOneWrapper>
    </RegisterWrapper>
  );
};

export default RegisterOne;
