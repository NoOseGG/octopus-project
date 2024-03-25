import React from 'react';
import Description from '@app/components/dashboards/profile-info/components/GeneralInformation/Description/Description';
import Indicators from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/Indicators';
import LegalForms from '@app/components/dashboards/profile-info/components/GeneralInformation/LegalForms/LegalForms';
import StatusesTypes from '@app/components/dashboards/profile-info/components/GeneralInformation/StatusesType/StatusesType';
import TaxOfficesArrears from '@app/components/dashboards/profile-info/components/GeneralInformation/TaxOfficesArears/TaxOfficesArrears';
import SimilarSubjects from '@app/components/dashboards/profile-info/components/GeneralInformation/SimilarSubjects/SimilarSubjects';
import LegalEntityType from '@app/components/dashboards/profile-info/components/GeneralInformation/LegalEntityType/LegalEntityType';
import EconomicHighRiskRegistry from '@app/components/dashboards/profile-info/components/GeneralInformation/EconomicHighRiskRegistry/EconomicHighRiskRegistry';
import TitleName from '@app/components/dashboards/profile-info/components/GeneralInformation/TitleName/TitleName';
import Gias from '@app/components/dashboards/profile-info/components/GeneralInformation/Gias/Gias';
import OtherRelevantInformation from '@app/components/dashboards/profile-info/components/GeneralInformation/OtherRelevantInformation/OtherRelevantInformation';
import StatesBodiesTest from '@app/components/dashboards/profile-info/components/GeneralInformation/StatesBodiesTest/StatesBodiesTest';
import BasicDetailsTest from '@app/components/dashboards/profile-info/components/GeneralInformation/BasicDetailsTest/BasicDetailsTest';
import MainInfoTest from '@app/components/dashboards/profile-info/components/GeneralInformation/MainInfoTest/MainInfoTest';
import ContactsTest from '@app/components/dashboards/profile-info/components/GeneralInformation/ContactsTest/ContactsTest';
import LicensesTest from '@app/components/dashboards/profile-info/components/GeneralInformation/LicensesTest/LicensesTest';

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
      <StatesBodiesTest />
      <LegalEntityType />
      <EconomicHighRiskRegistry />
      <OtherRelevantInformation />
      <SimilarSubjects />
    </div>
  );
};

export default GeneralInformationTest;
