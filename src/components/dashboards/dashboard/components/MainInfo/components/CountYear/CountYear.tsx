import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { EntityType } from '@app/constants/Constants';
import { Block, Title, Content, Percent } from '@app/components/dashboards/dashboard/components/MainInfo/MainInfoStyle';
import { doGetTotalCountCreatedLastYear } from '@app/store/slices/legalEntityDashboard/mainInfo/createdYearSlice';
import { Skeleton } from 'antd';

type MyComponentProps = {
  legal_entity: EntityType;
};

const CountYear: React.FC<MyComponentProps> = ({ legal_entity }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  const { count, loading } = useAppSelector((state) => state.mainInfo.createdYear);
  const percent = useAppSelector((state) => state.mainInfo.calculatePercent.percent);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountCreatedLastYear({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} />
      ) : (
        <>
          {!filters.isDate && (
            <Block>
              <Title>Количество созданных компаний (год)</Title>
              <Content>
                {count} <Percent number={percent}>({percent}%)</Percent>
              </Content>
            </Block>
          )}
        </>
      )}
    </>
  );
};

export default CountYear;
