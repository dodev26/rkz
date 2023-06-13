import React from 'react';
import * as S from './RegisterFour.styles';
import {
  FieldWrapper,
  RegisterFormWrapper,
  RegisterWrapper,
} from '../ReigsterStep.styles';
import { Container } from 'styles/global-styles';
import Heading from 'app/components/Heading';
import { Document } from 'app/assets';
import TitleFields from '../components/TitleFields';
import { BaseRadio } from 'app/components/common/BaseRadio';
import BaseButton from 'app/components/common/BaseButton';
import Steps from '../components/Steps';
import { useNavigate } from 'react-router-dom';
const RegisterFour = () => {
  const [form] = RegisterFormWrapper.useForm();
  const navigate = useNavigate();
  const onRegister = () => {
    navigate('/r5');
  };
  return (
    <RegisterWrapper>
      <S.RegisterFourWrapper>
        <Container>
          <Heading title="会員登録" icon={<Document />} />
          <Steps />
          <RegisterFormWrapper form={form} onFinish={onRegister}>
            <FieldWrapper>
              <TitleFields title="リクルートエージェントの転職支援サービスについて" />
              <S.TextWrapper className="text-wrapper-first">
                <p>
                  リクルートダイレクトスカウトには掲載されていない約10万件の非公開求人の検索機能や、独自に収集/分析した生の企業情報、キャリアアドバイザーによる企業への推薦・進捗管理などの総合的なサポートを無料でご提供します。
                </p>
                <p>転職支援サービスの申し込み</p>
              </S.TextWrapper>
              <S.TextWrapper className="text-wrapper-second">
                転職支援サービス利用規約 ・プライバシーポリシー
              </S.TextWrapper>

              <RegisterFormWrapper.Item className="checkbox-form">
                <BaseRadio.Group>
                  <BaseRadio value={1}>
                    上記に同意して、転職支援サービスに申し込む
                  </BaseRadio>
                  <BaseRadio value={2}>申し込まない</BaseRadio>
                </BaseRadio.Group>
              </RegisterFormWrapper.Item>
              <RegisterFormWrapper.Item>
                <BaseButton
                  htmlType="submit"
                  className="btn-register-step"
                  type="primary"
                >
                  次へ
                </BaseButton>
              </RegisterFormWrapper.Item>
            </FieldWrapper>
          </RegisterFormWrapper>
        </Container>
      </S.RegisterFourWrapper>
    </RegisterWrapper>
  );
};

export default RegisterFour;
