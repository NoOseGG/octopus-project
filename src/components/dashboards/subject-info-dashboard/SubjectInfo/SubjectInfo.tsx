import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchProfile } from '@app/store/slices/searchProfileSlice';
import styles from './SubjectInfo.module.css';
import { Spin } from 'antd';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SubjectMainContentTest from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectMainContent/SubjectMainContent';
import SubjectEmailsTest from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectContacts/SubjectContacts';
import SubjectVacancies from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectVacancies/SubjectVacancies';
import SubjectLegalForms from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectLegalForms/SubjectLegalForms';
import SubjectDescriptions from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectDescriptions/SubjectDescriptions';
import SubjectLicenses from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectLicenses/SubjectLicenses';
import SubjectStatus from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectStatus/SubjectStatus';
import SubjectStatusType from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectStatusType/SubjectStatusType';
import SubjectCountry from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectCountry/SubjectCountry';
import SubjectTypeActivity from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectTypeActivity/SubjectTypeActivity';
import SubjectCommercialRegister from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectCommercialRegister/SubjectCommercialRegister';
import SubjectGiasAccreditedCustomer from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasAccreditedCustomer';
import SubjectGiasAccreditedParticipant from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasAccreditedParticipant';
import SubjectGiasBlackList from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasBlackList';
import SubjectGiasPlan from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasPlan';
import SubjectGiasCompaintSubmit from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasCompaintSubmit';
import SubjectGiasCompaintReceive from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasCompaintReceive';
import SubjectGovernmentInspection from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectGovernmentInspection/SubjectGovernmentInspection';
import SubjectConstituentDoc from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectConstituentDoc/SubjectConstituentDoc';
import SubjectTaxes from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectTaxes/SubjectTaxes';
import SubjectIceTrade from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTrade';
import SubjectStateBodies from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectStateBodies/SubjectStateBodies';
import SubjectEconomicHighRiskRegistry from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectEconomicHighRiskRegistry/SubjectEconomicHighRiskRegistry';

const SubjectInfo: React.FC = () => {
  const { unn } = useParams();
  const { profile, loading, error } = useAppSelector((state) => state.searchProfile);
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
          {Boolean(profile.names.length > 0) && (
            <>
              <Title>{profile.names[0].full_name}</Title>
              <SubTitle>({profile.names[0].short_name})</SubTitle>
            </>
          )}

          {Boolean(profile.descriptions.length > 0) && <SubjectDescriptions descriptions={profile.descriptions} />}
          <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
            <SubjectMainContentTest subject={profile} />
            <SubjectEmailsTest
              emails={profile.emails}
              phones={profile.phones}
              addresses={profile.addresses}
              webSites={profile.web_sites}
            />
            <SubjectTaxes taxOffices={profile.tax_offices} taxOfficesArrears={profile.tax_offices_arrears} />
          </div>
          {Boolean(profile.vacancy.length) && <SubjectVacancies vacancies={profile.vacancy} />}
          <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
            {Boolean(profile.legal_forms.length) && <SubjectLegalForms legalForms={profile.legal_forms} />}
            {Boolean(profile.licenses.length) && <SubjectLicenses licenses={profile.licenses} />}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, marginTop: 10 }}>
            {Boolean(profile.icetrade_customer.length) && (
              <SubjectIceTrade
                icetrade_customer={profile.icetrade_customer}
                icetrade_participant={profile.icetrade_participant}
                icetrade_other_participant={profile.icetrade_participant}
                icetrade_organizer_negotiations={profile.icetrade_organizer_negotiations}
                icetrade_organizer={profile.icetrade_organizer}
              />
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', gap: 20, marginTop: 10 }}>
            {Boolean(profile.statuses.length) && <SubjectStatus statuses={profile.statuses} />}
            {Boolean(profile.statuses_types.length) && <SubjectStatusType statusesType={profile.statuses_types} />}
            {Boolean(profile.countries.length) && <SubjectCountry countries={profile.countries} />}
            {Boolean(profile.types_activities.length) && (
              <SubjectTypeActivity typeActivities={profile.types_activities} />
            )}
          </div>
          <div>
            {Boolean(profile.commercial_register.length) && (
              <SubjectCommercialRegister commercialRegisters={profile.commercial_register} />
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 10 }}>
            {Boolean(profile.gias_accredited_customer.length) && (
              <SubjectGiasAccreditedCustomer giasAccreditedCustomer={profile.gias_accredited_customer} />
            )}
            {Boolean(profile.gias_accredited_participant.length) && (
              <SubjectGiasAccreditedParticipant giasAccreditedPaticipant={profile.gias_accredited_participant} />
            )}
            {Boolean(profile.gias_black_list.length) && (
              <SubjectGiasBlackList giasBlackList={profile.gias_black_list} />
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            {Boolean(profile.gias_plan.length) && <SubjectGiasPlan giasPlan={profile.gias_plan} />}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 10 }}>
            {Boolean(profile.gias_complaint_submit.length) && (
              <SubjectGiasCompaintSubmit giasComplaintSubmit={profile.gias_complaint_submit} />
            )}
            {Boolean(profile.gias_complaint_receive.length) && (
              <SubjectGiasCompaintReceive giasComplaintReceive={profile.gias_complaint_receive} />
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            {Boolean(profile.government_inspection.length) && (
              <SubjectGovernmentInspection governmentInspections={profile.government_inspection} />
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            {Boolean(profile.constituent_doc.length) && (
              <SubjectConstituentDoc constituent_doc={profile.constituent_doc} />
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 10 }}>
            {Boolean(profile.economic_high_risk_registry.length) && (
              <SubjectStateBodies state_bodies={profile.states_bodies} />
            )}
            {Boolean(profile.economic_high_risk_registry.length) && (
              <SubjectEconomicHighRiskRegistry economic_high_risk_registry={profile.economic_high_risk_registry} />
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

const SubTitle = styled.div`
  width: 100%;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;
