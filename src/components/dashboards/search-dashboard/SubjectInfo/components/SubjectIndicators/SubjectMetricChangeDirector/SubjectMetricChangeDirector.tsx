import React, { useState } from 'react';
import { MetricChangeDirector } from '@app/store/types/Subject';
import { Badge, Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';
import { getColorForBadge } from '@app/utils/utils';
import { Container, GRID_AREA, RiskContainer } from '../SubjectIndicatorStyle';

type MyComponentProps = {
  metric_change_director: MetricChangeDirector[];
};

const SubjectMetricChangeChangeDirector: React.FC<MyComponentProps> = ({ metric_change_director }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container gridArea={GRID_AREA.D}>
      {Boolean(metric_change_director.length) && (
        <>
          <Card title="Частота смены руководителя" style={{ width: '100%' }}>
            <DataField name="Количество изменений" content={metric_change_director[index].count_changes} />
            <RiskContainer>
              <DataField name="Уровень риска" content={metric_change_director[index].risk_level} />
              <Badge color={getColorForBadge(metric_change_director[index].risk_level)} />
            </RiskContainer>
          </Card>
          {Boolean(metric_change_director.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={metric_change_director.length}
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

export default SubjectMetricChangeChangeDirector;
