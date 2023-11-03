import React from 'react';
import styled from 'styled-components';
import SubjectMetricAddressMain from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIndicators/SubjectMetricAddressMain/SubjectMetricAddressMain';
import { MetricAddressMain } from '@app/store/types/Subject';

type MyComponentProps = {
  metric_address_main: MetricAddressMain[];
};

const SubjectIndicators: React.FC<MyComponentProps> = ({ metric_address_main }) => {
  return (
    <Container>
      <Title>Индикаторы</Title>
      <IndicatorsContainer>
        <SubjectMetricAddressMain metric_address_main={metric_address_main} />
      </IndicatorsContainer>
    </Container>
  );
};

export default SubjectIndicators;

const Container = styled.div`
  margin-top: 10px;
`;

const IndicatorsContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
