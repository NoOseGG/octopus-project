import React, { useState } from 'react';
import { MetricAddress2 } from '@app/store/types/Subject';
import { Badge, Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import { getColorForBadge } from '@app/utils/utils';
import { Container, GRID_AREA, RiskContainer } from '../SubjectIndicatorStyle';

type MyComponentProps = {
  metric_address_2: MetricAddress2[];
};

const SubjectMetricAddressTwo: React.FC<MyComponentProps> = ({ metric_address_2 }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container gridArea={GRID_AREA.B}>
      {Boolean(metric_address_2.length) && (
        <>
          <Card title="Частота смены адреса" style={{ width: '100%' }}>
            <DataField name="Частота смены юридического адреса" content={metric_address_2[index].count_changes} />
            <RiskContainer>
              <DataField name="Уровень риска" content={metric_address_2[index].risk_level} />
              <Badge color={getColorForBadge(metric_address_2[index].risk_level)} />
            </RiskContainer>
          </Card>
          {Boolean(metric_address_2.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={metric_address_2.length}
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

export default SubjectMetricAddressTwo;
