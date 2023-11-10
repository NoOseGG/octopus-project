import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Container,
  Content,
  Line,
  Title,
  SpinnerSpace,
} from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesStyle';
import { doGetTypeActivitiesAll } from '@app/store/slices/legalEntityDashboard/typeActivities/typeActivitiesAll';
import { Spin } from 'antd';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';

const TypeActivitiesAll: React.FC<DashboardProps> = ({ legal_entity }) => {
  const { typeActivities, loading } = useAppSelector((state) => state.typeActivities.typeActivitiesAll);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesAll({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <Container>
      {loading ? (
        <SpinnerSpace>
          <Spin size="large" />
        </SpinnerSpace>
      ) : (
        <>
          <Title>Виды деятельности</Title>
          <Content>
            {typeActivities.results?.map((typeActivity, index) => (
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

export default TypeActivitiesAll;
