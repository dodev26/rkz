import styled from 'styled-components';
import { media } from 'styles/media';

export const CardWhyChooseWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ElipseWithIcon = styled.div`
  /* width: 198px;
  height: 198px; */
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme._backgroundTertiary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconInElipse = styled.img`
  height: 98px;
  width: 91px;
  object-fit: cover;
`;

export const TitleCardEclipse = styled.h3`
  min-height: 50px;
  max-width: 247px;
  font-family: inherit;
  font-style: inherit;
  text-align: center;
  font-weight: 900;
  font-size: 18px;
  line-height: 25px;
  margin-top: 20px;
  color: ${({ theme }) => theme._textColorPrimary};
  ${media.xl} {
    margin-top: 29px;
  }
`;

export const DescCardEclipse = styled.p`
  max-width: 260px;
  word-break: break-word;
  font-family: inherit;
  font-style: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(20 / 14);
  text-align: center;
  color: ${({ theme }) => theme._textMutedLight};
  margin-top: 20px;
  ${media.xl} {
    margin-top: 22px;
    font-size: 18px;
    line-height: calc(25 / 18);
    max-width: 331px;
  }
`;
