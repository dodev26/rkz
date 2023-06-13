import React from 'react';
import * as S from './CardOffer.styles';
import { Link } from 'react-router-dom';
const CardOffer = () => {
  return (
    <S.CardOfferWrapper>
      <S.RowOffer className="row-content-offer">
        <S.ColOffer className="col-title">勤務地</S.ColOffer>
        <S.ColOffer className="col-content">
          none
          <Link to="/" className="btn-see-detail">
            詳しく見る
          </Link>
        </S.ColOffer>
      </S.RowOffer>
      <S.RowOffer className="row-content-offer">
        <S.ColOffer className="col-title">industry</S.ColOffer>
        <S.ColOffer className="col-content">
          "This position is expected to actively participate in the management
          of our company by becoming
        </S.ColOffer>
      </S.RowOffer>
      <S.RowOffer className="row-content-offer">
        <S.ColOffer className="col-title">業種</S.ColOffer>
        <S.ColOffer className="col-content">
          "This position is expected to actively participate in the management
          of our company by becoming
        </S.ColOffer>
      </S.RowOffer>
      <S.RowOffer className="row-content-offer">
        <S.ColOffer className="col-title">職種</S.ColOffer>
        <S.ColOffer className="col-content">
          "This position is expected to actively participate in the management
          of our company by becoming
        </S.ColOffer>
      </S.RowOffer>
      <S.RowOffer className="row-content-offer">
        <S.ColOffer className="col-title">仕事内容</S.ColOffer>
        <S.ColOffer className="col-content">
          "This position is expected to actively participate in the management
          of our company by becoming
        </S.ColOffer>
      </S.RowOffer>
      <S.RowOffer className="row-content-offer">
        <S.ColOffer className="col-title">必要な 経験・能力</S.ColOffer>
        <S.ColOffer className="col-content">
          "This position is expected to actively participate in the management
          of our company by becoming
        </S.ColOffer>
      </S.RowOffer>
      <S.RowOffer className="row-content-offer">
        <S.ColOffer className="col-title"></S.ColOffer>
        <S.ColOffer className="col-content">
          掲載開始日: 2023/05/26 情報更新日: 2023/05/26
        </S.ColOffer>
      </S.RowOffer>
    </S.CardOfferWrapper>
  );
};

export default CardOffer;
