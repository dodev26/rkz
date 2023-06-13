import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'styles/media';

export const CardMessageWrapper = styled(Link)`
  display: block;
  padding: 15px 35px 15px 10px;
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
  position: relative;
  border: 1px solid #dce5f2;

  &.has-new {
    background: #f2f6fc;
    border: none;
  }
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const LayoutMessage = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  .avatar-user {
    flex: 0 0 50px;
    border: 1px solid #20c48d;
    ${media.sm} {
      flex: 0 0 60px;
    }
    ${media.lg} {
      flex: 0 0 70px;
    }
    ${media.xl} {
      flex: 0 0 90px;
    }
  }
`;
export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Subject = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  color: #272d4e;
  margin-bottom: 8px;
`;

export const Message = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #6f757b;
  padding-right: 10px;
  ${media.xl} {
    font-size: 20px;
    line-height: 25px;
  }
`;

export const Badge = styled.span`
  width: 25px;
  position: absolute;
  height: 25px;
  border-radius: 100rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #20c48d;
  color: #ffffff;
  font-weight: 500;
  font-size: 12px;
  top: -10px;
  right: -10px;
  ${media.sm} {
    width: 44px;
    height: 44px;
    top: 50%;
    font-size: 20px;
    right: 10px;
    transform: translateY(-50%);
  }
`;
