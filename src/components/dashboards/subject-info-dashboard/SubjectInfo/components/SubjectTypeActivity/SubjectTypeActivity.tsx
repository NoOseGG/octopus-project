import React from 'react';
import { Card, Typography } from 'antd';
import { TypeActivity } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';

const { Text } = Typography;

type MyComponentProps = {
  typeActivities: TypeActivity[];
};

const SubjectStatus: React.FC<MyComponentProps> = ({ typeActivities }) => {
  return (
    <Card title="Данные о виде деятельности" style={{ width: '100%' }}>
      {typeActivities[0].code && (
        <>
          <Text strong={true}>Код: </Text> <Text>{typeActivities[0].code}</Text>
          <br />
        </>
      )}
      {typeActivities[0].name && (
        <>
          <Text strong={true}>Наименование: </Text> <Text>{typeActivities[0].name}</Text>
          <br />
        </>
      )}
      {typeActivities[0].from_dttm && (
        <>
          <Text strong={true}>Дата начала действия: </Text> <Text>{formatDate(typeActivities[0].from_dttm)}</Text>
          <br />
        </>
      )}
      {typeActivities[0].to_dttm && (
        <>
          <Text strong={true}>Дата окончания действия: </Text> <Text>{formatDate(typeActivities[0].to_dttm)}</Text>
          <br />
        </>
      )}
    </Card>
  );
};

export default SubjectStatus;
