import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  doCalculatePercentYear,
  doGetTotalCountCreated,
  doGetTotalCountCreatedLastQuarter,
  doGetTotalCountCreatedLastYear,
  doGetTotalCountOperatingCompany,
} from '@app/store/slices/dashboardSlice';
import MainInfo from '@app/components/dashboards/dashboard/components/MainInfo/MainInfo';

const Dashboard: React.FC = () => {
  const {
    totalCountCreated,
    totalCountCreatedLastYear,
    totalCountCreatedLastQuarter,
    totalCountOperatingCompany,
    percent,
  } = useAppSelector((state) => state.dashboard.mainInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountCreated());
    dispatch(doGetTotalCountCreatedLastYear());
    dispatch(doGetTotalCountCreatedLastQuarter());
    dispatch(doGetTotalCountOperatingCompany());
    dispatch(doCalculatePercentYear());
  }, [dispatch]);

  return (
    <Container>
      <Title>Юридические лица</Title>
      <MainInfo
        totalCountCreated={totalCountCreated}
        totalCountCreatedLastYear={totalCountCreatedLastYear}
        totalCountCreatedLastQuarter={totalCountCreatedLastQuarter}
        totalCountOperatingCompany={totalCountOperatingCompany}
        percent={percent}
      />
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  flex-grow: 1;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;
