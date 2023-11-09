import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Container,
  Content,
  Title,
  Line,
  SpinnerSpace,
} from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesStyle';
import { Spin } from 'antd';
import { doGetTypeActivitiesLastQuarterSoleTrade } from '@app/store/slices/dashboardSoleTrader/typeActivities/typeActivitiesQuarterSoleTrade';

const TypeActivitiesQuarterSoleTrade: React.FC = () => {
  const { typeActivities, loading } = useAppSelector((state) => state.typeActivitiesSoleTrade.typeActivitiesQuarter);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesLastQuarterSoleTrade(filters));
  }, [dispatch, filters]);

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

export default TypeActivitiesQuarterSoleTrade;
