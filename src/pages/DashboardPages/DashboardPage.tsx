import React, { useEffect } from 'react';
import { Row, Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import * as S from './DashboardPage.styles';
import { notificationController } from '@app/controllers/notificationController';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doCheckAuth } from '@app/store/slices/authSlice';
import { LOGIN_PAGE_PATH } from '@app/components/router/AppRouter';
import DashboardLegalEntity from '@app/components/dashboards/dashboard/DashboardLegalEntity';
import DashboardSoleTrader from '@app/components/dashboards/dashboard/DashboardSoleTrader';
import { deleteLegalEntity, setLegalEntity } from '@app/store/slices/searchFiltersSlice';

enum TABS_KEY {
  LEGAL_ENTITY = 'LEGAL_ENTITY',
  SOLE_TRADE = 'SOLE_TRADE',
}

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

  const handleChangeLegalEntity = (key: string) => {
    switch (key) {
      case TABS_KEY.LEGAL_ENTITY:
        dispatch(setLegalEntity());
        break;
      case TABS_KEY.SOLE_TRADE:
        dispatch(deleteLegalEntity());
        break;
    }
  };

  const desktopLayout = (
    <Row>
      <S.LeftSideCol>
        <Tabs defaultActiveKey={'1'} style={{ width: '100%' }} centered onChange={handleChangeLegalEntity}>
          <Tabs.TabPane tab={'Юридические лица'} key={TABS_KEY.LEGAL_ENTITY}>
            <DashboardLegalEntity />
          </Tabs.TabPane>
          <Tabs.TabPane tab={'Индивидуальные предприниматели'} key={TABS_KEY.SOLE_TRADE}>
            <DashboardSoleTrader />
          </Tabs.TabPane>
        </Tabs>
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
