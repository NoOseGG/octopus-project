import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { Skeleton } from 'antd';
import { COUNT_YEAR_TYPE } from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYearTypes';
import {
  CountCheckedProps,
  getStateForCountChecked,
  getTitleForCountChecked,
} from '@app/components/dashboards/dashboard/components/Inspection/components/CountChecked/CountCheckedTypes';
import { doGetTotalCountChecked } from '@app/store/slices/legalEntityDashboard/mainInfo/checked/checkedAllSlice';

const CountYear: React.FC<CountCheckedProps> = ({ countChecked }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();
  const dynamicStateYear = useAppSelector((state) => getStateForCountChecked(state, countChecked));
  const count = dynamicStateYear?.count;
  const loading = dynamicStateYear?.loading;

  const getData = useCallback(
    (countChecked) => {
      switch (countChecked) {
        case COUNT_YEAR_TYPE.LE_CREATED_YEAR:
          dispatch(doGetTotalCountChecked({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(countChecked);
  }, [getData]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <>
          {!filters.isDate && (
            <Block>
              <Title>{getTitleForCountChecked(countChecked)}</Title>
              <Content>{count}</Content>
            </Block>
          )}
        </>
      )}
    </>
  );
};

export default CountYear;
