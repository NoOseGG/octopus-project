import React from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import * as S from './DashboardPage.styles';
import DashboardSoleTrader from '@app/components/dashboards/dashboard/DashboardSoleTrader';
import SearchFilters from '@app/components/dashboards/dashboard/components/SearchFilters/SearchFilters';

const SoleTradeDashboardPage: React.FC = () => {
  const { t } = useTranslation();

  const desktopLayout = (
    <Row>
      <S.LeftSideCol span={20}>
        <DashboardSoleTrader />
        <References />
      </S.LeftSideCol>
      <Col span={4}>
        <SearchFilters />
      </Col>
    </Row>
  );

  return (
    <>
      <PageTitle>{t('common.subject-info')}</PageTitle>
      {desktopLayout}
    </>
  );
};

export default SoleTradeDashboardPage;
