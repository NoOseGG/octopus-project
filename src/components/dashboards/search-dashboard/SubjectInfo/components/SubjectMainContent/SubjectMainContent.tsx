import React from 'react';
import { dateTransformate, formatDate } from '@app/utils/utils';
import { Card, Typography } from 'antd';
import { useAppSelector } from '@app/hooks/reduxHooks';

const { Text } = Typography;

const SubjectMainContent: React.FC = () => {
  const {
    unn,
    date_reg_mns,
    date_reg_egr,
    decision_create_number,
    decision_liquidation_number,
    period_activity,
    age_full,
    age_short,
  } = useAppSelector((state) => state.searchProfile.profile);

  return (
    <Card title="Информация" style={{ width: '100%' }}>
      {unn && (
        <>
          <Text strong={true}>УНП: </Text> <Text copyable={{ tooltips: false }}>{unn}</Text>
          <br />
        </>
      )}
      {date_reg_mns && (
        <>
          <Text strong={true}>Дата постановки на учет в ИМНС: </Text> <Text>{dateTransformate(date_reg_mns)}</Text>
          <br />
        </>
      )}
      {date_reg_egr && (
        <>
          <Text strong={true}>Дата регистрации в ЕГР: </Text>
          <Text>{formatDate(date_reg_egr)}</Text>
          <br />
        </>
      )}
      {decision_create_number && (
        <>
          <Text strong={true}>Номер решения о создании: </Text> <Text>{decision_create_number}</Text>
          <br />
        </>
      )}
      {decision_liquidation_number && (
        <>
          <Text strong={true}>Номер решения о ликвидации: </Text> <Text>{decision_liquidation_number}</Text>
          <br />
        </>
      )}
      {period_activity && (
        <>
          <Text strong={true}>Период деятельности: </Text>
          <Text>{period_activity}</Text>
          <br />
        </>
      )}
      {age_full && (
        <>
          <Text strong={true}>Количество дней деятельсности: </Text>
          <Text>{age_full}</Text>
          <br />
        </>
      )}
      {age_short && (
        <>
          <Text strong={true}>Количество лет деятельсности: </Text>
          <Text>{age_short}</Text>
        </>
      )}
    </Card>
  );
};

export default SubjectMainContent;
