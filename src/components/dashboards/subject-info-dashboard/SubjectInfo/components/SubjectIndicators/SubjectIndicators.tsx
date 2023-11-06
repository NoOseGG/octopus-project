import React from 'react';
import styled from 'styled-components';
import SubjectMetricAddressMain from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIndicators/SubjectMetricAddressMain/SubjectMetricAddressMain';
import {
  MetricAddress2,
  MetricAddressMain,
  MetricChangeConstituentDoc,
  MetricChangeDirector,
  MetricEntityContact,
} from '@app/store/types/Subject';
import SubjectMetricAddressTwo from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIndicators/SubjectMetricAddressTwo/SubjectMetricAddressTwo';
import SubjectMetricChangeConstituentDoc from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIndicators/SubjectMetricChangeConstituentDoc/SubjectMetricChangeConstituentDoc';
import SubjectMetricChangeDirector from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIndicators/SubjectMetricChangeDirector/SubjectMetricChangeDirector';
import { mediaMax } from '@app/styles/themes/constants';
import SubjectMetricEntityContact from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIndicators/SubjectMetricEntityContact/SubjectMetricEntityContact';

type MyComponentProps = {
  metric_address_main: MetricAddressMain[];
  metric_address_2: MetricAddress2[];
  metric_change_constituent_doc: MetricChangeConstituentDoc[];
  metric_change_director: MetricChangeDirector[];
  metric_entity_contact: MetricEntityContact[];
};

const SubjectIndicators: React.FC<MyComponentProps> = ({
  metric_address_main,
  metric_address_2,
  metric_change_constituent_doc,
  metric_change_director,
  metric_entity_contact,
}) => {
  return (
    <Container>
      <Title>Индикаторы</Title>
      <IndicatorsContainer>
        {Boolean(metric_address_main.length) && <SubjectMetricAddressMain metric_address_main={metric_address_main} />}
        {Boolean(metric_address_2.length) && <SubjectMetricAddressTwo metric_address_2={metric_address_2} />}
        {Boolean(metric_change_constituent_doc.length) && (
          <SubjectMetricChangeConstituentDoc metric_change_constituent_doc={metric_change_constituent_doc} />
        )}
        {Boolean(metric_change_director.length) && (
          <SubjectMetricChangeDirector metric_change_director={metric_change_director} />
        )}
        {Boolean(metric_entity_contact.length) && (
          <SubjectMetricEntityContact metric_entity_contact={metric_entity_contact} />
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
  grid-template-areas:
    'A A B B'
    'C D D E';
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  gap: 20px;
  margin-top: 20px;

  @media only screen and ${mediaMax.xl} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
