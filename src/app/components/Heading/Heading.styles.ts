import styled from 'styled-components';
import { media } from 'styles/media';

export const Heading = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
export const Icon = styled.span``;
export const Title = styled.h2`
  font-weight: 700;
  /* font-size: 25px;
  line-height: 40px; */
  font-size: 22px;
  line-height: 32px;
  color: #072d75;
  ${media.xl} {
    font-size: 25px;
    line-height: 40px;
  }
`;
