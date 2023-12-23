import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import MeterGaugePlot from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/components/MeterGaugePlot/MeterGaugePlot';
import styled from 'styled-components';
import MetricProbabilityLiquidation from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/components/MetricProbabilityLiquidation/MetricProbabilityLiquidation';
import MetricAddressEconomicHighRiskRegistry from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/components/MetricAddressEconomicHighRiskRegistry/MetricAddressEconomicHighRiskRegistry';

const Indicators: React.FC = () => {
  const metric_address_2 = useAppSelector((state) => state.searchProfile.profile.metric_address_2);
  const metric_change_constituent_doc = useAppSelector(
    (state) => state.searchProfile.profile.metric_change_constituent_doc,
  );
  const metric_change_director = useAppSelector((state) => state.searchProfile.profile.metric_change_director);
  const metric_entity_contact = useAppSelector((state) => state.searchProfile.profile.metric_entity_contact);
  const metric_level_competition = useAppSelector((state) => state.searchProfile.profile.metric_level_competition);
  const metric_probability_liquidation = useAppSelector(
    (state) => state.searchProfile.profile.metric_probability_liquidation,
  );
  const metric_address_economic_high_risk_registry = useAppSelector(
    (state) => state.searchProfile.profile.metric_address_economic_high_risk_registry,
  );

  return (
    <Container>
      <TopLine>
        {metric_address_2[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_address_2[0].risk_level}
            name={'Частота смены адреса'}
            content={metric_address_2[0]?.count_changes}
            description={'Описание'}
          />
        )}
        {metric_change_constituent_doc[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_change_constituent_doc[0].risk_level}
            name={'Частота юридически значимых действий'}
            content={metric_change_constituent_doc[0]?.count_activity}
            description={'Описание'}
          />
        )}
        {metric_change_director[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_change_director[0].risk_level}
            name={'Частота смены руководителя'}
            content={metric_change_director[0]?.count_changes}
            description={'Описание'}
          />
        )}
        {metric_entity_contact[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_entity_contact[0].risk_level}
            name={'Уровень контактности субъекта'}
            content={metric_entity_contact[0].sum_count}
            description={'Описание'}
          />
        )}
        {metric_level_competition[0]?.level_competition && (
          <MeterGaugePlot
            risk={metric_level_competition[0].level_competition}
            name={'Уровень конкуренции'}
            content={metric_level_competition[0]?.count_lei}
            description={'Описание'}
          />
        )}
      </TopLine>
      <BottomLine>
        {Boolean(metric_probability_liquidation.length) && <MetricProbabilityLiquidation />}
        {Boolean(metric_address_economic_high_risk_registry.length) && <MetricAddressEconomicHighRiskRegistry />}
      </BottomLine>
    </Container>
  );
};

export default Indicators;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
`;

const BottomLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
