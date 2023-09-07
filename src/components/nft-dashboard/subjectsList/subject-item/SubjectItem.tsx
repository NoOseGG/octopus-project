import React from 'react';
import styles from './SubjectItem.module.css';
import { Organization } from '@app/store/slices/searchSlice';

type MyComponentProps = {
  subject: Organization;
};

const SubjectItem: React.FC<MyComponentProps> = (props) => {
  console.log('hello');
  return (
    <div
      className={styles.container}
      onClick={() => {
        alert(props.subject.unn);
      }}
    >
      <div className={styles.title}>{props.subject.full_name}</div>
      <div className={styles.unn}>УНП: {props.subject.unn}</div>
      <div className={styles.date_reg}>Дата регистрации: {props.subject.date_reg}</div>
      <div className={styles.full_address}>Полный адресс: {props.subject.full_address}</div>
      <div className={styles.status_name}>Статусное имя: {props.subject.status_name}</div>
      <div className={styles.status_code}>Статус код: {props.subject.status_code}</div>
    </div>
  );
};

export default SubjectItem;
