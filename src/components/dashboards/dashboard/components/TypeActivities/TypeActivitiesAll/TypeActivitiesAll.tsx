import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetTypeActivities } from '@app/store/slices/legalEntityDashboard/typeActivitiesSlice';
import {
  Container,
  Content,
  Line,
  Title,
} from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesStyle';

const TypeActivitiesAll: React.FC = () => {
  const typeActivities = useAppSelector((state) => state.typeActivities.typeActivities.results);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivities(filters));
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

export default TypeActivitiesAll;
