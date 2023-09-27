import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import { TrendingCreators } from '@app/components/nft-dashboard/trending-creators/TrendingCreators';
import { RecentlyAddedNft } from '@app/components/nft-dashboard/recently-added/RecentlyAddedNft';
import { TrendingCollections } from '@app/components/nft-dashboard/trending-collections/TrendingCollections';
import { RecentActivity } from '@app/components/nft-dashboard/recentActivity/RecentActivity';
import * as S from './DashboardPage.styles';
import SubjectsList from '@app/components/nft-dashboard/subjectsList/SubjectsList';
import axios from 'axios';
import { readToken } from '@app/services/localStorage.service';
import { useNavigate } from 'react-router-dom';
import { notificationController } from '@app/controllers/notificationController';
import { useAppDispatch } from '@app/hooks/reduxHooks';

const CHECK_AUTH_URL = 'http://93.125.0.140:1338/api/v1/auth/users/me/';

const MedicalDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get(CHECK_AUTH_URL, { headers: { Authorization: `Welcome ${readToken()}` } }).catch((err) => {
      console.log(err);
      navigate('/auth/login');
      notificationController.error({ message: err.message });
    });
  }, []);

  const desktopLayout = (
    <Row>
      <S.LeftSideCol id="desktop-content">
        <SubjectsList />
        <References />
      </S.LeftSideCol>

      {/*<S.RightSideCol xl={8} xxl={7}></S.RightSideCol>*/}
    </Row>
  );

  const mobileAndTabletLayout = (
    <Row gutter={[20, 24]}>
      <Col span={24}>
        <TrendingCreators />
      </Col>

      <Col span={24}>
        <RecentlyAddedNft />
      </Col>

      <Col span={24}>
        <TrendingCollections />
      </Col>

      <Col span={24}>
        <RecentActivity />
      </Col>
    </Row>
  );

  return (
    <>
      <PageTitle>NFT Dashboard</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
