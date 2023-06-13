import React from 'react';
import * as S from './RegisterSeven.styles';
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
const RegisterSeven = () => {
  const [form] = RegisterFormWrapper.useForm();
  const navigate = useNavigate();
  const onRegister = () => {
    navigate('/');
  };
  return (
    <RegisterWrapper>
      <S.RegisterSevenWrapper>
        <Container>
          <Heading title="会員登録" icon={<Document />} />
          <Steps />
          <RegisterFormWrapper
            form={form}
            onFinish={onRegister}
            className="form-register-five"
          >
            <FieldWrapper className="wraptext-container">
              <h3>リクルートダイレクトスカウトのレジュメが完成しました。</h3>
              <div>
                続いて、現在の勤務先や関連会社など、あなたの会員情報(*)を公開したくない企業を設定しましょう。{' '}
                <br />
                (*)会員情報：レジュメの非公開情報以外の情報および利用履歴
              </div>
              <RegisterFormWrapper.Item>
                <BaseButton
                  htmlType="submit"
                  className="btn-register-step"
                  type="primary"
                >
                  企業ブロック設定はこちら
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
                },
                {
                  title: '職種',
                  dataIndex: 'job',
                  key: 'job',
                  align: 'center',
                },
              ]}
              scroll={{ x: 600 }}
            />
          </S.TableWrapper>
        </Container>
      </S.RegisterSevenWrapper>
      ;
    </RegisterWrapper>
  );
};

export default RegisterSeven;
