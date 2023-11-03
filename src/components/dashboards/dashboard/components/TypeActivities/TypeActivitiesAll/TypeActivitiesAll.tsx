import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetTypeActivities } from '@app/store/slices/typeActivitiesSlice';
import {
  Container,
  Content,
  Line,
  Title,
} from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesStyle';

const TypeActivitiesAll: React.FC = () => {
  const typeActivities = useAppSelector((state) => state.typeActivities.typeActivities);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivities(filters));
  }, [dispatch, filters]);

  return (
    <Container>
      <Title>Виды деятельности</Title>
      <Content>
        {typeActivities.results.map((typeActivity, index) => (
          <Line key={index} value={index}>
            <span>{typeActivity.group_fields.type_activity_name}</span>
            <span>{typeActivity.Count}</span>
          </Line>
        ))}
      </Content>
    </Container>
  );
};

export default TypeActivitiesAll;
