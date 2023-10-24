import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import { EconomicHighRiskRegistry } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import styled from 'styled-components';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';

type MyComponentProps = {
  economic_high_risk_registry: EconomicHighRiskRegistry[];
};

const SubjectEconomicHighRiskRegistry: React.FC<MyComponentProps> = ({ economic_high_risk_registry }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      <Card
        title="Сведения о включении в перечень повышенного риска правонарушений в экономической сфере"
        style={{ width: '100%' }}
      >
        <DataField name="Основание для включения в реестр" content={economic_high_risk_registry[index].reason} />
        <DataFieldDate name="Дата включения" content={economic_high_risk_registry[index].from_dttm} />
        <DataFieldDate name="Дата составления заключения ДФР" content={economic_high_risk_registry[index].date_fiu} />
        <DataField
          name="Период, определенный в заключении ДФР, в течение которого оформленные первичные учетные документы для целей налогообложения не имеют юридической силы"
          content={economic_high_risk_registry[index].period_no_legal_force}
        />
      </Card>
      {Boolean(economic_high_risk_registry.length > 1) && (
        <Pagination
          style={{ alignSelf: 'center' }}
          defaultCurrent={1}
          total={economic_high_risk_registry.length}
          defaultPageSize={1}
          size={'small'}
          onChange={(page) => handleClick(page)}
        />
      )}
    </Container>
  );
};

export default SubjectEconomicHighRiskRegistry;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
