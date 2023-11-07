import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetTypeActivitiesLastYear } from '@app/store/slices/legalEntityDashboard/typeActivitiesSlice';
import { Container, Content, Title, Line } from '../TypeActivitiesStyle';

const TypeActivitiesYear: React.FC = () => {
  const typeActivitiesYear = useAppSelector((state) => state.typeActivities.typeActivitiesYear);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesLastYear(filters));
  }, [dispatch, filters]);

  return (
    <Container>
      <Title>Виды деятельности (Год)</Title>
      <Content>
        {typeActivitiesYear.results.slice(0, 30).map((typeActivity, index) => (
          <Line key={index} value={index}>
            <span>{typeActivity.group_fields.type_activity_name}</span>
            <span>{typeActivity.Count}</span>
          </Line>
        ))}
      </Content>
    </Container>
  );
};

export default TypeActivitiesYear;
