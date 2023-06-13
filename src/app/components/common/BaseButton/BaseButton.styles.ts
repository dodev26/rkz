import { Button as AntButton } from 'antd';
import styled, { css } from 'styled-components';

interface IButton {
  $noStyle?: boolean;
  $typeAdded?: string;
}
export const Button = styled(AntButton)<IButton>`
  &.ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    border-radius: 50px;
    font-weight: 700;
    font-size: 16px;
    width: 100%;
    line-height: 20px;
    font-family: 'Montserrat';
    height: 47px;
    padding: 15px;
    font-style: normal;

    ${props =>
      props.$noStyle &&
      css`
        width: unset;
        padding: 0;
        height: unset;
      `}
    ${props =>
      css`
        ${!props.type &&
        css`
          border: 2px solid ${props => props.theme._borderSecondary};
          color: ${props => props.theme._text};
        `}
        ${!props.type &&
        !props.danger &&
        props.$typeAdded === 'secondary' &&
        css`
          background: ${props => props.theme._backgroundComponentTertiary};
          color: ${props => props.theme._textSecondary};
          &:hover {
            background: ${props => props.theme._backgroundSixth};
            & > .ant-btn-icon {
              & > svg {
                stroke: #4096ff;
              }
            }
          }
        `}
        ${!props.danger &&
        props.type === 'primary' &&
        css`
          background: ${props => props.theme._backgroundComponentSecondary};
        `}
      `}
  }
`;
