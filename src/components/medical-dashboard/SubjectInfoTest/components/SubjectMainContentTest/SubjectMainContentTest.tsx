import React from 'react';
import { dateTransformate } from '@app/utils/utils';
import { SubjectType } from '@app/store/types/Subject';
import { Card, Typography } from 'antd';
import styled from 'styled-components';

type MyComponentProps = {
  subject: SubjectType;
};

const { Text } = Typography;

const SubjectMainContent: React.FC<MyComponentProps> = ({ subject }) => {
  return (
    <Card title="Информация" extra={<a href="#">More</a>} style={{ width: '100%' }}>
      {subject.unn && (
        <>
          <Text strong={true}>УНП: </Text> <Text copyable={true}>{subject.unn}</Text>
          <br />
        </>
      )}
      {subject.date_reg_mns && (
        <>
          <Text strong={true}>Дата постановки на учет в ИМНС: </Text>{' '}
          <Text>{dateTransformate(subject.date_reg_mns)}</Text>
          <br />
        </>
      )}
      {subject.date_reg_egr && (
        <>
          <Text strong={true}>Дата регистрации в ЕГР: </Text>
          <Text>{subject.date_reg_egr}</Text>
          <br />
        </>
      )}
      {subject.decision_create_number && (
        <>
          <Text strong={true}>Номер решения о создании: </Text> <Text>{subject.decision_create_number}</Text>
          <br />
        </>
      )}
      {subject.decision_liquidation_number && (
        <>
          <Text strong={true}>Номер решения о ликвидации: </Text> <Text>{subject.decision_liquidation_number}</Text>
          <br />
        </>
      )}
      {subject.period_activity && (
        <>
          <Text strong={true}>Период деятельности: </Text>
          <Text>{subject.period_activity}</Text>
          <br />
        </>
      )}
      {subject.age_full && (
        <>
          <Text strong={true}>Количество дней деятельсности: </Text>
          <Text>{subject.age_full}</Text>
          <br />
        </>
      )}
      {subject.age_short && (
        <>
          <Text strong={true}>Количество лет деятельсности: </Text>
          <Text>{subject.age_short}</Text>
        </>
      )}
    </Card>
  );
};

export default SubjectMainContent;
