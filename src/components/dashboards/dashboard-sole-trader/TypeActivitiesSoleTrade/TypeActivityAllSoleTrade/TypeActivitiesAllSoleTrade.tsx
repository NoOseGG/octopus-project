import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Container,
  Content,
  Line,
  Title,
} from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesStyle';
import { doGetTypeActivitiesSoleTrade } from '@app/store/slices/dashboardSoleTrader/typeActivitiesSoleTradeSlice';

const TypeActivitiesAllSoleTrade: React.FC = () => {
  const typeActivities = useAppSelector((state) => state.typeActivitiesSoleTrade.typeActivities.results);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesSoleTrade(filters));
  }, [dispatch, filters]);

  return (
    <>
      {Boolean(typeActivities.length) && (
        <Container>
          <Title>Виды деятельности</Title>
          <Content>
            {typeActivities.map((typeActivity, index) => (
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

export default TypeActivitiesAllSoleTrade;
