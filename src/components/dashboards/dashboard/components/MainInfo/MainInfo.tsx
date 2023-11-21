import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Container } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import CountCompany from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CountCompany';
import CountYear from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYear';
import { MainInfoProps } from '@app/components/dashboards/dashboard/components/MainInfo/MainInfoTypes';
import { COUNT_TYPE } from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CountCompanyTypes';
import { Divider } from 'antd';

const MainInfo: React.FC<MainInfoProps> = ({ all, year, quarter, operation, percent }) => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  return (
    <>
      <Divider />
      <Container value={isDate}>
        <CountCompany countCompany={all} />
        <CountYear countYear={year} percentYear={percent} />
        <CountCompany countCompany={quarter} />
        {operation !== COUNT_TYPE.NONE && <CountCompany countCompany={operation} />}
      </Container>
    </>
  );
};

export default MainInfo;
