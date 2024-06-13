import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// no lazy loading for auth pages to avoid flickering
const AuthLayout = React.lazy(() => import('@app/components/layouts/AuthLayout/AuthLayout'));
import LoginPage from '@app/pages/LoginPage';
import SignUpPage from '@app/pages/SignUpPage';
import ForgotPasswordPage from '@app/pages/ForgotPasswordPage';
import LockPage from '@app/pages/LockPage';

import MainLayout from '@app/components/layouts/main/MainLayout/MainLayout';
import ProfileLayout from '@app/components/profile/ProfileLayout';
import RequireAuth from '@app/components/router/RequireAuth';
import { withLoading } from '@app/hocs/withLoading.hoc';
import SubjectInfoPage from '@app/pages/DashboardPages/SubjectInfoPage';
import ChangeLogPage from '@app/pages/DashboardPages/ChangeLogPage';
import SearchPage from '@app/pages/DashboardPages/SearchPage';
import FeedbackPage from '@app/pages/DashboardPages/FeedbackPage';
import MainLanding from '@app/components/dashboards/mainLanding/MainLanding';
import ResetPassword from '@app/pages/ResetPassword';
import ActivateEmailPage from '@app/pages/ActivateEmail';
import LegalEntityDashboardPage from '@app/pages/DashboardPages/LegalEntityDashboardPage';
import SoleTradeDashboardPage from '@app/pages/DashboardPages/SoleTradeDashboardPage';

const ServerErrorPage = React.lazy(() => import('@app/pages/ServerErrorPage'));
const Error404Page = React.lazy(() => import('@app/pages/Error404Page'));
const PersonalInfoPage = React.lazy(() => import('@app/pages/PersonalInfoPage'));
const SecuritySettingsPage = React.lazy(() => import('@app/pages/SecuritySettingsPage'));
const Logout = React.lazy(() => import('./Logout'));

export const LOGIN_PAGE_PATH = '/auth/login';
export const ANALYTIC_DASHBOARD_PATH = '/';
export const SEARCH_DASHBOARD_PATH = '/search';
export const SUBJECT_INFO_DASHBOARD_PATH = '/legal-entity/profile';
export const CHANGE_LOG_PATH = '/change-log';
export const FEEDBACK_PATH = '/feedback';
export const DASHBOARD_PATH = '/dashboard';
export const LEGAL_ENTITY = '/legal-entity';
export const SOLE_TRADE = '/sole-trade';

const Analytix = withLoading(MainLanding);
const SubjectInfo = withLoading(SubjectInfoPage);
const Search = withLoading(SearchPage);
// const Dashboard = withLoading(DashboardPage);
const ChangeLog = withLoading(ChangeLogPage);
const Feedback = withLoading(FeedbackPage);
const LegalEntity = withLoading(LegalEntityDashboardPage);
const SoleTrade = withLoading(SoleTradeDashboardPage);

const ServerError = withLoading(ServerErrorPage);
const Error404 = withLoading(Error404Page);

// Profile
const PersonalInfo = withLoading(PersonalInfoPage);
const SecuritySettings = withLoading(SecuritySettingsPage);

const AuthLayoutFallback = withLoading(AuthLayout);
const LogoutFallback = withLoading(Logout);

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ANALYTIC_DASHBOARD_PATH}>
          <Route path="404" element={<Error404 />} />
          <Route index element={<Analytix />} />
          <Route path={''} element={protectedLayout}>
            <Route path={`${SUBJECT_INFO_DASHBOARD_PATH}/:unn`} element={<SubjectInfo />} />
            <Route path={SEARCH_DASHBOARD_PATH} element={<Search />} />
            <Route path={CHANGE_LOG_PATH} element={<ChangeLog />} />
            <Route path={LEGAL_ENTITY} element={<LegalEntity />} />
            <Route path={SOLE_TRADE} element={<SoleTrade />} />
            <Route path={FEEDBACK_PATH} element={<Feedback />} />
            <Route path="server-error" element={<ServerError />} />

            <Route path="profile" element={<ProfileLayout />}>
              <Route path="personal-info" element={<PersonalInfo />} />
              <Route path="security-settings" element={<SecuritySettings />} />
              {/*<Route path="notifications" element={<Notifications />} />*/}
              {/*<Route path="payments" element={<Payments />} />*/}
            </Route>
          </Route>
        </Route>
        <Route path="/auth" element={<AuthLayoutFallback />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="password/reset/confirm/:id/:token" element={<ResetPassword />} />
          <Route path="users/activation/:id/:token" element={<ActivateEmailPage />} />
          <Route
            path="lock"
            element={
              <RequireAuth>
                <LockPage />
              </RequireAuth>
            }
          />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />

          {/*<Route path="security-code" element={<SecurityCodePage />} />*/}
          {/*<Route path="new-password" element={<NewPasswordPage />} />*/}
        </Route>
        <Route path="/logout" element={<LogoutFallback />} />
      </Routes>
    </BrowserRouter>
  );
};
