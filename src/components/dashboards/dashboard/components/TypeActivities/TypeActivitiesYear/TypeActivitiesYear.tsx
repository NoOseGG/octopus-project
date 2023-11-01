import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetTypeActivities } from '@app/store/slices/typeActivitiesSlice';
import { Container, Content, Title, Line } from '../TypeActivitiesStyle';

const TypeActivitiesYear: React.FC = () => {
  const typeActivities = useAppSelector((state) => state.typeActivities.typeActivities);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivities(filters));
  }, [dispatch, filters]);

  console.log(JSON.stringify(typeActivities));

  return (
    <Container>
      <Title>Виды деятельности (Год)</Title>
      <Content>
        {typeActivities.results.slice(1, 31).map((typeActivity, index) => (
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
