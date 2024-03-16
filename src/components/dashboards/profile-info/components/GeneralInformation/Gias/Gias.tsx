import React from 'react';
import GiasAccreditedCustomer from '@app/components/dashboards/profile-info/components/GeneralInformation/Gias/GiasAccreditedCustomer';
import GiasAccreditedParticipant from '@app/components/dashboards/profile-info/components/GeneralInformation/Gias/GiasAccreditedParticipant';
import GiasBlackList from '@app/components/dashboards/profile-info/components/GeneralInformation/Gias/GiasBlackList';
import GiasComplaintSubmit from '@app/components/dashboards/profile-info/components/GeneralInformation/Gias/GiasComplaintSubmit';
import GiasComplaintReceive from '@app/components/dashboards/profile-info/components/GeneralInformation/Gias/GiasComplaintReceive';

const Gias: React.FC = () => {
  return (
    <>
      <GiasAccreditedCustomer />
      <GiasAccreditedParticipant />
      <GiasBlackList />
      <GiasComplaintSubmit />
      <GiasComplaintReceive />
    </>
  );
};

export default Gias;
