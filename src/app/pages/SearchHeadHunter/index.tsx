import React from 'react';
import { Container } from 'styles/global-styles';
import Heading from 'app/components/Heading';
import { Attach, SEARCH } from 'app/assets';
import * as S from './SearchHeadHunter.styles';
import { BaseCol } from 'app/components/common/BaseCol';
import { BaseRow } from 'app/components/common/BaseRow';
import { BaseSelect } from 'app/components/common/BaseSelect';
import CardHeadhunter from './components/CardHeadhunter';
import { uniqueId } from 'lodash';
import { BaseRadio } from 'app/components/common/BaseRadio';
import BaseButton from 'app/components/common/BaseButton';
const layout = {
  col: {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 12,
    xl: 12,
  },
  formItem: {
    labelCol: {
      xs: 24,
      sm: 24,
      md: 4,
      lg: 24,
      xl: 4,
    },
    wrapperCol: {
      xs: 24,
      sm: 24,
      md: 20,
      lg: 24,
      xl: 20,
    },
  },
};
const SearchHeadHunter = () => {
  const [form] = S.FormSearchHeadHunter.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  return (
    <S.SearchHeadHunterWrapper>
      <Container>
        <Heading title="ヘッドハンター検索" icon={<SEARCH />} />
        <S.FormSearchHeadHunter
          form={form}
          onFinish={onFinish}
          labelAlign="left"
        >
          <BaseRow gutter={[148, 0]}>
            <BaseCol {...layout.col}>
              <S.FormSearchHeadHunter.Item
                name="field1"
                label="業界"
                labelCol={{ xs: 24, sm: 4, lg: 8 }}
                wrapperCol={{ xs: 24, sm: 20, lg: 16 }}
              >
                <BaseSelect />
              </S.FormSearchHeadHunter.Item>
            </BaseCol>
            <BaseCol {...layout.col}>
              <S.FormSearchHeadHunter.Item
                name="field2"
                label="経験年数"
                labelCol={{ xs: 24, sm: 4, lg: 8 }}
                wrapperCol={{ xs: 24, sm: 20, lg: 16 }}
              >
                <BaseSelect />
              </S.FormSearchHeadHunter.Item>
            </BaseCol>
            <BaseCol {...layout.col}>
              <S.FormSearchHeadHunter.Item
                name="field3"
                label="勤務地"
                labelCol={{ xs: 24, sm: 4, lg: 8 }}
                wrapperCol={{ xs: 24, sm: 20, lg: 16 }}
              >
                <BaseSelect />
              </S.FormSearchHeadHunter.Item>
            </BaseCol>
            <BaseCol {...layout.col}>
              <S.FormSearchHeadHunter.Item
                name="field4"
                label="職業"
                labelCol={{ xs: 24, sm: 4, lg: 8 }}
                wrapperCol={{ xs: 24, sm: 20, lg: 16 }}
              >
                <BaseSelect />
              </S.FormSearchHeadHunter.Item>
            </BaseCol>
            <BaseCol {...layout.col}>
              <S.FormSearchHeadHunter.Item
                name="field5"
                label="フリーワード"
                labelCol={{ xs: 24, sm: 4, lg: 8 }}
                wrapperCol={{ xs: 24, sm: 20, lg: 16 }}
              >
                <BaseSelect />
              </S.FormSearchHeadHunter.Item>
            </BaseCol>
            <BaseCol {...layout.col}>
              <S.FormSearchHeadHunter.Item label={false} className="last-col">
                <S.FormSearchHeadHunter.Item
                  name="year"
                  wrapperCol={{
                    span: 24,
                  }}
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    marginBottom: '0px',
                  }}
                >
                  <BaseRadio.Group>
                    <BaseRadio value={1}>と </BaseRadio>
                    <BaseRadio value={2}>または</BaseRadio>
                  </BaseRadio.Group>
                </S.FormSearchHeadHunter.Item>
                <S.FormSearchHeadHunter.Item
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0 8px',
                  }}
                >
                  <BaseButton type="primary" htmlType="submit">
                    検索
                  </BaseButton>
                </S.FormSearchHeadHunter.Item>
              </S.FormSearchHeadHunter.Item>
            </BaseCol>
          </BaseRow>
        </S.FormSearchHeadHunter>
        <S.ListCardHeadHunter>
          {Array(4)
            .fill(0)
            .map(_ => (
              <CardHeadhunter key={uniqueId()} />
            ))}
        </S.ListCardHeadHunter>
      </Container>
    </S.SearchHeadHunterWrapper>
  );
};

export default SearchHeadHunter;
