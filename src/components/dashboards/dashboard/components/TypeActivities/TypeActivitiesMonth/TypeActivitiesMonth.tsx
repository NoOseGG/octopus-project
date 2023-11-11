import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Container, Content, Title, Line, SpinnerSpace, TextLine } from '../../../styles/TypeActivitiesStyle';
import { doGetTypeActivitiesLastMonth } from '@app/store/slices/legalEntityDashboard/typeActivities/typeActivitiesMonth';
import { Spin } from 'antd';

const TypeActivitiesMonth: React.FC = () => {
  const { typeActivities, loading } = useAppSelector((state) => state.typeActivities.typeActivitiesMonth);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesLastMonth({ filters }));
  }, [dispatch, filters]);

  return (
    <Container>
      {loading ? (
        <SpinnerSpace>
          <Spin size="large" />
        </SpinnerSpace>
      ) : (
        <>
          <Title>Виды деятельности (Месяц)</Title>
          <Content>
            {typeActivities.results?.slice(0, 30)?.map((typeActivity, index) => (
              <Line key={index} value={index}>
                <TextLine>{typeActivity.group_fields.type_activity_name}</TextLine>
                <TextLine>{typeActivity.Count}</TextLine>
              </Line>
            ))}
          </Content>
        </>
      )}
    </Container>
  );
};

export default TypeActivitiesMonth;
