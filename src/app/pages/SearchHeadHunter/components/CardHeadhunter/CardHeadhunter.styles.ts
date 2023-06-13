import styled from 'styled-components';
import { media } from 'styles/media';

export const CardHeadhunterWrapper = styled.article`
  padding: 30px 15px 40px;
  background: ${({ theme }) => theme._backgroundSixth};
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  column-gap: 30px;
  row-gap: 20px;
  .btn-attach-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -22px;
    right: -10px;
    ${media.md} {
      display: none;
    }
  }

  ${media.xl} {
    flex-direction: row;
    padding: 40px 28px 60px;
  }
`;

export const AvatarWrapper = styled.div`
  overflow: hidden;
  position: relative;
  ${media.md} {
    max-width: 230px;
    height: 200px;
  }
  ${media.xl} {
    max-width: 319px;
    height: 293px;
  }
  & > img {
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme._borderQuinary};
    border-radius: 20px;
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContentCard = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
  column-gap: 30px;
  flex-direction: column;

  ${media.xl} {
    flex-direction: row;
  }
`;

export const ButtonWrapper = styled.div`
  display: none;
  ${media.md} {
    display: flex;
    flex: 0 0 130px;
  }
  ${media.xl} {
    flex: 0 0 247px;
  }
  &.desc-btn-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    row-gap: 18px;
  }
`;
export const HeaderCard = styled.div`
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(7, 45, 117, 0.26);
  display: flex;
  justify-content: space-between;
  column-gap: 20px;

  & > div {
    max-width: 700px;
    & > h3 {
      font-weight: 700;
      line-height: 20px;
      color: #072d75;
      font-size: 20px;
      ${media.md} {
        font-size: 24px;
      }
      ${media.xl} {
        font-size: 32px;
      }
    }
    & > span {
      font-weight: 500;
      font-size: 20px;
      line-height: 40px;
      color: #6f757b;
    }
  }
`;

export const DescriptionCard = styled.div`
  flex: 0 1 100%;
`;

export const RowDsc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  color: #6f757b;
  ${media.md} {
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(7, 45, 117, 0.26);
  }
  ${media.xl} {
    padding-bottom: unset;
    border-bottom: unset;
  }
`;
export const colDsc = styled.div`
  flex: 0 1 100%;
  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    & > li {
      font-size: 16px;
      line-height: 30px;
      color: #6f757b;
    }
  }
`;
