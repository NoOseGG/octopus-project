import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchProfile } from '@app/store/slices/searchProfileSlice';
import styles from '@app/components/medical-dashboard/SubjectInfo/SubjectInfo.module.css';
import { Spin } from 'antd';
import styled from 'styled-components';
import SubjectMainContentTest from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectMainContentTest/SubjectMainContentTest';
import SubjectEmailsTest from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectContactsTest/SubjectContactsTest';

const SubjectInfoTest: React.FC = () => {
  const unn = useAppSelector((state) => state.search.unn);
  const { profile, loading } = useAppSelector((state) => state.searchProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doSearchProfile(unn));
  }, [unn, dispatch]);

  return (
    <div className={styles.container}>
      {loading && (
        <SpinnerSpace>
          <Spin size="large" tip="Загрузка данных . . ." />
        </SpinnerSpace>
      )}
      {!loading && (
        <div style={{ display: 'flex', gap: 20 }}>
          <SubjectMainContentTest subject={profile} />
          <SubjectEmailsTest emails={profile.emails} phones={profile.phones} />
        </div>
      )}
    </div>
  );
};

export default SubjectInfoTest;

const SpinnerSpace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
