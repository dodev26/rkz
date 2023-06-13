import React from 'react';
import * as S from './RegisterSix.styles';
import {
  FieldWrapper,
  RegisterFormWrapper,
  RegisterWrapper,
} from '../ReigsterStep.styles';
import { Container } from 'styles/global-styles';
import Heading from 'app/components/Heading';
import { Document } from 'app/assets';
import TitleFields from '../components/TitleFields';
import { BaseInput } from 'app/components/common/BaseInput';
import { BaseCheckBoxV2 } from 'app/components/BaseCheckBoxV2';
import { BaseSelect } from 'app/components/common/BaseSelect';
import { BaseRow } from 'app/components/common/BaseRow';
import { BaseCol } from 'app/components/common/BaseCol';
import BaseButton from 'app/components/common/BaseButton';
import Steps from '../components/Steps';
import { useNavigate } from 'react-router-dom';
const sizeWrapper = {
  maxWidth: 1050,
};
const RegisterSix = () => {
  const [form] = RegisterFormWrapper.useForm();
  const navigate = useNavigate();
  const onRegister = () => {
    navigate('/r7');
  };
  return (
    <RegisterWrapper>
      <S.RegisterSixWrapper>
        <Container>
          <Heading title="レジュメ登録" icon={<Document />} />
          <Steps />
          <S.PrivateText>
            は、スカウトの返信、求人情報への応募、相談を行わない限り公開されません。どのようにヘッドハンター・企業から見られているかはこちらからご確認ください。
          </S.PrivateText>
          <RegisterFormWrapper
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: '100%' }}
            labelAlign="left"
            form={form}
            onFinish={onRegister}
          >
            <TitleFields title="リクルートエージェントの転職支援サービスについて" />
            <FieldWrapper {...sizeWrapper}>
              <RegisterFormWrapper.Item label="企業名">
                <BaseInput placeholder="○○学部○○専攻" />
              </RegisterFormWrapper.Item>
              <RegisterFormWrapper.Item label="部署名・役職">
                <BaseInput placeholder="○○部 部長" />
              </RegisterFormWrapper.Item>
              <RegisterFormWrapper.Item
                wrapperCol={{
                  xs: {
                    span: 20,
                    push: 0,
                  },
                  sm: {
                    span: 20,
                    push: 4,
                  },
                }}
              >
                <BaseCheckBoxV2>現在勤務している</BaseCheckBoxV2>
              </RegisterFormWrapper.Item>

              <RegisterFormWrapper.Item label="在籍期間">
                <BaseRow
                  gutter={{
                    xs: 0,
                    sm: 8,
                    md: 30,
                    lg: 40,
                    xl: 50,
                  }}
                  wrap={true}
                  justify="space-between"
                >
                  <BaseCol xs={24} md={12}>
                    <RegisterFormWrapper.Item
                      style={{
                        display: 'inline-block',
                        width: 'calc(50% - 8px)',
                        marginRight: 8,
                        marginBottom: 10,
                      }}
                    >
                      <BaseSelect />
                    </RegisterFormWrapper.Item>
                    <RegisterFormWrapper.Item
                      style={{
                        display: 'inline-block',
                        width: 'calc(50% - 8px)',
                        marginBottom: 10,
                        marginLeft: 8,
                      }}
                    >
                      <BaseSelect />
                    </RegisterFormWrapper.Item>
                  </BaseCol>
                  <BaseCol xs={24} md={12}>
                    <RegisterFormWrapper.Item
                      style={{
                        display: 'inline-block',
                        width: 'calc(50% - 8px)',
                        marginRight: 8,
                        marginBottom: 10,
                      }}
                    >
                      <BaseSelect />
                    </RegisterFormWrapper.Item>
                    <RegisterFormWrapper.Item
                      style={{
                        display: 'inline-block',
                        width: 'calc(50% - 8px)',
                        marginLeft: 8,
                        marginBottom: 10,
                      }}
                    >
                      <BaseSelect />
                    </RegisterFormWrapper.Item>
                  </BaseCol>
                </BaseRow>
              </RegisterFormWrapper.Item>
              <S.MoreFieldButton>過去の職務経歴を追加する</S.MoreFieldButton>
            </FieldWrapper>
            <TitleFields title="過去の職務経歴" />
            <FieldWrapper {...sizeWrapper}>
              <S.MoreFieldButton>過去の職務経歴を追加する</S.MoreFieldButton>
            </FieldWrapper>
            <TitleFields title="保有資格" />
            <FieldWrapper {...sizeWrapper}>
              <RegisterFormWrapper.Item label="資格">
                <BaseSelect placeholder="業種を選択する" />
              </RegisterFormWrapper.Item>
            </FieldWrapper>
            <TitleFields title="希望条件" />
            <FieldWrapper {...sizeWrapper}>
              <RegisterFormWrapper.Item label="業種">
                <BaseSelect placeholder="業種を選択する" />
              </RegisterFormWrapper.Item>
              <RegisterFormWrapper.Item label="職種">
                <BaseSelect placeholder="業種を選択する" />
              </RegisterFormWrapper.Item>
              <RegisterFormWrapper.Item label="年収">
                <BaseSelect placeholder="選択してください。" />
              </RegisterFormWrapper.Item>
              <RegisterFormWrapper.Item label="勤務地">
                <BaseSelect placeholder="業種を選択する" />
              </RegisterFormWrapper.Item>
              <RegisterFormWrapper.Item
                label="その他"
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
              >
                <BaseInput.TextArea rows={5} />
              </RegisterFormWrapper.Item>
            </FieldWrapper>
            <TitleFields title="住 所" />
            <FieldWrapper {...sizeWrapper}>
              <RegisterFormWrapper.Item label="郵便番号">
                <BaseInput />
              </RegisterFormWrapper.Item>
              <RegisterFormWrapper.Item label="都道府県">
                <BaseSelect />
              </RegisterFormWrapper.Item>
              <RegisterFormWrapper.Item label="市区町村以降">
                <BaseInput />
              </RegisterFormWrapper.Item>
            </FieldWrapper>
            <RegisterFormWrapper.Item label={false} wrapperCol={{ span: 24 }}>
              <BaseButton
                htmlType="submit"
                type="primary"
                className="btn-register-step"
              >
                完了する
              </BaseButton>
            </RegisterFormWrapper.Item>
          </RegisterFormWrapper>
        </Container>
      </S.RegisterSixWrapper>
    </RegisterWrapper>
  );
};

export default RegisterSix;
