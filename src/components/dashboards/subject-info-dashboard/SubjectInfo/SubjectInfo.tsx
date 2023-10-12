import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchProfile } from '@app/store/slices/searchProfileSlice';
import styles from './SubjectInfo.module.css';
import { Spin } from 'antd';
import styled from 'styled-components';
import SubjectMainContentTest from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectMainContentTest/SubjectMainContentTest';
import SubjectEmailsTest from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectContactsTest/SubjectContactsTest';
import SubjectTaxOffices from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectTaxOffices/SubjectTaxOffices';
import SubjectVacancies from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectVacancies/SubjectVacancies';
import SubjectLegalForms from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectLegalForms/SubjectLegalForms';
import SubjectDescriptions from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectDescriptions/SubjectDescriptions';
import SubjectLicenses from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectLicenses/SubjectLicenses';
import SubjectIceTradeLiquidPlot from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIcaTradeCustomer/SubjectIceTradeLiquidPlot';
import SubjectIceTradeCustomer from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIcaTradeCustomer/SubjectIceTradeCustomer';

const SubjectInfo: React.FC = () => {
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
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 10 }}>
            {Boolean(profile.icetrade_customer.length) && (
              <SubjectIceTradeLiquidPlot icetrade_customer={profile.icetrade_customer} />
            )}
            {Boolean(profile.icetrade_customer.length) && (
              <SubjectIceTradeCustomer icetrade_customer={profile.icetrade_customer} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SubjectInfo;

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
