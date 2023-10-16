import React from 'react';
import { Card, Typography } from 'antd';
import { GiasBlackList } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';

const { Text } = Typography;

type MyComponentProps = {
  giasBlackList: GiasBlackList[];
};

const SubjectGiasBlackList: React.FC<MyComponentProps> = ({ giasBlackList }) => {
  return (
    <Card title="Реестр ГИАС временно не допускаемых к участию в процедурах гос.закупок" style={{ width: '100%' }}>
      {giasBlackList[0].from_dttm && (
        <>
          <Text strong={true}>Дата включения в реестр: </Text> <Text>{formatDate(giasBlackList[0].from_dttm)}</Text>
          <br />
        </>
      )}
      {giasBlackList[0].to_dttm && (
        <>
          <Text strong={true}>Дата исключения из реестра: </Text> <Text>{formatDate(giasBlackList[0].to_dttm)}</Text>
          <br />
        </>
      )}
      {giasBlackList[0].basis_inclusion && (
        <>
          <Text strong={true}>Основание включения в список: </Text> <Text>{giasBlackList[0].basis_inclusion}</Text>
          <br />
        </>
      )}
      {giasBlackList[0].basis_exclusion && (
        <>
          <Text strong={true}>Основание исключения из списка: </Text> <Text>{giasBlackList[0].basis_exclusion}</Text>
          <br />
        </>
      )}
    </Card>
  );
};

export default SubjectGiasBlackList;
