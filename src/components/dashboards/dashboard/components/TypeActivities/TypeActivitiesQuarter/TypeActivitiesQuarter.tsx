import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Container, Content, Title, Line, SpinnerSpace } from '../TypeActivitiesStyle';
import { doGetTypeActivitiesLastQuarter } from '@app/store/slices/legalEntityDashboard/typeActivities/typeActivitiesQuarter';
import { Spin } from 'antd';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';

const TypeActivitiesQuarter: React.FC<DashboardProps> = ({ legal_entity }) => {
  const { typeActivities, loading } = useAppSelector((state) => state.typeActivities.typeActivitiesQuarter);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesLastQuarter({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <Container>
      {loading ? (
        <SpinnerSpace>
          <Spin size="large" />
        </SpinnerSpace>
      ) : (
        <>
          <Title>Виды деятельности (Квартал)</Title>
          <Content>
            {typeActivities.results?.slice(0, 30)?.map((typeActivity, index) => (
              <Line key={index} value={index}>
                <span>{typeActivity.group_fields.type_activity_name}</span>
                <span>{typeActivity.Count}</span>
              </Line>
            ))}
          </Content>
        </>
      )}
    </Container>
  );
};

export default TypeActivitiesQuarter;
