import React from 'react';
import { Card, Typography } from 'antd';
import { LegalForm } from '@app/store/types/Subject';

const { Text } = Typography;

type MyComponentProps = {
  legalForms: LegalForm[];
};

const SubjectLegalForms: React.FC<MyComponentProps> = ({ legalForms }) => {
  return (
    <Card title="Данные о орг.правовой форме" style={{ width: '100%' }}>
      {Boolean(legalForms.length) && (
        <>
          {Boolean(legalForms[0].form_type) && (
            <>
              {' '}
              <Text strong={true}>Код: </Text> <Text>{legalForms[0].form_type}</Text> <br />{' '}
            </>
          )}
          {Boolean(legalForms[0].form_code) && (
            <>
              {' '}
              <Text strong={true}>Тип:</Text> <Text>{legalForms[0].form_code}</Text> <br />{' '}
            </>
          )}
          {Boolean(legalForms[0].name) && (
            <>
              {' '}
              <Text strong={true}>Наименование: </Text> <Text>{legalForms[0].name}</Text> <br />{' '}
            </>
          )}
          {Boolean(legalForms[0].description) && (
            <>
              {' '}
              <Text strong={true}>Описание: </Text> <Text>{legalForms[0].description}</Text> <br />{' '}
            </>
          )}
          {Boolean(legalForms[0].exclusion_date) && (
            <>
              {' '}
              <Text strong={true}>Дата исключения из ОКРБ 019-2013: </Text> <Text>{legalForms[0].exclusion_date}</Text>{' '}
              <br />{' '}
            </>
          )}
          {Boolean(legalForms[0].exception_description) && (
            <>
              {' '}
              <Text strong={true}>Описание исключения: </Text> <Text>{legalForms[0].exception_description}</Text> <br />{' '}
            </>
          )}
          {Boolean(legalForms[0].entity_type) && (
            <>
              {' '}
              <Text strong={true}>Тип субъекта: </Text> <Text>{legalForms[0].entity_type}</Text> <br />{' '}
            </>
          )}
          {Boolean(legalForms[0].from_dttm) && (
            <>
              {' '}
              <Text strong={true}>Дата начала действия: </Text> <Text>{legalForms[0].from_dttm}</Text> <br />{' '}
            </>
          )}
          {Boolean(legalForms[0].to_dttm) && (
            <>
              {' '}
              <Text strong={true}>Дата окончания действия: </Text> <Text>{legalForms[0].to_dttm}</Text> <br />{' '}
            </>
          )}
        </>
      )}
    </Card>
  );
};

export default SubjectLegalForms;
