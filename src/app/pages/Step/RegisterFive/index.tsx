import React from 'react';
import * as S from './RegisterFive.styles';
import {
  FieldWrapper,
  RegisterFormWrapper,
  RegisterWrapper,
} from '../ReigsterStep.styles';
import { Container } from 'styles/global-styles';
import Heading from 'app/components/Heading';
import { Document } from 'app/assets';
import BaseButton from 'app/components/common/BaseButton';
import { Table } from 'antd';
import Steps from '../components/Steps';
import { useNavigate } from 'react-router-dom';

const DataTable = [
  {
    key: '0',
    position: '【IT転職支援歴10年以上】プロフェッショナ...',
    salary: '500万円 〜 700万円',
    job: '経営企画・戦略 / 商品企画/...',
  },
  {
    key: '1',
    position: '【IT転職支援歴10年以上】プロフェッショナ...',
    salary: '500万円 〜 700万円',
    job: '経営企画・戦略 / 商品企画/...',
  },
  {
    key: '2',
    position: '【IT転職支援歴10年以上】プロフェッショナ...',
    salary: '500万円 〜 700万円',
    job: '経営企画・戦略 / 商品企画/...',
  },
  {
    key: '3',
    position: '【IT転職支援歴10年以上】プロフェッショナ...',
    salary: '500万円 〜 700万円',
    job: '経営企画・戦略 / 商品企画/...',
  },
  {
    key: '4',
    position: '【IT転職支援歴10年以上】プロフェッショナ...',
    salary: '500万円 〜 700万円',
    job: '経営企画・戦略 / 商品企画/...',
  },
  {
    key: '5',
    position: '【IT転職支援歴10年以上】プロフェッショナ...',
    salary: '500万円 〜 700万円',
    job: '経営企画・戦略 / 商品企画/...',
  },
];
const RegisterFive = () => {
  const [form] = RegisterFormWrapper.useForm();
  const navigate = useNavigate();
  const onRegister = () => {
    navigate('/r6');
  };
  return (
    <RegisterWrapper>
      <S.RegisterFiveWrapper>
        <Container>
          <Heading title="会員登録" icon={<Document />} />
          <Steps />
          <RegisterFormWrapper
            className="form-register-five"
            form={form}
            onFinish={onRegister}
          >
            <FieldWrapper className="wraptext-container">
              <h3>
                リクルートダイレクトスカウトをご利用いただけるようになりました。
              </h3>
              <div>
                引き続き、過去の職務経歴や保有資格などの情報を登録いただくと
                <br />
                より、あなたに合ったスカウトが届きやすくなります
              </div>
              <RegisterFormWrapper.Item>
                <BaseButton
                  htmlType="submit"
                  className="btn-register-step"
                  type="primary"
                >
                  レジュメ登録を続ける
                </BaseButton>
              </RegisterFormWrapper.Item>
            </FieldWrapper>
          </RegisterFormWrapper>
          <S.TitleTable>あなたの経歴に近い求人</S.TitleTable>
          <S.TableWrapper>
            <Table
              style={{ maxWidth: '100%' }}
              pagination={false}
              dataSource={DataTable}
              columns={[
                {
                  title: 'ポジション',
                  dataIndex: 'position',
                  key: 'position',
                  align: 'center',
                  width: 400,
                },
                {
                  title: '年収',
                  dataIndex: 'salary',
                  key: 'salary',
                  align: 'center',
                  width: 300,
                },
                {
                  title: '職種',
                  dataIndex: 'job',
                  key: 'job',
                  align: 'center',
                  width: 300,
                },
              ]}
              scroll={{ x: 600 }}
            />
          </S.TableWrapper>
        </Container>
      </S.RegisterFiveWrapper>
    </RegisterWrapper>
  );
};

export default RegisterFive;
