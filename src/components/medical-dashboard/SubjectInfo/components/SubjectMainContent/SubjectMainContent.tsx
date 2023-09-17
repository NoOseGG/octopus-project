import React from 'react';
import SubjectNames from '@app/components/medical-dashboard/SubjectInfo/components/SubjectNames/SubjectNames';
import styles from '@app/components/medical-dashboard/SubjectInfo/SubjectInfo.module.css';
import { dateTransformate } from '@app/utils/utils';
import { SubjectType } from '@app/store/types/Subject';
import styled from 'styled-components';

const Content = styled.span`
  font-weight: 600;
  color: #fffbe6;
`;

type MyComponentProps = {
  subject: SubjectType;
};

const SubjectMainContent: React.FC<MyComponentProps> = (props) => {
  return (
    <div>
      {props.subject.names.length > 0 ? <SubjectNames name={props.subject.names[0]} /> : <div></div>}
      {props.subject.unn && (
        <div className={styles.unn}>
          УНП: <Content>{props.subject.unn}</Content>
        </div>
      )}
      {props.subject.date_reg_mns && (
        <div>
          Дата постановки на учет в ИМНС: <Content>{dateTransformate(props.subject.date_reg_mns)}</Content>
        </div>
      )}
      {props.subject.date_reg_egr && (
        <div>
          Дата регистрации в ЕГР: <Content>{dateTransformate(props.subject.date_reg_egr)}</Content>
        </div>
      )}

      {props.subject.decision_create_number && (
        <div>
          Номер решения о создании: <Content>{props.subject.decision_create_number}</Content>
        </div>
      )}

      {props.subject.decision_liquidation_number && (
        <div>
          Номер решения о ликвидации: <Content>{props.subject.decision_liquidation_number}</Content>
        </div>
      )}

      {props.subject.period_activity && (
        <div>
          Период деятельности: <Content>{props.subject.period_activity}</Content>
        </div>
      )}

      {props.subject.age_full && (
        <div>
          Количество дней деятельсности: <Content>{props.subject.age_full}</Content>
        </div>
      )}

      {props.subject.age_short && (
        <div>
          Количество лет деятельсности: <Content>{props.subject.age_short}</Content>
        </div>
      )}
    </div>
  );
};

export default SubjectMainContent;
