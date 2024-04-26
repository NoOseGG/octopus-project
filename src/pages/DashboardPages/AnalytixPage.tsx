import React from 'react';
import { Image, Row } from 'antd';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import * as S from './DashboardPage.styles';
import { useTranslation } from 'react-i18next';

const AnalytixPage: React.FC = () => {
  const { t } = useTranslation();

  const desktopLayout = (
    <Row>
      <S.LeftSideCol id="desktop-content">
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignSelf: 'center',
          }}
        >
          <div>HELLO</div>
          <Image width={300} src="https://ae01.alicdn.com/kf/H51ddf426e1ae46a3982c9b5e98311251B.jpg" alt={'ШАР'} />
        </div>
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

export default AnalytixPage;
