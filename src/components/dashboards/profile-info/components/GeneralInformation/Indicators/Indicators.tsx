import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import MeterGaugePlot from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/components/MeterGaugePlot/MeterGaugePlot';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
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
      <S.Title>Индикаторы возможных рисков</S.Title>
      <TopLine>
        {metric_address_2[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_address_2[0].risk_level}
            name={'Частота смены адреса'}
            content={metric_address_2[0]?.count_changes}
            description={'Будет какое-то описание'}
            isChangeCase={true}
          />
        )}
        {metric_change_constituent_doc[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_change_constituent_doc[0].risk_level}
            name={'Частота юридически значимых действий'}
            content={metric_change_constituent_doc[0]?.count_activity}
            description={'Будет какое-то описание'}
            isChangeCase={true}
          />
        )}
        {metric_change_director[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_change_director[0].risk_level}
            name={'Частота смены руководителя'}
            content={metric_change_director[0]?.count_changes}
            description={'Будет какое-то описание'}
            isChangeCase={true}
          />
        )}
        {metric_entity_contact[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_entity_contact[0].risk_level}
            name={'Уровень контактности субъекта'}
            content={metric_entity_contact[0].sum_count}
            description={'Будет какое-то описание'}
          />
        )}
        {metric_level_competition[0]?.level_competition && (
          <MeterGaugePlot
            risk={metric_level_competition[0].level_competition}
            name={'Уровень конкуренции'}
            content={metric_level_competition[0]?.count_lei}
            description={'Будет какое-то описание'}
          />
        )}
        {metric_address_economic_high_risk_registry[0]?.address_description && (
          <MetricAddressEconomicHighRiskRegistry
            risk={metric_address_economic_high_risk_registry[0].address_description}
            name={'Адрес в реестре с повышенным риском'}
            description={'Будет какое-то описание'}
          />
        )}
        {metric_probability_liquidation[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_probability_liquidation[0].risk_level}
            name={'Уровень риска ликвидации'}
            content={`${metric_probability_liquidation[0]?.probability_liquidation?.toFixed(2)}%`}
            description={'Будет какое-то описание'}
          />
        )}
      </TopLine>
    </Container>
  );
};

export default Indicators;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TopLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
`;
