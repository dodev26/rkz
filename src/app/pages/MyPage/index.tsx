import React from 'react';
import * as S from './MyPage.styles';
import { Container } from 'styles/global-styles';
import { Link } from 'react-router-dom';
import Heading from 'app/components/Heading';
import {
  Attach,
  DIRECT_MESS,
  DONESTEPS,
  FIND_DOCUMENT,
  Message,
  SETTINGS,
  USER_CIRCLE,
  USER_DOCUMENT,
} from 'app/assets';
import { BaseRow } from 'app/components/common/BaseRow';
import { BaseCol } from 'app/components/common/BaseCol';

const TEXT_ICON = [
  {
    icon: USER_DOCUMENT,
    text: '会員レジュメの確認・編集',
  },
  {
    icon: USER_CIRCLE,
    text: 'ヘッドハンターの検索 相談',
  },
  {
    icon: FIND_DOCUMENT,
    text: '求人情報の検索・応募依頼',
  },
  {
    icon: DIRECT_MESS,
    text: 'メッセージの確認 返信',
  },
  {
    icon: SETTINGS,
    text: '各種設定情報の確認・編集',
  },
];
const MyPage = () => {
  return (
    <S.MyPageWrapper>
      <Container>
        <S.TextBgPink className="top">
          レジュメ内容が少ないため、経験にあったスカウトが届きにくくなっています。{' '}
          <Link to="/"> 更新する </Link> <br />
          0通 の未読メッセージがあります。 <Link to="/">確認する</Link>
        </S.TextBgPink>
        <S.BoxWrapper>
          <Heading title="未読メッセージ" icon={<Message />} />
          <S.TableAntdCustom
            pagination={false}
            columns={[
              {
                title: '受信日時',
                dataIndex: 'date',
                key: 'date',
                render: (text: string) => <span>{text}</span>,
                width: '33.33%',
                align: 'center',
              },
              {
                title: '差出人',
                dataIndex: 'sender',
                key: 'sender',
                render: (text: string) => <span>{text}</span>,
                width: '33.33%',
                align: 'center',
              },
              {
                title: '件名',
                dataIndex: 'subject',
                key: 'subject',
                render: (text: string) => <span>{text}</span>,
                width: '33.33%',
                align: 'center',
              },
            ]}
            scroll={{ x: 500 }}
          />
          <div style={{ textAlign: 'right' }}>
            <S.ViewDetail to="/">メッセージ一覧を見る</S.ViewDetail>
          </div>
        </S.BoxWrapper>
        <S.BoxWrapper>
          <Heading title="未読メッセージ" icon={<Message />} />
          <S.TableAntdCustom
            columns={[
              {
                title: '経験が活かせる求人',
                dataIndex: 'date',
                key: 'date',
                render: (text: string) => <span>{text}</span>,
                align: 'center',
                width: '33.33%',
              },
              {
                title: '希望条件に合った求人',
                dataIndex: 'sender',
                key: 'sender',
                render: (text: string) => <span>{text}</span>,
                align: 'center',
                width: '33.33%',
              },
              {
                title: '最近見た求人',
                dataIndex: 'subject',
                key: 'subject',
                render: (text: string) => <span>{text}</span>,
                align: 'center',
                width: '33.33%',
              },
            ]}
            dataSource={[
              {
                date: '受信日時',
                sender: '差出人',
                subject: '件名',
              },
            ]}
            pagination={false}
            scroll={{ x: 500 }}
          />
          <div style={{ textAlign: 'right' }}>
            <S.ViewDetail to="/">メッセージ一覧を見る</S.ViewDetail>
          </div>
        </S.BoxWrapper>
        <S.BoxWrapper>
          <Heading title="気になるリスト" icon={<Attach />} />
          <div className="muted-alert">
            気になるリストに追加しておくと担当ヘッドハンターからメッセージが届いたり、企業からスカウトが届く可能性があります。
          </div>
          <S.TableAntdCustom
            columns={[
              {
                title: 'ポジション',
                dataIndex: 'job',
                key: 'job',
                render: (text: string) => <span>{text}</span>,
                align: 'center',
                width: '33.33%',
              },
              {
                title: '年収',
                dataIndex: 'headhunter',
                key: 'headhunter',
                render: (text: string) => <span>{text}</span>,
                align: 'center',
                width: '33.33%',
              },
              {
                title: '職種',
                dataIndex: 'xxx',
                key: 'xxx',
                render: (text: string) => <span>{text}</span>,
                align: 'center',
                width: '33.33%',
              },
            ]}
            dataSource={[]}
            scroll={{ x: 500 }}
          />
          <div style={{ textAlign: 'right' }}>
            <S.ViewDetail to="/">メッセージ一覧を見る</S.ViewDetail>
          </div>
        </S.BoxWrapper>
        <S.BoxWrapper className="banner">
          <Heading title="厳選求人情報" icon={<Attach />} />
          <S.BannerMyPage />
        </S.BoxWrapper>
        <S.BoxWrapper>
          <Heading
            title="リクルートダイレクトスカウト のご利用ステップ"
            icon={<DONESTEPS />}
          />
          <BaseRow justify="space-between" className="row-text-icon">
            {TEXT_ICON.map(item => (
              <BaseCol xs={24} sm={12} xl={4} key={item.text}>
                <S.TextWithIconWrapper>
                  <S.IconWrapper>
                    <img src={item.icon} alt={item.text} />
                  </S.IconWrapper>
                  <S.TextWrapper>{item.text}</S.TextWrapper>
                </S.TextWithIconWrapper>
              </BaseCol>
            ))}
          </BaseRow>
        </S.BoxWrapper>
      </Container>
      <S.TextBgPink className="bottom">
        「CAREER
        CARVER（キャリアカーバー）」（現リクルートダイレクトスカウト）をかたる不審なWebサイトにご注意ください。
      </S.TextBgPink>
    </S.MyPageWrapper>
  );
};

export default MyPage;
