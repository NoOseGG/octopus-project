import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetTaxOfficesList, setTaxOffice } from '@app/store/slices/search/searchFiltersSlice';
import FilterSelect from '@app/components/dashboards/dashboard/components/SearchFilters/components/FilterSelect/FilterSelect';

const TaxOfficeFilter: React.FC = () => {
  const taxOffices = useAppSelector((state) => state.searchFilters.data_filters.taxOffices);
  const taxOffice = useAppSelector((state) => state.searchFilters.filters.taxOffices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTaxOfficesList());
  }, [dispatch]);

  const data = taxOffices?.map((taxOffice, index) => {
    return {
      value: taxOffice.tax_office_name,
      label: taxOffice.tax_office_name,
      key: index,
    };
  });

  const onChange = (value: string) => {
    dispatch(setTaxOffice(value));
  };

  return <FilterSelect value={taxOffice} onChange={onChange} data={data} name="Налоговая инспекция" />;
};

export default TaxOfficeFilter;
