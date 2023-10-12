import React from 'react';
import { Card, Typography } from 'antd';
import { Status } from '@app/store/types/Subject';

const { Text } = Typography;

type MyComponentProps = {
  statuses: Status[];
};

const SubjectStatus: React.FC<MyComponentProps> = ({ statuses }) => {
  return (
    <Card title="Данные о статусе" style={{ width: '100%' }}>
      {statuses[0].code && (
        <>
          <Text strong={true}>Код: </Text> <Text>{statuses[0].code}</Text>
          <br />
        </>
      )}
      {statuses[0].name && (
        <>
          <Text strong={true}>Наименование: </Text> <Text>{statuses[0].name}</Text>
          <br />
        </>
      )}
      {statuses[0].description && (
        <>
          <Text strong={true}>statuses[0]: </Text> <Text>{statuses[0].description}</Text>
          <br />
        </>
      )}
      {statuses[0].from_dttm && (
        <>
          <Text strong={true}>Дата начала действия: </Text> <Text>{statuses[0].from_dttm}</Text>
          <br />
        </>
      )}
      {statuses[0].to_dttm && (
        <>
          <Text strong={true}>Дата окончания действия: </Text> <Text>{statuses[0].to_dttm}</Text>
          <br />
        </>
      )}
    </Card>
  );
};

export default SubjectStatus;
