import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetTypeActivitiesLastMonth } from '@app/store/slices/legalEntityDashboard/typeActivitiesSlice';
import { Container, Content, Title, Line } from '../TypeActivitiesStyle';

const TypeActivitiesMonth: React.FC = () => {
  const typeActivitiesMonth = useAppSelector((state) => state.typeActivities.typeActivitiesMonth.results);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesLastMonth(filters));
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

export default TypeActivitiesMonth;
