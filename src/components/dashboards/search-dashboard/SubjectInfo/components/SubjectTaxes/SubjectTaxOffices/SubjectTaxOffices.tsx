import React, { useState } from 'react';
import { TaxOffice } from '@app/store/types/Subject';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';
import styled from 'styled-components';
import DataFieldDate from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataFieldDate';

type MyComponentProps = {
  taxOffices: TaxOffice[];
};

const SubjectTaxOffices: React.FC<MyComponentProps> = ({ taxOffices }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(taxOffices.length) && (
        <>
          <Card style={{ width: '100%' }}>
            <DataField name="Код" content={taxOffices[index].code} />
            <DataField name="Наимменвание" content={taxOffices[index].name} />
            <DataField name="Код региона" content={taxOffices[index].region_code} />
            <DataField name="Название региона" content={taxOffices[index].region_name} />
            <DataFieldDate name="Дата начала действия" content={taxOffices[index].from_dttm} />
            <DataFieldDate name="Дата окончания действия" content={taxOffices[index].to_dttm} />
          </Card>
          {Boolean(taxOffices.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={taxOffices.length}
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

export default SubjectTaxOffices;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
