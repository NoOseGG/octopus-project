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
import { doGetTypeActivitiesLiquidatedLastYear } from '@app/store/slices/legalEntityDashboard/liquidatedTypeActivities/typeActivitiesLiquidatedYear';

const TypeActivitiesLiquidatedYear: React.FC = () => {
  const { typeActivities, loading } = useAppSelector(
    (state) => state.typeActivitiesLiquidated.typeActivitiesLiquidatedYear,
  );
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesLiquidatedLastYear({ filters }));
  }, [dispatch, filters]);

  return (
    <Container>
      {loading ? (
        <SpinnerSpace>
          <Spin size="large" />
        </SpinnerSpace>
      ) : (
        <>
          <Title>Виды деятельности ликвидированных компаний (Год)</Title>
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

export default TypeActivitiesLiquidatedYear;
