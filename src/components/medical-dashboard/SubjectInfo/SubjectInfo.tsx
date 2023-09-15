import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import axios from 'axios';
import { setSubject, setSubjectError } from '@app/store/slices/subjectSlice';
import styles from './SubjectInfo.module.css';
import SubjectEmails from '@app/components/medical-dashboard/SubjectInfo/components/SubjectEmails/SubjectEmails';
import SubjectNames from '@app/components/medical-dashboard/SubjectInfo/components/SubjectNames/SubjectNames';
import { dateTransformate } from '@app/utils/utils';
import MainContent from '@app/components/layouts/main/MainContent/MainContent';
import SubjectMainContent from '@app/components/medical-dashboard/SubjectInfo/components/SubjectMainContent/SubjectMainContent';
import SubjectAddresses from '@app/components/medical-dashboard/SubjectInfo/components/SubjectAddresses/SubjectAddresses';

const SubjectInfo: React.FC = () => {
  const unn = useAppSelector((state) => state.search.unn);
  const subject = useAppSelector((state) => state.subject.subject);
  const dispatch = useAppDispatch();

  console.log(`UNN = ${unn}`);

  useEffect(() => {
    async function fetchSubject() {
      try {
        const response = await axios.get(`http://93.125.0.140:1338/api/v1/profile/?unn=${unn}`);
        dispatch(setSubject(response.data));
      } catch (error) {
        dispatch(setSubjectError(error));
      }
    }

    fetchSubject();
  }, [unn]);

  console.log(JSON.stringify(subject));

  return (
    <div className={styles.container}>
      <SubjectMainContent subject={subject} />
      <SubjectEmails emails={subject.emails} />
      <SubjectAddresses addresses={subject.addresses} />
    </div>
  );
};

export default SubjectInfo;
