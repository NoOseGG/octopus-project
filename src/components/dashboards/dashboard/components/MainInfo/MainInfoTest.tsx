import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Container } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import CountCompanyTest from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CountCompanyTest';
import { MAIN_INFO } from '@app/services/legalEntityDashboard/legalEntityDashboard.service';
import { Divider } from 'antd';
import CountYearTest from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYearTest';

export type MainInfoTestProps = {
  all: MAIN_INFO;
  year: MAIN_INFO;
  quarter: MAIN_INFO;
  operation: MAIN_INFO;
  percentLastYear: MAIN_INFO;
  percentTwoLastYear: MAIN_INFO;
};

const MainInfoTest: React.FC<MainInfoTestProps> = ({
  all,
  year,
  quarter,
  operation,
  percentLastYear,
  percentTwoLastYear,
}) => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  return (
    <>
      <Divider />
      <Container value={isDate}>
        <CountCompanyTest type={all} />
        {year === MAIN_INFO.CHECKED_LIQUIDATED ? (
          <CountCompanyTest type={year} />
        ) : (
          <CountYearTest countYear={year} percentLastYear={percentLastYear} percentTwoLastYear={percentTwoLastYear} />
        )}
        <CountCompanyTest type={quarter} />
        {operation !== MAIN_INFO.NONE && <CountCompanyTest type={operation} />}
      </Container>
    </>
  );
};

export default MainInfoTest;
