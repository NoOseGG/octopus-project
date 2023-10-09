import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchProfile } from '@app/store/slices/searchProfileSlice';
import styles from '@app/components/medical-dashboard/SubjectInfo/SubjectInfo.module.css';
import { Spin } from 'antd';
import styled from 'styled-components';
import SubjectMainContentTest from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectMainContentTest/SubjectMainContentTest';
import SubjectEmailsTest from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectContactsTest/SubjectContactsTest';
import SubjectTaxOffices from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectTaxOffices/SubjectTaxOffices';
import SubjectVacancies from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectVacancies/SubjectVacancies';
import SubjectLegalForms from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectLegalForms/SubjectLegalForms';
import SubjectDescriptions from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectDescriptions/SubjectDescriptions';
import SubjectLicenses from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectLicenses/SubjectLicenses';

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
        <>
          {Boolean(profile.names.length > 0) && <Title>{profile.names[0].full_name}</Title>}
          {Boolean(profile.descriptions.length > 0) && <SubjectDescriptions descriptions={profile.descriptions} />}
          <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
            <SubjectMainContentTest subject={profile} />
            <SubjectEmailsTest
              emails={profile.emails}
              phones={profile.phones}
              addresses={profile.addresses}
              webSites={profile.web_sites}
            />
            <SubjectTaxOffices taxOffices={profile.tax_offices} taxOfficesArea={profile.tax_offices_arrears} />
          </div>
          <SubjectVacancies vacancies={profile.vacancy} />
          <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
            <SubjectLegalForms legalForms={profile.legal_forms} />
            <SubjectLicenses licenses={profile.licenses} />
          </div>
        </>
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

const Title = styled.div`
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;
