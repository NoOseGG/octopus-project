import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchProfile } from '@app/store/slices/searchProfileSlice';
import styles from './SubjectInfo.module.css';
import SubjectEmails from '@app/components/medical-dashboard/SubjectInfo/components/SubjectEmails/SubjectEmails';
import SubjectMainContent from '@app/components/medical-dashboard/SubjectInfo/components/SubjectMainContent/SubjectMainContent';
import SubjectAddresses from '@app/components/medical-dashboard/SubjectInfo/components/SubjectAddresses/SubjectAddresses';
import SubjectPhones from '@app/components/medical-dashboard/SubjectInfo/components/SubjectPhones/SubjectPhones';
import SubjectWebSites from '@app/components/medical-dashboard/SubjectInfo/components/SubjectWebSites/SubjectWebSites';
import SubjectDescriptions from '@app/components/medical-dashboard/SubjectInfo/components/SubjectDescriptions/SubjectDescriptions';
import SubjectTaxOfficesArea from '@app/components/medical-dashboard/SubjectInfo/components/SubjectTaxOfficesArea/SubjectTaxOfficesArea';
import SubjectLegalForms from '@app/components/medical-dashboard/SubjectInfo/components/SubjectLegalForms/SubjectLegalForms';
import SubjectTaxOffices from '@app/components/medical-dashboard/SubjectInfo/components/SubjectTaxOffices/SubjectTaxOffices';
import SubjectTypesActivities from '@app/components/medical-dashboard/SubjectInfo/components/SubjectTypesActivities/SubjectTypesActivities';
import SubjectStatuses from '@app/components/medical-dashboard/SubjectInfo/components/SubjectStatuses/SubjectStatuses';
import SubjectCountries from '@app/components/medical-dashboard/SubjectInfo/components/SubjectCountries/SubjectCountries';
import SubjectStatusesType from '@app/components/medical-dashboard/SubjectInfo/components/SubjectStatusesType/SubjectStatusesType';
import SubjectStatesBodies from '@app/components/medical-dashboard/SubjectInfo/components/SubjectStatesBodies/SubjectStatesBodies';
import SubjectLicenses from '@app/components/medical-dashboard/SubjectInfo/components/SubjectLicenses/SubjectLicenses';
import SubjectVacancy from '@app/components/medical-dashboard/SubjectInfo/components/SubjectVacancy/SubjectVacancy';
import SubjectCommercialRegister from '@app/components/medical-dashboard/SubjectInfo/components/SubjectCommercialRegister/SubjectCommercialRegister';
import { Spin } from 'antd';
import styled from 'styled-components';
import SubjectIceTradeCustomer from '@app/components/medical-dashboard/SubjectInfo/components/SubjectIceTradeCustomer/SubjectIceTradeCustomer';

const SubjectInfo: React.FC = () => {
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
        <div>
          <SubjectMainContent subject={profile} />
          <SubjectEmails emails={profile.emails} />
          <SubjectAddresses addresses={profile.addresses} />
          <SubjectPhones phones={profile.phones} />
          <SubjectWebSites webSites={profile.web_sites} />
          <SubjectDescriptions descriptions={profile.descriptions} />
          <SubjectTaxOffices taxOffices={profile.tax_offices} />
          <SubjectTaxOfficesArea taxOfficesArea={profile.tax_offices} />
          <SubjectLegalForms legalForms={profile.legal_forms} />
          <SubjectTypesActivities typesActivities={profile.types_activities} />
          <SubjectStatuses statuses={profile.statuses} />
          <SubjectCountries countries={profile.countries} />
          <SubjectStatusesType statusesType={profile.statuses_types} />
          <SubjectStatesBodies statesBodies={profile.states_bodies} />
          <SubjectLicenses licenses={profile.licenses} />
          <SubjectVacancy vacancies={profile.vacancy} />
          <SubjectCommercialRegister commercialsRegister={profile.commercial_register} />
          <SubjectIceTradeCustomer iceTradeCustomers={profile.icetrade_customer} />
        </div>
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
