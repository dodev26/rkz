import React from 'react';
import * as S from './Steps.styles';
import { BaseRow } from 'app/components/common/BaseRow';
import { BaseCol } from 'app/components/common/BaseCol';
import classNames from 'classnames';

const STEP: {
  id: number;
  title: string | JSX.Element;
  isActive: boolean;
}[] = [
  {
    id: 1,
    title: '1',
    isActive: true,
  },
  {
    id: 2,
    title: '2',
    isActive: true,
  },
  {
    id: 3,
    title: '3',
    isActive: false,
  },
  {
    id: 3,
    title: '*',
    isActive: false,
  },
  {
    id: 4,
    title: '5',
    isActive: false,
  },
];
const Steps = () => {
  return (
    <S.StepWrapper>
      {STEP.map(item => (
        <S.Step
          key={item.id}
          className={classNames('', {
            active: item.isActive,
          })}
        >
          {item.title}
        </S.Step>
      ))}
    </S.StepWrapper>
  );
};

export default Steps;
