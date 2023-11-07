import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Container,
  Content,
  Title,
  Line,
} from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesStyle';
import { doGetTypeActivitiesLastQuarterSoleTrade } from '@app/store/slices/dashboardSoleTrader/typeActivitiesSoleTradeSlice';

const TypeActivitiesQuarterSoleTrade: React.FC = () => {
  const typeActivitiesQuarter = useAppSelector((state) => state.typeActivitiesSoleTrade.typeActivitiesQuarter);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesLastQuarterSoleTrade(filters));
  }, [dispatch, filters]);

  return (
    <Container>
      <Title>Виды деятельности (Квартал)</Title>
      <Content>
        {typeActivitiesQuarter.results.slice(0, 30).map((typeActivity, index) => (
          <Line key={index} value={index}>
            <span>{typeActivity.group_fields.type_activity_name}</span>
            <span>{typeActivity.Count}</span>
          </Line>
        ))}
      </Content>
    </Container>
  );
};

export default TypeActivitiesQuarterSoleTrade;
