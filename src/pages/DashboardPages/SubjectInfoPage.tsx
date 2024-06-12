import React from 'react';
import { Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import * as S from './DashboardPage.styles';
import ProfileInfo from '@app/components/dashboards/profile-info/ProfileInfo';

const SubjectInfoPage: React.FC = () => {
  const { t } = useTranslation();

  const desktopLayout = (
    <Row>
      <S.LeftSideCol>
        <ProfileInfo />
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

export default SubjectInfoPage;
