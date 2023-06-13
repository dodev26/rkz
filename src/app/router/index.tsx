import AuthLayout from 'app/layouts/AuthLayout';
import HomeLayout from 'app/layouts/HomeLayout';
import MainLayout from 'app/layouts/MainLayout';
import { HomePage } from 'app/pages/HomePage';
import { LandingPage } from 'app/pages/LandingPage';
import Login from 'app/pages/Auth/Login';
import MessagePage from 'app/pages/MessagePage';
import MyPage from 'app/pages/MyPage';

import { NotFoundPage } from 'app/pages/NotFoundPage';
import Offers from 'app/pages/Offers';
import Register from 'app/pages/Auth/Reigister';
import SearchHeadHunter from 'app/pages/SearchHeadHunter';
import RegisterFive from 'app/pages/Step/RegisterFive';
import RegisterFour from 'app/pages/Step/RegisterFour';
import RegisterOne from 'app/pages/Step/RegisterOne';
import RegisterSeven from 'app/pages/Step/RegisterSeven';
import RegisterSix from 'app/pages/Step/RegisterSix';
import RegisterThree from 'app/pages/Step/RegisterThree';
import RegisterTwo from 'app/pages/Step/RegisterTwo';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';

export const AppRouter = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="" element={<MainLayout />}>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/r1" element={<RegisterOne />} />
          <Route path="/r2" element={<RegisterTwo />} />
          <Route path="/r3" element={<RegisterThree />} />
          <Route path="/r4" element={<RegisterFour />} />
          <Route path="/r5" element={<RegisterFive />} />
          <Route path="/r6" element={<RegisterSix />} />
          <Route path="/r7" element={<RegisterSeven />} />
          <Route path="/search-headhunter" element={<SearchHeadHunter />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/offers" element={<Offers />} />
        </Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
