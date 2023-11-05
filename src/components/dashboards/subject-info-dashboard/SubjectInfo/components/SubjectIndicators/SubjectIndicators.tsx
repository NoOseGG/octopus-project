import React from 'react';
import styled from 'styled-components';
import SubjectMetricAddressMain from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIndicators/SubjectMetricAddressMain/SubjectMetricAddressMain';
import {
  MetricAddress2,
  MetricAddressMain,
  MetricChangeConstituentDoc,
  MetricChangeDirector,
} from '@app/store/types/Subject';
import SubjectMetricAddressTwo from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIndicators/SubjectMetricAddressTwo/SubjectMetricAddressTwo';
import SubjectMetricChangeConstituentDoc from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIndicators/SubjectMetricChangeConstituentDoc/SubjectMetricChangeConstituentDoc';
import SubjectMetricChangeDirector from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIndicators/SubjectMetricChangeDirector/SubjectMetricChangeDirector';

type MyComponentProps = {
  metric_address_main: MetricAddressMain[];
  metric_address_2: MetricAddress2[];
  metric_change_constituent_doc: MetricChangeConstituentDoc[];
  metric_change_director: MetricChangeDirector[];
};

const SubjectIndicators: React.FC<MyComponentProps> = ({
  metric_address_main,
  metric_address_2,
  metric_change_constituent_doc,
  metric_change_director,
}) => {
  return (
    <Container>
      <Title>Индикаторы</Title>
      <IndicatorsContainer>
        {Boolean(metric_address_main.length) && <SubjectMetricAddressMain metric_address_main={metric_address_main} />}
        {Boolean(metric_address_2.length) && <SubjectMetricAddressTwo metric_address_2={metric_address_2} />}
        {Boolean(metric_address_2.length) && (
          <SubjectMetricChangeConstituentDoc metric_change_constituent_doc={metric_change_constituent_doc} />
        )}
        {Boolean(metric_address_2.length) && (
          <SubjectMetricChangeDirector metric_change_director={metric_change_director} />
        )}
      </IndicatorsContainer>
    </Container>
  );
};

export default SubjectIndicators;

const Container = styled.div`
  margin-top: 10px;
`;

const IndicatorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
