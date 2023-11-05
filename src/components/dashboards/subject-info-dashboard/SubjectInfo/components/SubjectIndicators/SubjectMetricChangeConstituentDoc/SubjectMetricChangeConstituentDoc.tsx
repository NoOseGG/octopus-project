import React, { useState } from 'react';
import styled from 'styled-components';
import { MetricChangeConstituentDoc } from '@app/store/types/Subject';
import { Badge, Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';

type MyComponentProps = {
  metric_change_constituent_doc: MetricChangeConstituentDoc[];
};

const SubjectMetricChangeConstituentDoc: React.FC<MyComponentProps> = ({ metric_change_constituent_doc }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(metric_change_constituent_doc.length) && (
        <>
          <Card title="Частота юридически значимых действий" style={{ width: '100%' }}>
            <DataField name="Количество изменений" content={metric_change_constituent_doc[index].count_activity} />
            <span>
              <DataField name="Уровень риска" content={metric_change_constituent_doc[index].risk_level} />
              <Badge />
            </span>
          </Card>
          {Boolean(metric_change_constituent_doc.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={metric_change_constituent_doc.length}
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

export default SubjectMetricChangeConstituentDoc;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
