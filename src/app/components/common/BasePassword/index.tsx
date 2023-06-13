import React from 'react';
import * as S from './BasePassword.styles';
import { BaseInputProps, BaseInputRef } from '../BaseInput';

interface InputPasswordProps extends BaseInputProps {
  className?: string;
  visibilityToggle?: boolean;
  iconRender?: (open: boolean) => React.ReactNode;
}

export const InputPassword = React.forwardRef<BaseInputRef, InputPasswordProps>(
  ({ className, children, ...props }, ref) => (
    <S.InputPassword ref={ref} className={className} {...props}>
      {children}
    </S.InputPassword>
  ),
);
