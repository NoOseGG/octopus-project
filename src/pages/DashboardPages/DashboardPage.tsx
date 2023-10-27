import React, { useEffect } from 'react';
import { Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import * as S from './DashboardPage.styles';
import { notificationController } from '@app/controllers/notificationController';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doCheckAuth } from '@app/store/slices/authSlice';
import { LOGIN_PAGE_PATH } from '@app/components/router/AppRouter';
import Dashboard from '@app/components/dashboards/dashboard/Dashboard';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(doCheckAuth());
  }, [dispatch]);

  useEffect(() => {
    if (token === null) {
      navigate(LOGIN_PAGE_PATH);
      notificationController.error({ message: <span>Авторизируйтесь снова.</span> });
    }
  }, [token, navigate]);

  const desktopLayout = (
    <Row>
      <S.LeftSideCol>
        <Dashboard />
        <References />
      </S.LeftSideCol>
    </Row>
  );

  // const mobileAndTabletLayout = <Row gutter={[20, 20]}></Row>;

  return (
    <>
      <PageTitle>{t('common.subject-info')}</PageTitle>
      {desktopLayout}
    </>
  );
};

export default DashboardPage;
