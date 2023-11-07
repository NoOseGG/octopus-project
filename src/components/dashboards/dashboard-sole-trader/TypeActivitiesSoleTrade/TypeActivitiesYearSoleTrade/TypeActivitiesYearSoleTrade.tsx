import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Container,
  Content,
  Line,
  Title,
} from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesStyle';
import { doGetTypeActivitiesLastYearSoleTrade } from '@app/store/slices/dashboardSoleTrader/typeActivitiesSoleTradeSlice';

const TypeActivitiesYearSoleTrade: React.FC = () => {
  const typeActivitiesYear = useAppSelector((state) => state.typeActivitiesSoleTrade.typeActivitiesYear.results);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesLastYearSoleTrade(filters));
  }, [dispatch, filters]);

  return (
    <>
      {Boolean(typeActivitiesYear.length) && (
        <Container>
          <Title>Виды деятельности (Год)</Title>
          <Content>
            {typeActivitiesYear.slice(0, 30).map((typeActivity, index) => (
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

export default TypeActivitiesYearSoleTrade;
