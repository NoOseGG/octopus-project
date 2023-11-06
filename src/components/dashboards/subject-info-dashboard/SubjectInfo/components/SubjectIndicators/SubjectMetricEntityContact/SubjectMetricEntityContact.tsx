import React, { useState } from 'react';
import { MetricEntityContact } from '@app/store/types/Subject';
import { Badge, Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import { getColorForBadge } from '@app/utils/utils';
import { Container, GRID_AREA, RiskContainer } from '../SubjectIndicatorStyle';

type MyComponentProps = {
  metric_entity_contact: MetricEntityContact[];
};

const SubjectMetricEntityContact: React.FC<MyComponentProps> = ({ metric_entity_contact }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  console.log(`contact => ${metric_entity_contact}`);

  return (
    <Container gridArea={GRID_AREA.E}>
      {Boolean(metric_entity_contact.length) && (
        <>
          <Card title="Индикатор уровня контактности субъекта" style={{ width: '100%' }}>
            <DataField name="Количество контактов" content={metric_entity_contact[index].sum_count} />
            <RiskContainer>
              <DataField name="Уровень риска" content={metric_entity_contact[index].risk_level} />
              <Badge color={getColorForBadge(metric_entity_contact[index].risk_level)} />
            </RiskContainer>
          </Card>
          {Boolean(metric_entity_contact.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={metric_entity_contact.length}
              defaultPageSize={1}
              size={'small'}
              onChange={(page) => handleClick(page)}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default SubjectMetricEntityContact;
