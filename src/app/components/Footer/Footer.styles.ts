import styled from 'styled-components';
import { BaseRow as AntRow } from 'app/components/common/BaseRow';
import { media } from 'styles/media';

export const FotterWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0px;
  background-color: ${({ theme }) => theme._backgroundTertiary};
`;

export const FooterGroupLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLogo = styled.h2`
  font-family: inherit;
  font-style: inherit;
  color: ${({ theme }) => theme._textSecondary};
  font-weight: 700;
  font-size: 25px;
  line-height: 49px;
  ${media.xl} {
    font-size: 40px;
  }
`;

export const FooterHelpText = styled.span`
  font-family: inherit;
  font-style: italic;
  font-weight: 200;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme._textColorSecondary};
  ${media.xl} {
    font-size: 20px;
  }
`;

export const RowListLinkFooter = styled(AntRow)`
  width: 100%;
  margin-top: 30px;
  row-gap: 30px;
  ${media.lg} {
    row-gap: unset;
  }
  ${media.xl} {
    row-gap: 34px;
  }
`;

export const TitleListLinkFooter = styled.h3`
  font-family: inherit;
  font-style: inherit;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  text-transform: uppercase;
  color: ${({ theme }) => theme._textSecondary};
`;
export const ListLink = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  row-gap: 5px;
  color: ${({ theme }) => theme._textSecondary};
`;

export const LinkItem = styled.li`
  font-family: inherit;
  font-style: inherit;
  color: inherit;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
`;

export const TextFooter = styled.div`
  font-family: inherit;
  font-style: inherit;
  font-weight: 500;
  color: ${({ theme }) => theme._textColorSecondary};
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  margin-top: 73px;
`;
