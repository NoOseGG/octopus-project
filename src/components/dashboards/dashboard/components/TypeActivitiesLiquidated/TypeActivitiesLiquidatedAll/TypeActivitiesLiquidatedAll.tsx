import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Container,
  Content,
  Line,
  Title,
  SpinnerSpace,
  TextLine,
} from '@app/components/dashboards/dashboard/styles/TypeActivitiesStyle';
import { Spin } from 'antd';
import { doGetTypeActivitiesLiquidatedAll } from '@app/store/slices/legalEntityDashboard/liquidatedTypeActivities/typeActivitiesLiuaidatedAll';

const TypeActivitiesLiquidatedAll: React.FC = () => {
  const { typeActivities, loading } = useAppSelector(
    (state) => state.typeActivitiesLiquidated.typeActivitiesLiquidatedAll,
  );
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesLiquidatedAll({ filters }));
  }, [dispatch, filters]);

  return (
    <Container>
      {loading ? (
        <SpinnerSpace>
          <Spin size="large" />
        </SpinnerSpace>
      ) : (
        <>
          <Title>Виды деятельности ликвидированных компаний</Title>
          <Content>
            {typeActivities.results?.map((typeActivity, index) => (
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

export default TypeActivitiesLiquidatedAll;
