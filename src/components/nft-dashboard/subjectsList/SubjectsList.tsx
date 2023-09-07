import React, { Component, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import SubjectItem from '@app/components/nft-dashboard/subjectsList/subject-item/SubjectItem';
import styles from './SubjectList.module.css'

const SubjectsList: React.FC = () => {
  const subjectList = useAppSelector((state) => state.search.data.results);

  useEffect(() => {
    console.log(`SUBJECT_LIST > ${subjectList}`);
  }, [subjectList]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список субъектов:</h1>
      {subjectList.map((sub) => (
        <SubjectItem subject={sub} key={sub.unn} />
      ))}
    </div>
  );
};

export default SubjectsList;
