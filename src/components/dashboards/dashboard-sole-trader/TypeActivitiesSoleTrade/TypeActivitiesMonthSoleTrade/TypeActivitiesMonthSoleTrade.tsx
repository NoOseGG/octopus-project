import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Container,
  Content,
  Title,
  Line,
} from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesStyle';
import { doGetTypeActivitiesLastMonthSoleTrade } from '@app/store/slices/dashboardSoleTrader/typeActivitiesSoleTradeSlice';

const TypeActivitiesMonthSoleTrade: React.FC = () => {
  const typeActivitiesMonth = useAppSelector((state) => state.typeActivitiesSoleTrade.typeActivitiesMonth.results);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesLastMonthSoleTrade(filters));
  }, [dispatch, filters]);

  return (
    <>
      {Boolean(typeActivitiesMonth.length) && (
        <Container>
          <Title>Виды деятельности (Месяц)</Title>
          <Content>
            {typeActivitiesMonth.slice(0, 30).map((typeActivity, index) => (
              <Line key={index} value={index}>
                <span>{typeActivity.group_fields.type_activity_name}</span>
                <span>{typeActivity.Count}</span>
              </Line>
            ))}
          </Content>
        </Container>
      )}
    </>
  );
};

export default TypeActivitiesMonthSoleTrade;
