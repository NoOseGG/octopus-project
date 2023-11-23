import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Container } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { Divider } from 'antd';
import { InspectionsProps } from '@app/components/dashboards/dashboard/components/Inspection/components/InspectionsTypes';
import CountChecked from '@app/components/dashboards/dashboard/components/Inspection/components/CountChecked/CountChecked';

const Inspections: React.FC<InspectionsProps> = ({ all, liquidated, bankrupted }) => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  return (
    <>
      <Divider />
      <Container value={isDate}>
        <CountChecked countChecked={all} />
      </Container>
    </>
  );
};

export default Inspections;
