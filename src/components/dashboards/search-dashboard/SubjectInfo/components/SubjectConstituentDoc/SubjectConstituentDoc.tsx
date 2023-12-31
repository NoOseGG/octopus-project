import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';
import { formatDate } from '@app/utils/utils';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectConstituentDoc: React.FC = () => {
  const constituent_doc = useAppSelector((state) => state.searchProfile.profile.constituent_doc);

  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <>
      {Boolean(constituent_doc.length) && (
        <Container>
          {Boolean(constituent_doc.length) && (
            <Card title="Сведения об изменениях, внесенных в учредительный документ" style={{ width: '100%' }}>
              <DataField name={'Название события'} content={constituent_doc[index].event_name} />
              <DataField name={'Дата события'} content={formatDate(constituent_doc[index].from_dttm)} />
              <DataField name={'Дата отмены события'} content={formatDate(constituent_doc[index].to_dttm)} />
              <DataField name={'Дата подачи документов'} content={formatDate(constituent_doc[index].doc_dttm)} />
              <DataField name={'Номер документа'} content={constituent_doc[index].doc_num} />
              <DataField name={'Орган, принявший решение'} content={constituent_doc[index].state_body_decision} />
              <DataField name={'Государственный орган'} content={constituent_doc[index].state_body} />
              <DataField name={'Основание'} content={constituent_doc[index].reason} />
              <DataField name={'Дополнительная информация'} content={constituent_doc[index].addition} />
              <DataField
                name={'Срок (для ликвидации и т.п. в зависимости от события)'}
                content={constituent_doc[index].term_decision}
              />
              <DataField name={'Номер решения'} content={constituent_doc[index].decision_num} />
            </Card>
          )}
          {Boolean(constituent_doc.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={constituent_doc.length}
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

export default SubjectConstituentDoc;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
