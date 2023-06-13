import React from 'react';
import * as S from './CardHeadhunter.styles';
import { ATTACHNOBG, IMAGE1 } from 'app/assets';
import BaseButton from 'app/components/common/BaseButton';
const CardHeadhunter = () => {
  return (
    <S.CardHeadhunterWrapper>
      <S.AvatarWrapper>
        <img src={IMAGE1} alt="img" />
      </S.AvatarWrapper>
      <S.ContentWrapper>
        <S.HeaderCard>
          <div>
            <h3>baptest-head-hunter</h3>
            <span>abc</span>
          </div>
          <S.ButtonWrapper>
            <BaseButton icon={<ATTACHNOBG />} typeAdded="secondary">
              気になる
            </BaseButton>
          </S.ButtonWrapper>
        </S.HeaderCard>
        <S.ContentCard>
          <S.DescriptionCard>
            <S.RowDsc>
              <S.colDsc>
                <ul>
                  <li>baptest</li>
                  <li>経験年数 : 3年未満</li>
                  <li>業界 : </li>
                  <li>職業 :</li>
                </ul>
              </S.colDsc>
              <S.colDsc>
                <ul>
                  <li>勤務地 : 北海道</li>
                </ul>
              </S.colDsc>
            </S.RowDsc>
          </S.DescriptionCard>
          <S.ButtonWrapper className="desc-btn-group">
            <BaseButton>続きを見る</BaseButton>
            <BaseButton>仕事の機会を見る</BaseButton>
          </S.ButtonWrapper>
        </S.ContentCard>
      </S.ContentWrapper>
    </S.CardHeadhunterWrapper>
  );
};

export default CardHeadhunter;
