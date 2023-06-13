import { BaseTabs } from 'app/components/common/BaseTabs';
import styled from 'styled-components';
import { media } from 'styles/media';

export const MessagePageWrapper = styled.div`
  padding: 31px 0px 82px 0px;
  width: 100%;
`;

export const MessageTabs = styled(BaseTabs)`
  &.ant-tabs {
    & > .ant-tabs-nav {
      margin: unset;
      & > .ant-tabs-nav-wrap {
        width: 100%;
        & > .ant-tabs-nav-list {
          display: flex;
          justify-content: space-between;
          width: 100%;
          & > .ant-tabs-tab {
            flex: 1;
            margin: 0;
            border-bottom: 6px solid #072d75;
            & > .ant-tabs-tab-btn {
              width: 100%;
              text-align: center;
            }
          }
          & > .ant-tabs-ink-bar {
            background: #20c48d;
            height: 6px;
          }
        }
      }
    }

    .ant-tabs-tab {
      font-weight: 700;
      font-size: 14px;
      color: #272d4e;
      ${media.md} {
        font-size: 24px;
        line-height: 40px;
        font-size: 16px;
        line-height: 30px;
      }
      ${media.xl} {
        font-size: 24px;
        line-height: 40px;
      }
      &.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: #20c48d;
      }
    }
    & > .ant-tabs-content-holder {
      & > .ant-tabs-content {
        padding: 20px;
        background: #ffffff;
        border: 2px solid #dce5f2;
        border-radius: 0px 0px 20px 20px;
      }
    }
  }
`;
