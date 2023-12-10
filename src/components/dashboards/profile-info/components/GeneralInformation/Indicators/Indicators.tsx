import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import MeterGaugePlot from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/components/MeterGaugePlot/MeterGaugePlot';
import styled from 'styled-components';

const Indicators: React.FC = () => {
  const metric_address_2 = useAppSelector((state) => state.searchProfile.profile.metric_address_2);
  const metric_change_constituent_doc = useAppSelector(
    (state) => state.searchProfile.profile.metric_change_constituent_doc,
  );
  const metric_change_director = useAppSelector((state) => state.searchProfile.profile.metric_change_director);
  const metric_entity_contact = useAppSelector((state) => state.searchProfile.profile.metric_entity_contact);

  console.log(`---> ${metric_address_2[0].risk_level}`);

  return (
    <Container>
      {metric_address_2[0].risk_level && (
        <MeterGaugePlot risk={metric_address_2[0].risk_level} name={'Частота смены адреса'} description={'Описание'} />
      )}
      {metric_change_constituent_doc[0].risk_level && (
        <MeterGaugePlot
          risk={metric_change_constituent_doc[0].risk_level}
          name={'Частота юридически значимых действий'}
          description={'Описание'}
        />
      )}
      {metric_change_director[0].risk_level && (
        <MeterGaugePlot
          risk={metric_change_director[0].risk_level}
          name={'Частота смены руководителя'}
          description={'Описание'}
        />
      )}
      {metric_entity_contact[0].risk_level && (
        <MeterGaugePlot
          risk={metric_entity_contact[0].risk_level}
          name={'Уровень контактности субъекта'}
          description={'Описание'}
        />
      )}
    </Container>
  );
};

export default Indicators;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
