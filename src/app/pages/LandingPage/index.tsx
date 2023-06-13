import { Helmet } from 'react-helmet-async';
import * as S from './LangdingPage.styles';
import { Container } from 'styles/global-styles';
import { BaseRow } from 'app/components/common/BaseRow';
import { BaseCol } from 'app/components/common/BaseCol';
import {
  IMAGE_BANNER_HOME,
  IMAGE1,
  IMAGE3,
  LIKE_STAR,
  CONNECT_EO,
  CLICK_BTN,
  IMAGE2,
} from 'app/assets';
import CardWhyChoose from './components/CardWhyChoose';
import BaseButton from 'app/components/common/BaseButton';
import { IMAGE_ICON_USER } from 'app/assets';
import _ from 'lodash';
import { BaseSelect, Option } from 'app/components/common/BaseSelect';
import { BaseInput } from 'app/components/common/BaseInput';
import { Button, Checkbox, Form, Input } from 'antd';

const OpacityAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.5, delay: 0.2 },
};

export const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <S.BannerSection>
        <Container className="container-banner-section">
          <BaseRow align="middle">
            <BaseCol xs={24} md={12} xxl={9}>
              <S.TitleBanner {...OpacityAnimation}>Job agency</S.TitleBanner>
            </BaseCol>
            <BaseCol xs={24} md={12} xxl={15}>
              <S.BannerImage {...OpacityAnimation}>
                <img src={IMAGE_BANNER_HOME} alt="rekaizen banner" />
              </S.BannerImage>
            </BaseCol>
          </BaseRow>
        </Container>
      </S.BannerSection>
      <S.SectionHomeOne>
        <Container>
          <S.TitleWrapper>
            <S.Title className="title-section primary" level={2}>
              厳選求人情報
            </S.Title>
            <S.TextWithLink to="/">View More ›</S.TextWithLink>
          </S.TitleWrapper>
          <BaseRow
            className="row-card-section-one"
            justify={'space-between'}
            wrap={true}
            gutter={{
              xs: 0,
              sm: 15,
              md: 24,
              lg: 32,
              xl: 50,
              xxl: 62,
            }}
          >
            <BaseCol xs={24} sm={8} lg={8}>
              <img src={IMAGE1} alt="features img" />
              <S.Title className="title-for-card" level={3}>
                Features 1
              </S.Title>
              <S.DescCard className="text-muted desc-card">
                Join top companies anywhere in the world as a full time employee
              </S.DescCard>
              <S.TextWithLink to="/">Learn More ›</S.TextWithLink>
            </BaseCol>
            <BaseCol xs={24} sm={8} lg={8}>
              <img src={IMAGE2} alt="features img" />
              <S.Title className="title-for-card" level={3}>
                Features 2
              </S.Title>
              <S.DescCard className="text-muted desc-card">
                Join top companies anywhere in the world as a full time employee
                Join top companies anywhere in the world as a full time employee
              </S.DescCard>
              <S.TextWithLink to="/">Learn More ›</S.TextWithLink>
            </BaseCol>
            <BaseCol xs={24} sm={8} lg={8}>
              <img src={IMAGE1} alt="features img" />
              <S.Title className="title-for-card" level={3}>
                Features 3
              </S.Title>
              <S.DescCard className="text-muted desc-card">
                Join top companies anywhere in the world as a full time employee
              </S.DescCard>
              <S.TextWithLink to="/">Learn More ›</S.TextWithLink>
            </BaseCol>
          </BaseRow>
        </Container>
      </S.SectionHomeOne>
      <S.SectionHomeTwo>
        <Container>
          <S.FormHome>
            <S.FormHome.Item label="検索">
              <BaseInput />
            </S.FormHome.Item>
            <S.FormHome.Item label="検索">
              <BaseSelect />
            </S.FormHome.Item>
            <S.FormHome.Item label="検索">
              <BaseSelect />
            </S.FormHome.Item>
            <S.FormHome.Item>
              <BaseButton
                htmlType="submit"
                type="primary"
                className="btn-search"
              >
                検索する
              </BaseButton>
            </S.FormHome.Item>
          </S.FormHome>
        </Container>
      </S.SectionHomeTwo>
      <S.SectionHomeThree>
        <Container>
          <S.TitleWrapper>
            <S.Title className="title-section normal" level={2}>
              転職事例
            </S.Title>
            <S.TextWithLink to="/">View More ›</S.TextWithLink>
          </S.TitleWrapper>
          <S.FlexibleWrapper className="first-row">
            <S.FlexibleItemImg>
              <S.ImageAnimation className="img-left">
                <img srcSet={`${IMAGE3} 2x`} alt="img" />
              </S.ImageAnimation>
            </S.FlexibleItemImg>
            <S.FlexibleItemText>
              <S.GroupDesc>
                <S.Text className="secondary small-title">
                  戦略コンサルティング会社コンサルタント
                </S.Text>
                <S.Title level={3} className="main-title">
                  監査法人から事業会社の経理部門リーダーへ。新システム導入の責任者も担当
                </S.Title>
                <S.DescCard className="desc">
                  私が公認会計士を目指すことを決めたのは高校生の時です。あまり進学校ではなかったことから、将来のためには価値のある資格を取得することが重要だと認識し、猛勉強をスタート。大学時代は、授業があるときは8～10時間、ない日は15時間以上の資格取得に向けた勉強をし・・・続きはこちら
                  私が公認会計士を目指すことを決めたのは高校生の時です。あまり進学校ではなかったことから、将来のためには価値のある資格を取得することが重要だと認識し、猛勉強をスタート。大学時代は、授業があるときは8～10時間、ない日は15時間以上の資格取得に向けた勉強をし・・・続きはこちら
                </S.DescCard>
                <BaseButton type="primary" className="btn-details">
                  Details
                </BaseButton>
              </S.GroupDesc>
            </S.FlexibleItemText>
          </S.FlexibleWrapper>
          <S.FlexibleWrapper className="secondary-row">
            <S.FlexibleItemText>
              <S.GroupDesc>
                <S.Text className="secondary small-title">
                  戦略コンサルティング会社コンサルタント
                </S.Text>
                <S.Title level={3} className="main-title">
                  監査法人から事業会社の経理部門リーダーへ。新システム導入の責任者も担当
                </S.Title>
                <S.DescCard className="desc">
                  私が公認会計士を目指すことを決めたのは高校生の時です。あまり進学校ではなかったことから、将来のためには価値のある資格を取得することが重要だと認識し、猛勉強をスタート。大学時代は、授業があるときは8～10時間、ない日は15時間以上の資格取得に向けた勉強をし・・・続きはこちら
                  私が公認会計士を目指すことを決めたのは高校生の時です。あまり進学校ではなかったことから、将来のためには価値のある資格を取得することが重要だと認識し、猛勉強をスタート。大学時代は、授業があるときは8～10時間、ない日は15時間以上の資格取得に向けた勉強をし・・・続きはこちら
                </S.DescCard>
                <BaseButton type="primary" className="btn-details">
                  Details
                </BaseButton>
              </S.GroupDesc>
            </S.FlexibleItemText>
            <S.FlexibleItemImg>
              <S.ImageAnimation className="img-right">
                <img srcSet={`${IMAGE3} 2x`} alt="img" />
              </S.ImageAnimation>
              <div className="dot-group">
                {Array(15)
                  .fill(0)
                  .map(item => (
                    <span />
                  ))}
              </div>
            </S.FlexibleItemImg>
          </S.FlexibleWrapper>
        </Container>
      </S.SectionHomeThree>
      <S.SectionHomeFour>
        <Container>
          <S.TitleWrapper>
            <S.Title className="title-section primary" level={2}>
              ハイクラス向け転職スカウトサービスリクルー トダイレクトスカウト
            </S.Title>
            <S.TextWithLink to="/">View More ›</S.TextWithLink>
          </S.TitleWrapper>
          <S.FlexGroupIcon>
            <S.GroupIcon>
              <img src={LIKE_STAR} alt="img" />
              <S.Text>Carefully propose a job that suits you</S.Text>
            </S.GroupIcon>
            <S.GroupIcon>
              <img src={CONNECT_EO} alt="img" />
              <S.Text>
                Connect the world's top talent with the world's top
                organizations
              </S.Text>
            </S.GroupIcon>
            <S.GroupIcon>
              <img src={CLICK_BTN} alt="img" />
              <S.Text>A free applicant tracking system</S.Text>
            </S.GroupIcon>
          </S.FlexGroupIcon>
        </Container>
      </S.SectionHomeFour>
      <S.SectionHomeFive>
        <Container>
          <S.TitleWrapper>
            <S.Title className="title-section primary" level={2}>
              リクルートダイレクトスカウトが選ばれる理由
            </S.Title>
            <S.TextWithLink to="/">View More ›</S.TextWithLink>
          </S.TitleWrapper>
          <BaseRow
            gutter={{
              xs: 0,
              sm: 20,
              lg: 32,
              xxl: 39,
            }}
            justify="space-between"
            className="row-card-section-five"
          >
            {Array(4)
              .fill(0)
              .map(item => (
                <CardWhyChoose
                  key={_.uniqueId()}
                  img={IMAGE_ICON_USER}
                  title="ヘッドハンターがあなたの代わりに仕事を探す"
                  desc="サービスは完全無料！登録後、スカウトを待つだけ。約600社、4,300名以上（2022年5月時点）のヘッドハンターがあなたの代わりに仕事を探して提案します。自分では探せなかった、意外な企業との出会いがあるかもしれません。"
                />
              ))}
          </BaseRow>
        </Container>
      </S.SectionHomeFive>
      <S.SectionHomeSix>
        <Container>
          <S.TitleWrapper>
            <S.Title className="title-section primary medium" level={2}>
              会員登録をすると、非公開求人情報など会員限定の情報を閲覧できます。
            </S.Title>
          </S.TitleWrapper>
          <S.BtnWrapper>
            <BaseButton type="primary">会員登録（無料）</BaseButton>
            <BaseButton typeAdded="secondary">
              採用検討中の企業様はこちら
            </BaseButton>
          </S.BtnWrapper>
        </Container>
      </S.SectionHomeSix>
    </>
  );
};
