import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row } from 'antd';
import * as S from '@app/pages/DashboardPages/DashboardPage.styles';
import { References } from '@app/components/common/References/References';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import DemoProfileInfo from '@app/components/dashboards/demo-profile-info/DemoProfileInfo';

const DemoSubjectInfoPage: React.FC = () => {
  const { t } = useTranslation();

  const desktopLayout = (
    <Row>
      <S.LeftSideCol>
        <DemoProfileInfo />
        <References />
      </S.LeftSideCol>
    </Row>
  );

  return (
    <>
      <PageTitle>{t('common.subject-info')}</PageTitle>
      {desktopLayout}
    </>
  );
};

export default DemoSubjectInfoPage;
