import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectStatusType: React.FC = () => {
  const statusesType = useAppSelector((state) => state.searchProfile.profile.statuses_types);

  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <>
      {Boolean(statusesType.length) && (
        <Container>
          <Card title="Данные о способах создания/ликвидации" style={{ width: '100%' }}>
            <DataField name="Код" content={statusesType[index].status_code} />
            <DataField name="Наименование" content={statusesType[index].name} />
            <DataField name="Код типа" content={statusesType[index].type_code} />
            <DataFieldDate name="Дата начала действия" content={statusesType[index].from_dttm} />
            <DataFieldDate name="Дата окончания действия" content={statusesType[index].to_dttm} />
          </Card>
          {Boolean(statusesType.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={statusesType.length}
              defaultPageSize={1}
              size={'small'}
              onChange={(page) => handleClick(page)}
            />
          )}
        </Container>
      )}
    </>
  );
};

export default SubjectStatusType;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
