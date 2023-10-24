import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import { StateBody } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';

type MyComponentProps = {
  state_bodies: StateBody[];
};

interface BodyStatusCode {
  LKV: string;
  CUR: string;
  CRT: string;
}

const StateBodyStatusCode: BodyStatusCode = {
  LKV: 'LVK',
  CUR: 'CUR',
  CRT: 'CRT',
} as const;

const SubjectStateBodies: React.FC<MyComponentProps> = ({ state_bodies }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(state_bodies.length) && (
        <>
          <Card title="Данные о государственных органах" style={{ width: '100%' }}>
            <DataField name="Код" content={state_bodies[index].state_body_code} />
            <DataField name="Полное наименование" content={state_bodies[index].full_name} />
            <DataField name="Код статуса" content={getStatus(state_bodies[index].status)} />
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

const getStatus = (status: string | null) => {
  if (status !== null) {
    switch (status) {
      case StateBodyStatusCode.CRT:
        return 'орган принявший решение о создании';
      case StateBodyStatusCode.CUR:
        return 'текущий орган учета';
      case StateBodyStatusCode.LKV:
        return 'орган принявший решение о ликвидации';
      default:
        return '';
    }
  } else {
    return '';
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
