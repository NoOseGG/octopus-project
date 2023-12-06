import React from 'react';
import Description from '@app/components/dashboards/profile-info/components/GeneralInformation/Description/Description';
import MainInfo from '@app/components/dashboards/profile-info/components/GeneralInformation/MainInfo/MainInfo';
import Contacts from '@app/components/dashboards/profile-info/components/GeneralInformation/Contacts/Contacts';
import BasicDetails from '@app/components/dashboards/profile-info/components/GeneralInformation/BasicDetails/BasicDetails';
import TypeActivities from '@app/components/dashboards/profile-info/components/GeneralInformation/TypeActivities/TypeActivities';

const GeneralInformation: React.FC = () => {
  return (
    <>
      <Description />
      <MainInfo />
      <Contacts />
      <BasicDetails />
      <TypeActivities />
    </>
  );
};

export default GeneralInformation;
