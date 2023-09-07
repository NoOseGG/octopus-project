import React, { useEffect, useState } from 'react';
import styles from './SubjectItem.module.css';
import { Organization, setSubjectUnn } from '@app/store/slices/searchSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@app/hooks/reduxHooks';

type MyComponentProps = {
  subject: Organization;
};

const SubjectItem: React.FC<MyComponentProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleClick = (subUnn: string) => {
    dispatch(setSubjectUnn(subUnn));
  };

  const backgroundStatusCode = props.subject.status_code === 'AT' ? styles.green_status : styles.red_status;
  const borderColor = props.subject.status_code === 'AT' ? styles.green_border : styles.red_border;

  console.log(backgroundStatusCode);

  return (
    <Link className={styles.link} to={'/medical-dashboard'} onClick={() => handleClick(props.subject.unn)}>
      <div className={`${styles.container} ${borderColor}`}>
        <div>
          <div className={styles.name}>{props.subject.full_name}</div>
          <div className={styles.unn}>УНП: {props.subject.unn}</div>
          <div className={styles.date_reg}>Дата регистрации: {props.subject.date_reg}</div>
          <div className={styles.full_address}>Полный адресс: {props.subject.full_address}</div>
          <div className={styles.status_name}>Статусное имя: {props.subject.status_name}</div>
          <div className={styles.status_code_name}>Статус код: {props.subject.status_code}</div>
        </div>
        {/*<div className={`${styles.status_code} ${backgroundStatusCode}`}></div>*/}
      </div>
    </Link>
  );
};

export default SubjectItem;
