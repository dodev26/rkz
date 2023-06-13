import React from 'react';
import * as S from './Heading.styles';

interface IHeading {
  icon?: React.ReactNode | JSX.Element;
  title: string;
}
const Heading: React.FC<IHeading> = ({ icon, title }) => {
  return (
    <S.Heading>
      {icon && <S.Icon>{icon}</S.Icon>}
      <S.Title>{title}</S.Title>
    </S.Heading>
  );
};

export default Heading;
