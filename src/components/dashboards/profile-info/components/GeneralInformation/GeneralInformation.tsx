import React from 'react';
import Description from '@app/components/dashboards/profile-info/components/GeneralInformation/Description/Description';
import MainInfo from '@app/components/dashboards/profile-info/components/GeneralInformation/MainInfo/MainInfo';
import Contacts from '@app/components/dashboards/profile-info/components/GeneralInformation/Contacts/Contacts';
import BasicDetails from '@app/components/dashboards/profile-info/components/GeneralInformation/BasicDetails/BasicDetails';
import TypeActivities from '@app/components/dashboards/profile-info/components/GeneralInformation/TypeActivities/TypeActivities';
import Indicators from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/Indicators';

const GeneralInformation: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.835rem' }}>
      <Description />
      <Indicators />
      <MainInfo />
      <Contacts />
      <BasicDetails />
      <TypeActivities />
    </div>
  );
};

export default GeneralInformation;
