import React from 'react';
import { Card, Typography } from 'antd';
import { GiasAccreditedParticipant } from '@app/store/types/Subject';

const { Text } = Typography;

type MyComponentProps = {
  giasAccreditedPaticipant: GiasAccreditedParticipant[];
};

const SubjectGiasAccreditedParticipant: React.FC<MyComponentProps> = ({ giasAccreditedPaticipant }) => {
  return (
    <Card title="Реестр ГИАС аккредитованных участников" style={{ width: '100%' }}>
      {giasAccreditedPaticipant[0].from_dttm && (
        <>
          <Text strong={true}>Дата включения в реестр: </Text> <Text>{giasAccreditedPaticipant[0].from_dttm}</Text>
          <br />
        </>
      )}
      {giasAccreditedPaticipant[0].to_dttm && (
        <>
          <Text strong={true}>Дата исключения из реестра: </Text> <Text>{giasAccreditedPaticipant[0].to_dttm}</Text>
          <br />
        </>
      )}
    </Card>
  );
};

export default SubjectGiasAccreditedParticipant;
