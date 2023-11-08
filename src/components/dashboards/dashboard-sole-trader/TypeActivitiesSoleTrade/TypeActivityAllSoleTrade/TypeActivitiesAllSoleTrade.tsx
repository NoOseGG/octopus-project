import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Container,
  Content,
  Line,
  SpinnerSpace,
  Title,
} from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesStyle';
import { Spin } from 'antd';
import { doGetTypeActivitiesAllSoleTrade } from '@app/store/slices/dashboardSoleTrader/typeActivities/typeActivitiesAllSoleTrade';

const TypeActivitiesAllSoleTrade: React.FC = () => {
  const { typeActivities, loading } = useAppSelector((state) => state.typeActivitiesSoleTrade.typeActivitiesAll);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesAllSoleTrade(filters));
  }, [dispatch, filters]);

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

export default TypeActivitiesAllSoleTrade;
