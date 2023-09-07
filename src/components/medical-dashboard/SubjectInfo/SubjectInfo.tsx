import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import axios from 'axios';
import { setSubject, setSubjectError } from '@app/store/slices/subjectSlice';
import styles from './SubjectInfo.module.css';

const SubjectInfo: React.FC = () => {
  const unn = useAppSelector((state) => state.search.unn);
  const subject = useAppSelector((state) => state.subject.subject);
  const dispatch = useAppDispatch();

  console.log(`UNN = ${unn}`);

  useEffect(() => {
    async function fetchSubject() {
      try {
        const response = await axios.get(`http://93.125.0.140:1338/api/v1/profile/?unn=${unn}`);
        console.log(`SUBJECT I > ${response.data}`);
        dispatch(setSubject(response.data));
      } catch (error) {
        console.log(`subject ERROR ${error}`);
        dispatch(setSubjectError(error));
      }
    }

    fetchSubject();
  }, [unn]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{subject.unn}</div>
      <div className={styles.full_name}>{subject.descriptions}</div>
    </div>
  );
};

export default SubjectInfo;
