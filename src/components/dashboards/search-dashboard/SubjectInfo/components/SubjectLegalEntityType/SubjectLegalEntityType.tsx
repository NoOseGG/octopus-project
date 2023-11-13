import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';
import styled from 'styled-components';
import DataFieldDate from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectLegalEntityType: React.FC = () => {
  const legal_entity_type = useAppSelector((state) => state.searchProfile.profile.legal_entity_type);

  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <>
      {Boolean(legal_entity_type.length) && (
        <Container>
          <Card title="Сведения о типе субъекта" style={{ width: '100%' }}>
            <DataField name="Полное название типа" content={legal_entity_type[index].entity_type_name} />
            <DataField name="Краткое название типа" content={legal_entity_type[index].entity_type_code} />
            <DataFieldDate name="Дата начала действия" content={legal_entity_type[index].from_dttm} />
          </Card>
          {Boolean(legal_entity_type.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={legal_entity_type.length}
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

export default SubjectLegalEntityType;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
