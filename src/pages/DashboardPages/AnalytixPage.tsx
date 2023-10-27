import React, { useEffect } from 'react';
import { Row } from 'antd';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import * as S from './DashboardPage.styles';
import SubjectsList from '@app/components/dashboards/analytix-dashboard/subjectsList/SubjectsList';
import { useNavigate } from 'react-router-dom';
import { notificationController } from '@app/controllers/notificationController';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doCheckAuth } from '@app/store/slices/authSlice';
import { LOGIN_PAGE_PATH } from '@app/components/router/AppRouter';
import { useTranslation } from 'react-i18next';

const AnalytixPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
      <S.LeftSideCol id="desktop-content">
        <SubjectsList />
        <References />
      </S.LeftSideCol>

      {/*<S.RightSideCol xl={8} xxl={7}></S.RightSideCol>*/}
    </Row>
  );

  // const mobileAndTabletLayout = <Row gutter={[20, 24]}></Row>;

  return (
    <>
      <PageTitle>{t('common.analytix')}</PageTitle>
      {desktopLayout}
    </>
  );
};

export default AnalytixPage;
