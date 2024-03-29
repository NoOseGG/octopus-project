import React from 'react';
import Description from '@app/components/dashboards/profile-info/components/GeneralInformation/Description/Description';
import Indicators from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/Indicators';
import LegalForms from '@app/components/dashboards/profile-info/components/GeneralInformation/LegalForms/LegalForms';
import StatusesTypes from '@app/components/dashboards/profile-info/components/GeneralInformation/StatusesType/StatusesType';
import TaxOfficesArrears from '@app/components/dashboards/profile-info/components/GeneralInformation/TaxOfficesArears/TaxOfficesArrears';
import LegalEntityType from '@app/components/dashboards/profile-info/components/GeneralInformation/LegalEntityType/LegalEntityType';
import EconomicHighRiskRegistry from '@app/components/dashboards/profile-info/components/GeneralInformation/EconomicHighRiskRegistry/EconomicHighRiskRegistry';
import TitleName from '@app/components/dashboards/profile-info/components/GeneralInformation/TitleName/TitleName';
import Gias from '@app/components/dashboards/profile-info/components/GeneralInformation/Gias/Gias';
import BasicDetailsTest from '@app/components/dashboards/profile-info/components/GeneralInformation/BasicDetailsTest/BasicDetailsTest';
import MainInfoTest from '@app/components/dashboards/profile-info/components/GeneralInformation/MainInfoTest/MainInfoTest';
import ContactsTest from '@app/components/dashboards/profile-info/components/GeneralInformation/ContactsTest/ContactsTest';
import LicensesTest from '@app/components/dashboards/profile-info/components/GeneralInformation/LicensesTest/LicensesTest';
import CompetitorsTest from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CompetitorsTest';

const GeneralInformationTest: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.835rem' }}>
      <TitleName />
      <Description />
      <Indicators />
      <MainInfoTest />
      <ContactsTest />
      <BasicDetailsTest />
      <TaxOfficesArrears />
      <LicensesTest />
      <LegalForms />
      <Gias />
      <StatusesTypes />
      {/*<StatesBodiesTest />*/}
      <LegalEntityType />
      <EconomicHighRiskRegistry />
      <CompetitorsTest />
      {/*<OtherRelevantInformation />*/}
      {/*<SimilarSubjects />*/}
    </div>
  );
};

export default GeneralInformationTest;
