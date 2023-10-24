import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import { StateBody } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';

type MyComponentProps = {
  state_bodies: StateBody[];
};

const SubjectStateBodies: React.FC<MyComponentProps> = ({ state_bodies }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(state_bodies.length) && (
        <>
          <Card title="Данные о статусе" style={{ width: '100%' }}>
            <DataField name="Код" content={state_bodies[index].state_body_code} />
            <DataField name="Полное наименование" content={state_bodies[index].full_name} />
            <DataField
              name="Код статуса. STATUS может принимать значения LKV - орган принявший решение о ликвидации; CUR - текущий орган учета; CRT - орган принявший решение о создании"
              content={state_bodies[index].status}
            />
            <DataFieldDate name="Дата начала действия" content={state_bodies[index].from_dttm} />
          </Card>
          {Boolean(state_bodies.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={state_bodies.length}
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

export default SubjectStateBodies;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
