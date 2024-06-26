import React from 'react';
import Description from '@app/components/dashboards/profile-info/components/GeneralInformation/Description/Description';
import Indicators from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/Indicators';
import StatusesTypes from '@app/components/dashboards/profile-info/components/GeneralInformation/StatusesType/StatusesType';
import LegalEntityType from '@app/components/dashboards/profile-info/components/GeneralInformation/LegalEntityType/LegalEntityType';
import EconomicHighRiskRegistry from '@app/components/dashboards/profile-info/components/GeneralInformation/EconomicHighRiskRegistry/EconomicHighRiskRegistry';
import TitleName from '@app/components/dashboards/profile-info/components/GeneralInformation/TitleName/TitleName';
import MainInfoTest from '@app/components/dashboards/profile-info/components/GeneralInformation/MainInfoTest/MainInfoTest';
import ContactsTest from '@app/components/dashboards/profile-info/components/GeneralInformation/ContactsTest/ContactsTest';
import LicensesTest from '@app/components/dashboards/profile-info/components/GeneralInformation/LicensesTest/LicensesTest';
import CompetitorsTest from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CompetitorsTest';
import OtherRelevantInformation from '@app/components/dashboards/profile-info/components/GeneralInformation/OtherRelevantInformation/OtherRelevantInformation';
import TaxOfficesArrearsTest from '@app/components/dashboards/profile-info/components/GeneralInformation/TaxOfficesArearsTest/TaxOfficesArrearsTest';
import GiasTest from '@app/components/dashboards/profile-info/components/GeneralInformation/GiasTest/GiasTest';
import LevelOfReliability from '@app/components/dashboards/profile-info/components/GeneralInformation/LevelOfReliability/LevelOfReliability';
import RatingByKing from '@app/components/dashboards/profile-info/components/GeneralInformation/RatingByKind/RatingByKing';

const GeneralInformationTest: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TitleName />
      <LevelOfReliability />
      <Description />
      <Indicators />
      <MainInfoTest />
      <ContactsTest />
      <TaxOfficesArrearsTest />
      <LicensesTest />
      <GiasTest />
      <StatusesTypes />
      <LegalEntityType />
      <EconomicHighRiskRegistry />
      <OtherRelevantInformation />
      <RatingByKing />
      <CompetitorsTest />
    </div>
  );
};

export default GeneralInformationTest;
