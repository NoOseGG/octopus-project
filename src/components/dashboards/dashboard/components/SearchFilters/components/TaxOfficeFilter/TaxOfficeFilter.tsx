import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetTaxOfficesList, setTaxOffice } from '@app/store/slices/search/searchFiltersSlice';
import { Select } from 'antd';
import {
  filterStyle,
  PlaceholderText,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';

const TaxOfficeFilter: React.FC = () => {
  const taxOffices = useAppSelector((state) => state.searchFilters.data_filters.taxOffices);
  const taxOffice = useAppSelector((state) => state.searchFilters.filters.taxOffices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTaxOfficesList());
  }, [dispatch]);

  const data = taxOffices?.map((taxOffice) => {
    return {
      value: taxOffice.tax_office_name,
      label: taxOffice.tax_office_name,
    };
  });

  const onChange = (value: string) => {
    dispatch(setTaxOffice(value));
  };

  return (
    <Select
      size="small"
      showSearch
      style={filterStyle}
      placement={'bottomRight'}
      placeholder={<PlaceholderText>Налоговый орган</PlaceholderText>}
      value={taxOffice}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default TaxOfficeFilter;
