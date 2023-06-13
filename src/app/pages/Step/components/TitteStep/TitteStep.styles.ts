import styled from 'styled-components';

export const TitleStep = styled.h1`
  font-family: inherit;
  font-weight: 900;
  font-size: 32px;
  line-height: 70px;
  color: ${({ theme }) => theme._textColorPrimary};
  display: flex;
  align-items: center;
  column-gap: 21px;
`;
