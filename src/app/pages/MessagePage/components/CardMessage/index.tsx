import React from 'react';
import * as S from './CardMessage.styles';
import { Avatar } from 'antd';
import { WOOMAN } from 'app/assets';
import classNames from 'classnames';
interface ICardMessageProps {
  avatar: string;
  subject: string;
  message: string;
  number: number;
}
const CardMessage: React.FC<ICardMessageProps> = ({
  avatar,
  message,
  number,
  subject,
}) => {
  return (
    <S.CardMessageWrapper
      to="/"
      className={classNames('message-wrapper', {
        'has-new': number > 0,
      })}
    >
      <S.LayoutMessage>
        <Avatar
          className="avatar-user"
          size={{
            xs: 50,
            sm: 60,
            md: 60,
            lg: 70,
            xl: 90,
            xxl: 90,
          }}
          src={avatar}
        />
        <S.MessageContent>
          <S.Subject>{subject}</S.Subject>
          <S.Message>{message}</S.Message>
        </S.MessageContent>
      </S.LayoutMessage>
      {number > 0 && <S.Badge>{number}</S.Badge>}
    </S.CardMessageWrapper>
  );
};

export default CardMessage;
