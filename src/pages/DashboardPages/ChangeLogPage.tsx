import React, { useEffect } from 'react';
import { Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import * as S from './DashboardPage.styles';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doCheckAuth } from '@app/store/slices/authSlice';
import ChangeLog from '@app/components/dashboards/changelog-dashboard/ChangeLog/ChangeLog';

const ChangeLogPage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doCheckAuth());
  }, [dispatch]);

  const desktopLayout = (
    <Row>
      <S.LeftSideCol id="desktop-content">
        <ChangeLog />
        <References />
      </S.LeftSideCol>
    </Row>
  );

  // const mobileAndTabletLayout = <Row gutter={[20, 20]}></Row>;

  return (
    <>
      <PageTitle>{t('common.change-log')}</PageTitle>
      {desktopLayout}
    </>
  );
};

export default ChangeLogPage;
