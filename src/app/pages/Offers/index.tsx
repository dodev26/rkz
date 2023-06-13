import React from 'react';
import * as S from './Offers.styles';
import { Container } from 'styles/global-styles';
import { ATTACHNOBG, Attach, Document, New } from 'app/assets';
import Heading from 'app/components/Heading';
import CardOffer from './components/CardOffer';
import { BaseRow } from 'app/components/common/BaseRow';
import { BaseCol } from 'app/components/common/BaseCol';

const Offers = () => {
  return (
    <S.OfferWrapper>
      <Container>
        <Heading title="転職・求人情報一覧" icon={<Document />} />
        <S.NewOfferWrapper>
          <S.NewOfferContentWrapper>
            <S.NewOfferTitle>
              <New />
              <h3>
                Organization Development Sales And Executive Coach (Account
                Leader Candidate
              </h3>
            </S.NewOfferTitle>
            <span className="name-company">Foreign company</span>
            <S.Tag>headhunter</S.Tag>
          </S.NewOfferContentWrapper>
          <hr />
          <S.FooterSalary>年収: 10000.00万円 ~ 50000.00万円</S.FooterSalary>
          <S.AttchBtn
            className="attach-btn-mobile"
            icon={<ATTACHNOBG />}
            htmlType="button"
            typeAdded="secondary"
          />

          <S.AttchBtn
            icon={<ATTACHNOBG />}
            htmlType="button"
            typeAdded="secondary"
          >
            気になる
          </S.AttchBtn>
        </S.NewOfferWrapper>
        <BaseRow gutter={[0, 32]} style={{ marginTop: '41px' }}>
          <BaseCol span={24}>
            <CardOffer />
          </BaseCol>
          <BaseCol span={24}>
            <CardOffer />
          </BaseCol>
          <BaseCol span={24}>
            <CardOffer />
          </BaseCol>
        </BaseRow>
      </Container>
    </S.OfferWrapper>
  );
};

export default Offers;
