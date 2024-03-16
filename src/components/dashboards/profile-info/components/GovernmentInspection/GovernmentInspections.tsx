import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';
import CountGovernmentInspections from '@app/components/dashboards/profile-info/components/GovernmentInspection/components/CountGovernmentInspections/CountGovernmentInspections';
import MyGovernmentInspection from '@app/components/dashboards/profile-info/components/GovernmentInspection/components/GovernmentInspection/MyGovernmentInspection';

const GovernmentInspections = () => {
  const government_inspections = useAppSelector((state) => state.searchProfile.profile.government_inspection);

  return (
    <>
      {Boolean(government_inspections.length) ? (
        <>
          <CountGovernmentInspections count={government_inspections.length} />
          <GovernmentInspectionContainer>
            {government_inspections.map((item, index) => (
              <MyGovernmentInspection governmentInspection={item} key={index} />
            ))}
          </GovernmentInspectionContainer>
        </>
      ) : (
        <h1 style={{ textAlign: 'center' }}>Резюме отсутсвуют</h1>
      )}
    </>
  );
};

export default GovernmentInspections;

const GovernmentInspectionContainer = styled.div``;
