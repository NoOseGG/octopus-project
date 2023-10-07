import React from 'react';
import { dateTransformate } from '@app/utils/utils';
import { SubjectType } from '@app/store/types/Subject';
import { Card } from 'antd';

type MyComponentProps = {
  subject: SubjectType;
};

const SubjectMainContent: React.FC<MyComponentProps> = ({ subject }) => {
  return (
    <Card title="Информация" extra={<a href="#">More</a>} style={{ width: '100%' }}>
      {subject.unn && <p>УНП: {subject.unn}</p>}
      {subject.date_reg_mns && <p>Дата постановки на учет в ИМНС: {dateTransformate(subject.date_reg_mns)}</p>}
      {subject.date_reg_egr && <p>Дата регистрации в ЕГР: {subject.date_reg_egr}</p>}
      {subject.decision_create_number && <p>Номер решения о создании: {subject.decision_create_number}</p>}
      {subject.decision_liquidation_number && <p>Номер решения о ликвидации: {subject.decision_liquidation_number}</p>}
      {subject.period_activity && <p>Период деятельности: {subject.period_activity}</p>}
      {subject.age_full && <p>Количество дней деятельсности: {subject.age_full}</p>}
      {subject.age_short && <p>Количество лет деятельсности: {subject.age_short}</p>}
    </Card>
  );
};

export default SubjectMainContent;
