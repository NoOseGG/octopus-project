import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetTypeActivitiesList, setCodeActivity } from '@app/store/slices/search/searchFiltersSlice';
import FilterSelect from '@app/components/dashboards/dashboard/components/SearchFilters/components/FilterSelect/FilterSelect';

const CodeActivityFilter: React.FC = () => {
  const codes = useAppSelector((state) => state.searchFilters.data_filters.codeActivities);
  const codeActivity = useAppSelector((state) => state.searchFilters.filters.codeActivities);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTypeActivitiesList());
  }, [dispatch]);

  const data = codes?.map((code, index) => {
    return {
      value: code,
      label: code,
      key: index,
    };
  });

  const onChange = (value: string) => {
    dispatch(setCodeActivity(value));
  };

  // const tagRender = (props: CustomTagProps) => {
  //   const { label, closable, onClose } = props;
  //   const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   };
  //   return (
  //     <Tag onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
  //       {label}
  //     </Tag>
  //   );
  // };

  return (
    <>
      <FilterSelect value={codeActivity} onChange={onChange} data={data} name="Код деятельности" />
    </>
  );
};

export default CodeActivityFilter;
