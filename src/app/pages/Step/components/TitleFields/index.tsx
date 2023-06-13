import React from 'react';
import * as S from './TitleFields.styles';

const TitleFields = ({ title }: { title: string }) => {
  return <S.TitleFieldsWrapper>{title}</S.TitleFieldsWrapper>;
};

export default TitleFields;
