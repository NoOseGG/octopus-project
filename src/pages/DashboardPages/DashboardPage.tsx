import React from 'react';
import { Col, Row, Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import * as S from './DashboardPage.styles';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import DashboardLegalEntity from '@app/components/dashboards/dashboard/DashboardLegalEntity';
import DashboardSoleTrader from '@app/components/dashboards/dashboard/DashboardSoleTrader';
import { deleteLegalEntity, setLegalEntity } from '@app/store/slices/search/searchFiltersSlice';
import SearchFilters from '@app/components/dashboards/dashboard/components/SearchFilters/SearchFilters';

enum TABS_KEY {
  LEGAL_ENTITY = 'LEGAL_ENTITY',
  SOLE_TRADE = 'SOLE_TRADE',
}

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

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
      <S.LeftSideCol span={20}>
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
      <Col span={4}>
        <SearchFilters />
      </Col>
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
