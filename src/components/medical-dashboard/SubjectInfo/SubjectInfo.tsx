import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import axios from 'axios';
import { setSubject, setSubjectError } from '@app/store/slices/subjectSlice';
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
import { readToken } from '@app/services/localStorage.service';
import { Spin } from 'antd';
import styled from 'styled-components';
import { TOKEN_NAME, URLS } from '@app/constants/Constants';

const SubjectInfo: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const unn = useAppSelector((state) => state.search.unn);
  const subject = useAppSelector((state) => state.subject.subject);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchSubject() {
      setLoading(true);
      try {
        const response = await axios.get(URLS.SEARCH_SUBJECT, {
          headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
          params: { unn: unn },
        });
        dispatch(setSubject(response.data));
        setLoading(false);
      } catch (error) {
        dispatch(setSubjectError(error));
      }
    }

    fetchSubject();
  }, [unn]);

  return (
    <div className={styles.container}>
      {loading && (
        <SpinnerSpace>
          <Spin size="large" tip="Загрузка данных . . ." />
        </SpinnerSpace>
      )}
      {!loading && (
        <div>
          <SubjectMainContent subject={subject} />
          <SubjectEmails emails={subject.emails} />
          <SubjectAddresses addresses={subject.addresses} />
          <SubjectPhones phones={subject.phones} />
          <SubjectWebSites webSites={subject.web_sites} />
          <SubjectDescriptions descriptions={subject.descriptions} />
          <SubjectTaxOffices taxOffices={subject.tax_offices} />
          <SubjectTaxOfficesArea taxOfficesArea={subject.tax_offices} />
          <SubjectLegalForms legalForms={subject.legal_forms} />
          <SubjectTypesActivities typesActivities={subject.types_activities} />
          <SubjectStatuses statuses={subject.statuses} />
          <SubjectCountries countries={subject.countries} />
          <SubjectStatusesType statusesType={subject.statuses_types} />
          <SubjectStatesBodies statesBodies={subject.states_bodies} />
          <SubjectLicenses licenses={subject.licenses} />
          <SubjectVacancy vacancies={subject.vacancy} />
          <SubjectCommercialRegister commercialsRegister={subject.commercial_register} />
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
