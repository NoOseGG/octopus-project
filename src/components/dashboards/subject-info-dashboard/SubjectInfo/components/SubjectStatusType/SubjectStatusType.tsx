import React from 'react';
import { Card, Typography } from 'antd';
import { StatusType } from '@app/store/types/Subject';

const { Text } = Typography;

type MyComponentProps = {
  statusesType: StatusType[];
};

const SubjectStatusType: React.FC<MyComponentProps> = ({ statusesType }) => {
  return (
    <Card title="Данные о способах создания/ликвидации" style={{ width: '100%' }}>
      {statusesType[0].status_code && (
        <>
          <Text strong={true}>Код: </Text> <Text>{statusesType[0].status_code}</Text>
          <br />
        </>
      )}
      {statusesType[0].name && (
        <>
          <Text strong={true}>Наименование: </Text> <Text>{statusesType[0].name}</Text>
          <br />
        </>
      )}
      {statusesType[0].type_code && (
        <>
          <Text strong={true}>Код типа: </Text> <Text>{statusesType[0].type_code}</Text>
          <br />
        </>
      )}
      {statusesType[0].from_dttm && (
        <>
          <Text strong={true}>Дата начала действия: </Text> <Text>{statusesType[0].from_dttm}</Text>
          <br />
        </>
      )}
      {statusesType[0].to_dttm && (
        <>
          <Text strong={true}>Дата окончания действия: </Text> <Text>{statusesType[0].to_dttm}</Text>
          <br />
        </>
      )}
    </Card>
  );
};

export default SubjectStatusType;
