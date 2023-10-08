import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchProfile } from '@app/store/slices/searchProfileSlice';
import styles from '@app/components/medical-dashboard/SubjectInfo/SubjectInfo.module.css';
import { Spin } from 'antd';
import styled from 'styled-components';
import SubjectMainContentTest from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectMainContentTest/SubjectMainContentTest';
import SubjectEmailsTest from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectContactsTest/SubjectContactsTest';
import SubjectTaxOffices from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectTaxOffices/SubjectTaxOffices';

const SubjectInfoTest: React.FC = () => {
  const unn = useAppSelector((state) => state.search.unn);
  const { profile, loading, error } = useAppSelector((state) => state.searchProfile);
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
      {error && <h1>Ошибка получения данных</h1>}
      {!loading && !error && (
        <div style={{ display: 'flex', gap: 20 }}>
          <SubjectMainContentTest subject={profile} />
          <SubjectEmailsTest emails={profile.emails} phones={profile.phones} addresses={profile.addresses} />
          <SubjectTaxOffices taxOffices={profile.tax_offices} taxOfficesArea={profile.tax_offices_arrears} />
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
