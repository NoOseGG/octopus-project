import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectTypeActivity: React.FC = () => {
  const typeActivities = useAppSelector((state) => state.searchProfile.profile.types_activities);

  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <>
      {Boolean(typeActivities.length) && (
        <Container>
          <Card title="Данные о виде деятельности" style={{ width: '100%' }}>
            <DataField name="Код" content={typeActivities[index].code} />
            <DataField name="Наименование" content={typeActivities[index].name} />
            <DataFieldDate name="Дата начала действия" content={typeActivities[index].from_dttm} />
            <DataFieldDate name="Дата окончания действия" content={typeActivities[index].to_dttm} />
          </Card>
          {Boolean(typeActivities.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={typeActivities.length}
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

export default SubjectTypeActivity;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
