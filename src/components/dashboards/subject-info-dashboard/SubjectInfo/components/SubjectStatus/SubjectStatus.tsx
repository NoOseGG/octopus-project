import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import { Status } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';

type MyComponentProps = {
  statuses: Status[];
};

const SubjectStatus: React.FC<MyComponentProps> = ({ statuses }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(statuses.length) && (
        <>
          <Card title="Данные о статусе" style={{ width: '100%' }}>
            <DataField name="Код" content={statuses[index].code} />
            <DataField name="Наименование" content={statuses[index].name} />
            <DataField name="Описание" content={statuses[index].description} />
            <DataFieldDate name="Дата начала действия" content={statuses[index].from_dttm} />
            <DataFieldDate name="Дата окончания действия" content={statuses[index].from_dttm} />
          </Card>
          {Boolean(statuses.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={statuses.length}
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

export default SubjectStatus;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
