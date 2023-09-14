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
      <div className={styles.unn}>
        УНП: <Content>{props.subject.unn}</Content>
      </div>
      {props.subject.date_reg_mns !== null ? (
        <div>
          Дата постановки на учет в ИМНС: <Content>{dateTransformate(props.subject.date_reg_mns)}</Content>
        </div>
      ) : (
        <div></div>
      )}
      {props.subject.date_reg_egr !== null ? (
        <div>
          Дата регистрации в ЕГР: <Content>{dateTransformate(props.subject.date_reg_egr)}</Content>
        </div>
      ) : (
        <div></div>
      )}

      <div>
        <span>Номер решения о создании: </span>
        {props.subject.decision_create_number ? (
          <Content>{props.subject.decision_create_number}</Content>
        ) : (
          <Content>отсутствует</Content>
        )}
      </div>

      <div>
        <span>Номер решения о ликвидации: </span>
        {props.subject.decision_liquidation_number ? (
          <Content>{props.subject.decision_liquidation_number}</Content>
        ) : (
          <Content>отсутствует</Content>
        )}
      </div>

      <div>
        <span>Период деятельности: </span>
        {props.subject.period_activity ? (
          <Content>{props.subject.period_activity}</Content>
        ) : (
          <Content>отсутствует</Content>
        )}
      </div>

      <div>
        <span>Количество дней деятельности: </span>
        {props.subject.age_full ? <Content>{props.subject.age_full}</Content> : <Content>отсутствует</Content>}
      </div>

      <div>
        <span>Количество лет деятельности: </span>
        {props.subject.age_short ? <Content>{props.subject.age_short}</Content> : <Content>отсутствует</Content>}
      </div>
    </div>
  );
};

export default SubjectMainContent;
