import React, { useState } from 'react';
import { TaxOfficeArrea } from '@app/store/types/Subject';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import styled from 'styled-components';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';

type MyComponentProps = {
  taxOfficesArrears: TaxOfficeArrea[];
};

const SubjectTaxOfficesArrears: React.FC<MyComponentProps> = ({ taxOfficesArrears }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(taxOfficesArrears.length) && (
        <>
          <Card style={{ width: '100%' }}>
            <DataField name="Код" content={taxOfficesArrears[index].code} />
            <DataField name="Наимменвание" content={taxOfficesArrears[index].name} />
            <DataField name="Код региона" content={taxOfficesArrears[index].region_code} />
            <DataField name="Название региона" content={taxOfficesArrears[index].region_name} />
            <DataFieldDate name="Дата начала действия" content={taxOfficesArrears[index].from_dttm} />
            <DataFieldDate name="Дата окончания действия" content={taxOfficesArrears[index].to_dttm} />
          </Card>
          {Boolean(taxOfficesArrears.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={taxOfficesArrears.length}
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

export default SubjectTaxOfficesArrears;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
