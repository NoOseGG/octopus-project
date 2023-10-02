import React, { useEffect } from 'react';
import { Row } from 'antd';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './DashboardPage.styles';
import SubjectsList from '@app/components/nft-dashboard/subjectsList/SubjectsList';
import { useNavigate } from 'react-router-dom';
import { notificationController } from '@app/controllers/notificationController';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doCheckAuth } from '@app/store/slices/authSlice';

const MedicalDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(doCheckAuth());
  }, []);

  useEffect(() => {
    if (token === null) {
      navigate('/auth/login');
      notificationController.error({ message: <span>Авторизируйтесь снова.</span> });
    }
  }, [token]);

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
      {/*<Col span={24}>*/}
      {/*  <TrendingCreators />*/}
      {/*</Col>*/}

      {/*<Col span={24}>*/}
      {/*  <RecentlyAddedNft />*/}
      {/*</Col>*/}

      {/*<Col span={24}>*/}
      {/*  <TrendingCollections />*/}
      {/*</Col>*/}

      {/*<Col span={24}>*/}
      {/*  <RecentActivity />*/}
      {/*</Col>*/}
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
