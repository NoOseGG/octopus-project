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
import LineChartYears from '@app/components/dashboards/dashboard/components/LineChartYears/LineChartYears';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/ColumnChartMonth/ColumnChartMonth';

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
      <ChartsContainer>
        <LineChartYears />
        <ColumnChartMonth />
      </ChartsContainer>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  flex-grow: 1;
`;

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;
