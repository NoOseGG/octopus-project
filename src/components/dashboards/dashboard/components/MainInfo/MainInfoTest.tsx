import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Container } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import CountCompanyTest from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CountCompanyTest';
import { MAIN_INFO } from '@app/services/legalEntityDashboard.service';
import { Divider } from 'antd';

export type MainInfoTestProps = {
  all: MAIN_INFO;
  year: MAIN_INFO;
  quarter: MAIN_INFO;
  operation: MAIN_INFO;
  percent: MAIN_INFO;
};

const MainInfo: React.FC<MainInfoTestProps> = ({ all, year, quarter, operation, percent }) => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  return (
    <>
      <Divider />
      <Container value={isDate}>
        <CountCompanyTest type={all} />
        {/*<CountYear countYear={year} percentYear={percent} />*/}
        <CountCompanyTest type={quarter} />
        {operation !== MAIN_INFO.NONE && <CountCompanyTest type={operation} />}
      </Container>
    </>
  );
};

export default MainInfo;
