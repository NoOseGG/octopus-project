import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectCountry: React.FC = () => {
  const countries = useAppSelector((state) => state.searchProfile.profile.countries);

  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <>
      {Boolean(countries.length) && (
        <Container>
          <Card title="Данные о стране регистрации" style={{ width: '100%' }}>
            <DataField name="Код" content={countries[index].code} />
            <DataField name="Наименование" content={countries[index].name} />
            <DataFieldDate name="Дата начала действия" content={countries[index].from_dttm} />
            <DataFieldDate name="Дата окончания действия" content={countries[index].to_dttm} />
          </Card>
          {Boolean(countries.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={countries.length}
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

export default SubjectCountry;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
