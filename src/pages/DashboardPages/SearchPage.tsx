import React from 'react';
import { Row } from 'antd';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import * as S from './DashboardPage.styles';
import { useTranslation } from 'react-i18next';
import Search from '@app/components/dashboards/search-dashboard/Search';

const SearchPage: React.FC = () => {
  const { t } = useTranslation();

  const desktopLayout = (
    <Row>
      <S.LeftSideCol id="desktop-content">
        <Search />
        <References />
      </S.LeftSideCol>
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

export default SearchPage;
