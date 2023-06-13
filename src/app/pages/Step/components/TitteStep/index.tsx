import React from 'react';
import * as S from './TitteStep.styles';
import { Document } from 'app/assets';

interface ITitleStep {
  title: string;
}
const TitteStep: React.FC<ITitleStep> = ({ title }) => {
  return (
    <S.TitleStep>
      <Document />

      {title}
    </S.TitleStep>
  );
};

export default TitteStep;
