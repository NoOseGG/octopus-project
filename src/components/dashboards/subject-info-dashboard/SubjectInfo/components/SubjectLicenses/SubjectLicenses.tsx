import React from 'react';
import { Card, Typography } from 'antd';
import { License } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';

const { Text } = Typography;

type MyComponentProps = {
  licenses: License[];
};

const SubjectLicenses: React.FC<MyComponentProps> = ({ licenses }) => {
  return (
    <Card title="Данные о лицензиях" style={{ width: '100%' }}>
      {Boolean(licenses.length) && (
        <>
          {Boolean(licenses[0].license_number) && (
            <>
              {' '}
              <Text strong={true}>Номер лицензии: </Text> <Text>{licenses[0].license_number}</Text> <br />{' '}
            </>
          )}
          {Boolean(licenses[0].state_body_name) && (
            <>
              {' '}
              <Text strong={true}>Орган выдавший:</Text> <Text>{licenses[0].state_body_name}</Text> <br />{' '}
            </>
          )}
          {Boolean(licenses[0].license_name) && (
            <>
              {' '}
              <Text strong={true}>Название: </Text> <Text>{licenses[0].license_name}</Text> <br />{' '}
            </>
          )}
          {Boolean(licenses[0].status_name) && (
            <>
              {' '}
              <Text strong={true}>Название статуса: </Text> <Text>{licenses[0].status_name}</Text> <br />{' '}
            </>
          )}
          {Boolean(licenses[0].status_code) && (
            <>
              {' '}
              <Text strong={true}>Код: </Text> <Text>{licenses[0].status_code}</Text> <br />{' '}
            </>
          )}
          {Boolean(licenses[0].from_dttm) && (
            <>
              {' '}
              <Text strong={true}>Дата начала действия: </Text> <Text>{formatDate(licenses[0].from_dttm)}</Text> <br />{' '}
            </>
          )}
        </>
      )}
    </Card>
  );
};

export default SubjectLicenses;
