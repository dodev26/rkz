import React from 'react';
import * as S from './BaseButton.styles';
import { ButtonProps as AntButtonProps, Button as AntdButton } from 'antd';

export const { Group: ButtonGroup } = AntdButton;

export interface BaseButtonProps extends AntButtonProps {
  noStyle?: boolean;
  typeAdded?: string;
}

const BaseButton = React.forwardRef<HTMLElement, BaseButtonProps>(
  ({ className, children, noStyle, typeAdded, type, ...props }, ref) => (
    <S.Button
      ref={ref}
      className={className}
      type={type}
      $noStyle={noStyle}
      $typeAdded={typeAdded}
      {...props}
    >
      {children}
    </S.Button>
  ),
);

export default BaseButton;
