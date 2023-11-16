import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchProfile } from '@app/store/slices/searchProfileSlice';
import styles from './SubjectInfo.module.css';
import { Spin } from 'antd';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SubjectMainContentTest from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectMainContent/SubjectMainContent';
import SubjectContacts from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectContacts/SubjectContacts';
import SubjectDescriptions from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectDescriptions/SubjectDescriptions';
import SubjectTaxes from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectTaxes/SubjectTaxes';
import SubjectName from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectName/SubjectName';
import { Container } from '@app/components/dashboards/search-dashboard/SubjectInfo/SubjectInfoStyle';
import SubjectVacancies from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectVacancies/SubjectVacancies';
import SubjectResume from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectResume/SubjectResume';
import SubjectIndicators from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectIndicators/SubjectIndicators';
import SubjectLegalForms from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectLegalForms/SubjectLegalForms';
import SubjectLicenses from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectLicenses/SubjectLicenses';
import SubjectIceTrade from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTrade';
import SubjectStatusType from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectStatusType/SubjectStatusType';
import SubjectCountry from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectCountry/SubjectCountry';
import SubjectTypeActivity from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectTypeActivity/SubjectTypeActivity';
import SubjectGiasComplaintSubmit from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasComplaintSubmit';
import SubjectGiasCompaintReceive from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasCompaintReceive';
import SubjectGovernmentInspection from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectGovernmentInspection/SubjectGovernmentInspection';
import SubjectConstituentDoc from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectConstituentDoc/SubjectConstituentDoc';
import SubjectStateBodies from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectStateBodies/SubjectStateBodies';
import SubjectEconomicHighRiskRegistry from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectEconomicHighRiskRegistry/SubjectEconomicHighRiskRegistry';
import SubjectLegalEntityType from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectLegalEntityType/SubjectLegalEntityType';
import SubjectGiasPlan from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasPlan/SubjectGiasPlan';
import SubjectGiasBlackList from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasBlackList';
import SubjectGiasAccreditedParticipant from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasAccreditedParticipant';
import SubjectGiasAccreditedCustomer from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasAccreditedCustomer';
import SubjectCommercialRegister from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectCommercialRegister/SubjectCommercialRegister';
import SubjectStatus from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectStatus/SubjectStatus';

const SubjectInfo: React.FC = () => {
  const { unn } = useParams();
  const { loading, error } = useAppSelector((state) => state.searchProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      if (typeof unn === 'string') {
        dispatch(doSearchProfile(unn));
      }
    } catch (error) {
      console.log(error);
    }
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
          <SubjectName />
          <SubjectDescriptions />
          <Container>
            <SubjectMainContentTest />
            <SubjectContacts />
            <SubjectTaxes />
          </Container>
          <SubjectVacancies />
          <SubjectIndicators />
          <SubjectResume />
          <Container>
            <SubjectLegalForms />
            <SubjectLicenses />
          </Container>
          <Container>
            <SubjectIceTrade />
          </Container>
          <Container>
            <SubjectStatus />
            <SubjectStatusType />
            <SubjectCountry />
            <SubjectTypeActivity />
          </Container>
          <SubjectCommercialRegister />
          <Container>
            <SubjectGiasAccreditedCustomer />
            <SubjectGiasAccreditedParticipant />
            <SubjectGiasBlackList />
          </Container>
          <Container>
            <SubjectGiasPlan />
          </Container>
          <Container>
            <SubjectGiasComplaintSubmit />
            <SubjectGiasCompaintReceive />
          </Container>
          <Container>
            <SubjectGovernmentInspection />
          </Container>
          <Container>
            <SubjectConstituentDoc />
          </Container>
          <Container>
            <SubjectStateBodies />
            <SubjectEconomicHighRiskRegistry />
            <SubjectLegalEntityType />
          </Container>
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
