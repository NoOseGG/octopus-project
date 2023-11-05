import React, { useState } from 'react';
import styled from 'styled-components';
import { MetricAddress2 } from '@app/store/types/Subject';
import { Badge, Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';

type MyComponentProps = {
  metric_address_2: MetricAddress2[];
};

const SubjectMetricAddressTwo: React.FC<MyComponentProps> = ({ metric_address_2 }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  console.log(`metric 2 => ${metric_address_2}`);

  return (
    <Container>
      {Boolean(metric_address_2.length) && (
        <>
          <Card title="Частота смены адреса" style={{ width: '100%' }}>
            <DataField name="Частота смены юридического адреса" content={metric_address_2[index].count_changes} />
            <span>
              <DataField name="Уровень риска" content={metric_address_2[index].risk_level} />
              <Badge />
            </span>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
