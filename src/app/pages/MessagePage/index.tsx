import React from 'react';
import * as S from './MessagePage.styles';
import { Container } from 'styles/global-styles';
import Heading from 'app/components/Heading';
import { Message, WOOMAN } from 'app/assets';
import { TabsProps } from 'antd';
import CardMessage from './components/CardMessage';

const FakeMessages = [
  {
    id: 1,
    avatar: WOOMAN,
    subject: '受信箱 受信箱',
    message:
      'This position is expected to actively participate in the management of our company by becoming.....',
    new: 1,
  },
  {
    id: 2,
    avatar: WOOMAN,
    subject: '受信箱 受信箱',
    message:
      'This position is expected to actively participate in the management of our company by becoming.....',
    new: 1,
  },
  {
    id: 3,
    avatar: WOOMAN,
    subject: '受信箱 受信箱',
    message:
      'This position is expected to actively participate in the management of our company by becoming.....',
    new: 1,
  },
  {
    id: 4,
    avatar: WOOMAN,
    subject: '受信箱 受信箱',
    message:
      'This position is expected to actively participate in the management of our company by becoming.....',
    new: 1,
  },
  {
    id: 5,
    avatar: WOOMAN,
    subject: '受信箱 受信箱',
    message:
      'This position is expected to actively participate in the management of our company by becoming.....',
    new: 0,
  },
  {
    id: 6,
    avatar: WOOMAN,
    subject: '受信箱 受信箱',
    message:
      'This position is expected to actively participate in the management of our company by becoming.....',
    new: 0,
  },
  {
    id: 7,
    avatar: WOOMAN,
    subject: '受信箱 受信箱',
    message:
      'This position is expected to actively participate in the management of our company by becoming.....',
    new: 0,
  },
  {
    id: 8,
    avatar: WOOMAN,
    subject: '受信箱 受信箱',
    message:
      'This position is expected to actively participate in the management of our company by becoming.....',
    new: 0,
  },
  {
    id: 9,
    avatar: WOOMAN,
    subject: '受信箱 受信箱',
    message:
      'This position is expected to actively participate in the management of our company by becoming.....',
    new: 0,
  },
  {
    id: 10,
    avatar: WOOMAN,
    subject: '受信箱 受信箱',
    message:
      'This position is expected to actively participate in the management of our company by becoming.....',
    new: 0,
  },
];

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `受信箱`,
    children: FakeMessages.map(mess => (
      <>
        <CardMessage
          avatar={mess.avatar}
          message={mess.message}
          subject={mess.subject}
          number={mess.new}
          key={new Date().getTime()}
        />
      </>
    )),
  },
  {
    key: '2',
    label: `未読`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `未返信`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: '4',
    label: `アンケート 未回答`,
    children: `Content of Tab Pane 4`,
  },
];
const MessagePage = () => {
  return (
    <S.MessagePageWrapper>
      <Container>
        <Heading title="Message" icon={<Message />} />
        <S.MessageTabs items={items} />
      </Container>
    </S.MessagePageWrapper>
  );
};

export default MessagePage;
