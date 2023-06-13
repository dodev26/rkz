import React from 'react';
import { CheckboxProps } from 'antd';
import * as S from './BaseCheckBoxV2.styles';

export type BaseCheckboxProps = CheckboxProps;

interface BaseCheckboxInterface extends React.FC<BaseCheckboxProps> {
  Group: typeof S.CheckboxGroup;
}

export const BaseCheckBoxV2: BaseCheckboxInterface = props => {
  return <S.Checkbox {...props} />;
};

BaseCheckBoxV2.Group = S.CheckboxGroup;
