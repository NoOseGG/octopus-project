import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './DashboardPage.styles';
import SubjectInfo from '@app/components/medical-dashboard/SubjectInfo/SubjectInfo';
import axios from 'axios';
import { readToken } from '@app/services/localStorage.service';
import { notificationController } from '@app/controllers/notificationController';
import { useNavigate } from 'react-router-dom';
import { doCheckAuth } from '@app/store/slices/authSlice';
import { useAppDispatch } from '@app/hooks/reduxHooks';

const MedicalDashboardPage: React.FC = () => {
  const { isTablet, isDesktop } = useResponsive();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doCheckAuth())
        .catch((err) => {
          console.log(err);
          navigate('/auth/login');
          notificationController.error({ message: err.message });
        });
  }, []);

  const desktopLayout = (
    <Row>
      <S.LeftSideCol xl={16} xxl={17}>
        <SubjectInfo />
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
        {/*<div id="blood-screening">*/}
        {/*  <BloodScreeningCard />*/}
        {/*</div>*/}
        {/*<S.Space />*/}
        {/*<S.ScrollWrapper id="patient-timeline">*/}
        {/*  <PatientResultsCard />*/}
        {/*</S.ScrollWrapper>*/}
      </S.RightSideCol>
    </Row>
  );

  const mobileAndTabletLayout = (
    <Row gutter={[20, 20]}>
      {/*<StatisticsCards />*/}

      {/*{isTablet && (*/}
      {/*  <Col id="map" md={24} order={4}>*/}
      {/*    <MapCard />*/}
      {/*  </Col>*/}
      {/*)}*/}

      {/*<Col id="latest-screenings" xs={24} md={12} order={(isTablet && 5) || 0}>*/}
      {/*  <ScreeningsCard />*/}
      {/*</Col>*/}

      {/*<Col id="activity" xs={24} md={12} order={(isTablet && 8) || 0}>*/}
      {/*  <ActivityCard />*/}
      {/*</Col>*/}

      {/*<Col id="treatment-plan" xs={24} md={24} order={(isTablet && 10) || 0}>*/}
      {/*  <TreatmentCard />*/}
      {/*</Col>*/}

      {/*<Col id="health" xs={24} md={12} order={(isTablet && 9) || 0}>*/}
      {/*  <HealthCard />*/}
      {/*</Col>*/}

      {/*<Col id="patient-timeline" xs={24} md={12} order={(isTablet && 11) || 0}>*/}
      {/*  <PatientResultsCard />*/}
      {/*</Col>*/}

      {/*<Col id="blood-screening" xs={24} md={12} order={(isTablet && 6) || 0}>*/}
      {/*  <BloodScreeningCard />*/}
      {/*</Col>*/}

      {/*<Col id="favorite-doctors" xs={24} md={24} order={(isTablet && 13) || 0}>*/}
      {/*  <FavoritesDoctorsCard />*/}
      {/*</Col>*/}

      {/*<Col id="covid" xs={24} md={12} order={(isTablet && 12) || 0}>*/}
      {/*  <CovidCard />*/}
      {/*</Col>*/}

      {/*<Col id="news" xs={24} md={24} order={(isTablet && 14) || 0}>*/}
      {/*  <NewsCard />*/}
      {/*</Col>*/}
    </Row>
  );

  return (
    <>
      <PageTitle>{t('common.medical-dashboard')}</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
