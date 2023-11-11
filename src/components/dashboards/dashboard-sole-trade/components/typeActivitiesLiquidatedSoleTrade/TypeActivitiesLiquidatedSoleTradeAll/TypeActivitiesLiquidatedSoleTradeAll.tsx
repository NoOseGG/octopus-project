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
import { doGetTypeActivitiesLiquidatedSoleTradeAll } from '@app/store/slices/soleTradeDashboard/liquidatedTypeActivities/typeActivitiesLiuaidatedSoleTradeAll';

const TypeActivitiesLiquidatedSoleTradeAll: React.FC = () => {
  const { typeActivities, loading } = useAppSelector(
    (state) => state.typeActivitiesLiquidatedSoleTrade.typeActivitiesLiquidatedSoleTradeAll,
  );
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);

  useEffect(() => {
    dispatch(doGetTypeActivitiesLiquidatedSoleTradeAll({ filters }));
  }, [dispatch, filters]);

  const sum = typeActivities.results.reduce((acumulator, value) => acumulator + value.Count, 0);
  console.log(sum);

  return (
    <Container>
      {loading ? (
        <SpinnerSpace>
          <Spin size="large" />
        </SpinnerSpace>
      ) : (
        <>
          <Title>Виды деятельности ликвидированных ИП</Title>
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

export default TypeActivitiesLiquidatedSoleTradeAll;
