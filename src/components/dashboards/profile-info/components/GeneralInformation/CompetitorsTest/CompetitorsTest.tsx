import React, { useEffect } from 'react';
import { Container } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import CountYearCompetitors from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CountYearCompetitors';
import { useAppSelector } from '@app/hooks/reduxHooks';
import CountAllCompetitors from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CountAllCompetitors';
import CountQuarterCompetitors from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CountQuarterCompetitors';
import CountOperatingCompetitors from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CountOperatingCompetitors';

const CompetitorsTest: React.FC = () => {
  const addresses = useAppSelector((state) => state.searchProfile.profile.addresses);
  const typeActivities = useAppSelector((state) => state.searchProfile.profile.types_activities);

  useEffect(() => {
    console.log(addresses[0]?.settlement);
  }, [addresses]);

  return (
    <Container value={false}>
      {addresses[0]?.settlement && typeActivities[0]?.name && (
        <>
          <CountAllCompetitors settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
          <CountYearCompetitors settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
          <CountQuarterCompetitors settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
          <CountOperatingCompetitors settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
        </>
      )}
    </Container>
  );
};

export default CompetitorsTest;