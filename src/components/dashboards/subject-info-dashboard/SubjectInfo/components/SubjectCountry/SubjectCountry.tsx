import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import { Country } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';

type MyComponentProps = {
  countries: Country[];
};

const SubjectCountry: React.FC<MyComponentProps> = ({ countries }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(countries.length) && (
        <>
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
        </>
      )}
    </Container>
  );
};

export default SubjectCountry;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
