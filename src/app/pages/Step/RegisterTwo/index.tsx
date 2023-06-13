import { Container } from 'styles/global-styles';
import Heading from 'app/components/Heading';
import * as S from './RegisterTwo.styles';
import { Document } from 'app/assets';
import TitleFields from '../components/TitleFields';
import { BaseSelect } from 'app/components/common/BaseSelect';
import { BaseInput } from 'app/components/common/BaseInput';
import BaseButton from 'app/components/common/BaseButton';
import {
  FieldWrapper,
  RegisterFormWrapper,
  RegisterWrapper,
} from '../ReigsterStep.styles';
import Steps from '../components/Steps';

const sizeWrapper = {
  maxWidth: 1050,
};
const RegisterTwo = () => {
  return (
    <RegisterWrapper>
      <S.RegisterTwoWrapper>
        <Container>
          <Heading title="会員登録" icon={<Document />} />
          <Steps />
          <RegisterFormWrapper
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: '100%' }}
            labelAlign="left"
            className="register-form-two"
          >
            <TitleFields title="学歴" />
            <FieldWrapper {...sizeWrapper}>
              <RegisterFormWrapper.Item
                label="経験社数"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <BaseSelect placeholder="大学院卒業（博士" />
              </RegisterFormWrapper.Item>
              <RegisterFormWrapper.Item
                label="企業名"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <BaseInput placeholder="企業名" />
              </RegisterFormWrapper.Item>
              <RegisterFormWrapper.Item
                label="企業名"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <BaseInput placeholder="○○学部○○専攻" />
              </RegisterFormWrapper.Item>
              <RegisterFormWrapper.Item
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
              <RegisterFormWrapper.Item
                label="企業名"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <BaseInput placeholder="備考" />
              </RegisterFormWrapper.Item>
            </FieldWrapper>
            <TitleFields title="学歴" />
            <FieldWrapper {...sizeWrapper}>
              <RegisterFormWrapper.Item
                label="経験社数"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <BaseSelect placeholder="ネイティブ レベル" />
              </RegisterFormWrapper.Item>
            </FieldWrapper>
            <TitleFields title="学歴" />
            <FieldWrapper {...sizeWrapper}>
              <RegisterFormWrapper.Item
                label="経験社数"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <BaseInput width={300} />
              </RegisterFormWrapper.Item>
            </FieldWrapper>
            <RegisterFormWrapper.Item label={false} wrapperCol={{ span: 24 }}>
              <BaseButton type="primary" className="btn-register-step">
                次のステップ
              </BaseButton>
            </RegisterFormWrapper.Item>
          </RegisterFormWrapper>
        </Container>
      </S.RegisterTwoWrapper>
    </RegisterWrapper>
  );
};

export default RegisterTwo;
