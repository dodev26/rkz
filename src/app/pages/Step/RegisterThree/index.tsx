import React from 'react';
import * as S from './RegisterThree.styles';
import { Container } from 'styles/global-styles';
import Heading from 'app/components/Heading';
import { Document } from 'app/assets';
import {
  FieldWrapper,
  RegisterFormWrapper,
  RegisterWrapper,
} from '../ReigsterStep.styles';
import { BaseSelect } from 'app/components/common/BaseSelect';
import TitleFields from '../components/TitleFields';
import { BaseInput } from 'app/components/common/BaseInput';
import { BaseCheckBoxV2 } from 'app/components/BaseCheckBoxV2';
import BaseButton from 'app/components/common/BaseButton';
import Steps from '../components/Steps';

const sizeWrapper = {
  maxWidth: 1050,
};
const RegisterThree = () => {
  return (
    <RegisterWrapper>
      <S.RegisterThreeWrapper>
        <Container>
          <Heading title="会員登録" icon={<Document />} />
          <Steps />
          <RegisterFormWrapper
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: '100%' }}
            labelAlign="left"
          >
            <FieldWrapper {...sizeWrapper}>
              <RegisterFormWrapper.Item label="経験社数※">
                <BaseSelect placeholder="1 社" />
              </RegisterFormWrapper.Item>
            </FieldWrapper>
            <TitleFields title="直近の職務経歴" />
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
              <RegisterFormWrapper.Item
                className="date-picker"
                label="企業名"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <RegisterFormWrapper.Item
                  name="year"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    marginRight: '8px',
                    marginBottom: '0',
                  }}
                >
                  <BaseSelect />
                </RegisterFormWrapper.Item>
                <RegisterFormWrapper.Item
                  name="month"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    marginLeft: '8px',
                    marginBottom: '0',
                  }}
                >
                  <BaseSelect />
                </RegisterFormWrapper.Item>
              </RegisterFormWrapper.Item>
            </FieldWrapper>
            <RegisterFormWrapper.Item
              label="職務内容"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
            >
              <BaseInput.TextArea
                placeholder="職務内容を入力してください。"
                rows={5}
              />
            </RegisterFormWrapper.Item>
            <RegisterFormWrapper.Item label={false} wrapperCol={{ span: 24 }}>
              <BaseButton type="primary" className="btn-register-step">
                次のステップ
              </BaseButton>
            </RegisterFormWrapper.Item>
          </RegisterFormWrapper>
        </Container>
      </S.RegisterThreeWrapper>
    </RegisterWrapper>
  );
};

export default RegisterThree;
