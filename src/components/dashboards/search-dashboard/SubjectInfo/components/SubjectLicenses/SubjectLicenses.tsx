import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectLicenses: React.FC = () => {
  const licenses = useAppSelector((state) => state.searchProfile.profile.licenses);
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <>
      {Boolean(licenses.length) && (
        <Container>
          <Card title="Данные о лицензиях" style={{ width: '100%' }}>
            <DataField name={'Номер лицензии'} content={licenses[index].license_number} />
            <DataField name={'Орган выдавший'} content={licenses[index].state_body_name} />
            <DataField name={'Название'} content={licenses[index].license_name} />
            <DataField name={'Название статуса'} content={licenses[index].status_name} />
            <DataField name={'Код'} content={licenses[index].status_code} />
            <DataFieldDate name={'Дата начала действия'} content={licenses[index].from_dttm} />
          </Card>
          {Boolean(licenses.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={licenses.length}
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

export default SubjectLicenses;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
