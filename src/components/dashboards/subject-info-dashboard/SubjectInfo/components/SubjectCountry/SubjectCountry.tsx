import React from 'react';
import { Card, Typography } from 'antd';
import { Country } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';

const { Text } = Typography;

type MyComponentProps = {
  countries: Country[];
};

const SubjectCountry: React.FC<MyComponentProps> = ({ countries }) => {
  return (
    <Card title="Данные о стране регистрации" style={{ width: '100%' }}>
      {countries[0].code && (
        <>
          <Text strong={true}>Код: </Text> <Text>{countries[0].code}</Text>
          <br />
        </>
      )}
      {countries[0].name && (
        <>
          <Text strong={true}>Наименование: </Text> <Text>{countries[0].name}</Text>
          <br />
        </>
      )}
      {countries[0].from_dttm && (
        <>
          <Text strong={true}>Дата начала действия: </Text> <Text>{formatDate(countries[0].from_dttm)}</Text>
          <br />
        </>
      )}
      {countries[0].to_dttm && (
        <>
          <Text strong={true}>Дата окончания действия: </Text> <Text>{formatDate(countries[0].to_dttm)}</Text>
          <br />
        </>
      )}
    </Card>
  );
};

export default SubjectCountry;
