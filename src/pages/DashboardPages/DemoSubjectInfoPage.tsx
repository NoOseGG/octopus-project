import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row } from 'antd';
import { References } from '@app/components/common/References/References';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import DemoProfileInfo from '@app/components/dashboards/demo-profile-info/DemoProfileInfo';
import styled from 'styled-components';

const DemoSubjectInfoPage: React.FC = () => {
  const { t } = useTranslation();

  const desktopLayout = (
    <Row>
      <Container>
        <DemoProfileInfo />
        <References />
      </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;
