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
import { doGetTypeSoleTradeActivitiesLastQuarter } from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeSoleTradeActivitiesQuarter';

const TypeActivitiesQuarterSoleTrade: React.FC = () => {
  const { typeActivities, loading } = useAppSelector(
    (state) => state.typeActivitiesSoleTrade.typeActivitiesSoleTradeQuarter,
  );
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeSoleTradeActivitiesLastQuarter({ filters }));
  }, [dispatch, filters]);

  return (
    <Container>
      {loading ? (
        <SpinnerSpace>
          <Spin size="large" />
        </SpinnerSpace>
      ) : (
        <>
          <Title>Виды деятельности (Квартал)</Title>
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

export default TypeActivitiesQuarterSoleTrade;
