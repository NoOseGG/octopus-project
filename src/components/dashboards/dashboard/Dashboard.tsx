import React from 'react';
import styled from 'styled-components';
import MainInfo from '@app/components/dashboards/dashboard/components/MainInfo/MainInfo';
import LineChartYears from '@app/components/dashboards/dashboard/components/LineChartYears/LineChartYears';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/ColumnChartMonth/ColumnChartMonth';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Юридические лица</Title>
      <MainInfo />
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

  @media only screen and (max-width: 1800px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;