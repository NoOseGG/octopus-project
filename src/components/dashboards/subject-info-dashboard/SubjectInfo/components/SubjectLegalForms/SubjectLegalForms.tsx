import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import { LegalForm } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import styled from 'styled-components';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';

type MyComponentProps = {
  legalForms: LegalForm[];
};

const SubjectLegalForms: React.FC<MyComponentProps> = ({ legalForms }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(legalForms.length) && (
        <>
          <Card title="Данные о орг.правовой форме" style={{ width: '100%' }}>
            <DataField name={'Код'} content={legalForms[index].form_type} />
            <DataField name={'Тип'} content={legalForms[index].form_code} />
            <DataField name={'Наименование'} content={legalForms[index].name} />
            <DataField name={'Описание'} content={legalForms[index].description} />
            <DataField name={'Дата исключения из ОКРБ 019-2013'} content={legalForms[index].exclusion_date} />
            <DataField name={'Описание исключения'} content={legalForms[index].exception_description} />
            <DataField name={'Тип субъекта'} content={legalForms[index].entity_type} />
            <DataFieldDate name={'Дата начала действия'} content={legalForms[index].from_dttm} />
            <DataFieldDate name={'Дата окончания действия'} content={legalForms[index].to_dttm} />
          </Card>
          {Boolean(legalForms.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={legalForms.length}
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

export default SubjectLegalForms;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
