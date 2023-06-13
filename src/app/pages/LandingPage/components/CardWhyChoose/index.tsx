import { BaseCol } from 'app/components/common/BaseCol';
import * as S from './CardWhyChoose.styles';

interface ICardWhyChoose {
  img: string;
  title: string;
  desc: string;
}
const CardWhyChoose: React.FC<ICardWhyChoose> = ({ desc, img, title }) => {
  return (
    <BaseCol xs={24} sm={12} lg={6}>
      <S.CardWhyChooseWrapper>
        <S.ElipseWithIcon>
          <S.IconInElipse src={img} alt={title} />
        </S.ElipseWithIcon>
        <S.TitleCardEclipse>{title}</S.TitleCardEclipse>
        <S.DescCardEclipse>{desc}</S.DescCardEclipse>
      </S.CardWhyChooseWrapper>
    </BaseCol>
  );
};
export default CardWhyChoose;
