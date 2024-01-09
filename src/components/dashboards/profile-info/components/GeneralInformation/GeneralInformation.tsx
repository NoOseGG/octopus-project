import React from 'react';
import Description from '@app/components/dashboards/profile-info/components/GeneralInformation/Description/Description';
import MainInfo from '@app/components/dashboards/profile-info/components/GeneralInformation/MainInfo/MainInfo';
import Contacts from '@app/components/dashboards/profile-info/components/GeneralInformation/Contacts/Contacts';
import BasicDetails from '@app/components/dashboards/profile-info/components/GeneralInformation/BasicDetails/BasicDetails';
import TypeActivities from '@app/components/dashboards/profile-info/components/GeneralInformation/TypeActivities/TypeActivities';
import Indicators from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/Indicators';
import Licenses from '@app/components/dashboards/profile-info/components/GeneralInformation/Licenses/Licenses';
import LegalForms from '@app/components/dashboards/profile-info/components/GeneralInformation/LegalForms/LegalForms';
import StatusesTypes from '@app/components/dashboards/profile-info/components/GeneralInformation/StatusesType/StatusesType';
import StatesBodies from '@app/components/dashboards/profile-info/components/GeneralInformation/StatesBodies/StatesBodies';
import TaxOfficesArrears from '@app/components/dashboards/profile-info/components/GeneralInformation/TaxOfficesArears/TaxOfficesArrears';
import SimilarSubjects from '@app/components/dashboards/profile-info/components/GeneralInformation/SimilarSubjects/SimilarSubjects';
import LegalEntityType from '@app/components/dashboards/profile-info/components/GeneralInformation/LegalEntityType/LegalEntityType';
import EconomicHighRiskRegistry from '@app/components/dashboards/profile-info/components/GeneralInformation/EconomicHighRiskRegistry/EconomicHighRiskRegistry';

const GeneralInformation: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.835rem' }}>
      <Description />
      <Indicators />
      <MainInfo />
      <Contacts />
      <BasicDetails />
      <TaxOfficesArrears />
      <TypeActivities />
      <Licenses />
      <LegalForms />
      <StatusesTypes />
      <StatesBodies />
      <LegalEntityType />
      <EconomicHighRiskRegistry />
      <SimilarSubjects />
    </div>
  );
};

export default GeneralInformation;
