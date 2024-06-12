import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetSettlementsList, setSettlement } from '@app/store/slices/search/searchFiltersSlice';
import FilterSelect from '@app/components/dashboards/dashboard/components/SearchFilters/components/FilterSelect/FilterSelect';
import { dashboardController, reCreatedController } from '@app/api/http.api';

const SettlementFilter: React.FC = () => {
  const settlements = useAppSelector((state) => state.searchFilters.data_filters.settlements);
  const settlement = useAppSelector((state) => state.searchFilters.filters.settlements);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetSettlementsList());
  }, [dispatch]);

  const data = settlements?.map((settlement, index) => {
    return {
      value: settlement.address_settlement,
      label: settlement.address_settlement,
      key: index,
    };
  });

  const onChange = (value: string) => {
    dashboardController.abort();
    reCreatedController();
    dispatch(setSettlement(value));
  };

  return <FilterSelect value={settlement} onChange={onChange} data={data} name={'Населённый пункт'} />;
};

export default SettlementFilter;
