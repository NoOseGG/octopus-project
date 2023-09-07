import React, { useEffect, useRef, useState } from 'react';
import { FilterIcon } from 'components/common/icons/FilterIcon';
import { SearchOverlay } from './searchOverlay/SearchOverlay/SearchOverlay';
import { HeaderActionWrapper } from '@app/components/header/Header.styles';
import { CategoryComponents } from '@app/components/header/components/HeaderSearch/HeaderSearch';
import { Btn, InputSearch } from '../HeaderSearch/HeaderSearch.styles';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import axios from 'axios';
import { setData } from '@app/store/slices/searchSlice';

interface SearchOverlayProps {
  query: string;
  setQuery: (query: string) => void;
  data: CategoryComponents[] | null;
  isOverlayVisible: boolean;
  setOverlayVisible: (state: boolean) => void;
}

export const SearchDropdown: React.FC<SearchOverlayProps> = ({
  query,
  setQuery,
  data,
  isOverlayVisible,
  setOverlayVisible,
}) => {
  const [isFilterVisible, setFilterActive] = useState(false);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    setOverlayVisible(!!query || isFilterVisible);
  }, [query, isFilterVisible, setOverlayVisible]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://93.125.0.140:1338/api/v1/profile_search/?val=${query}`);
        console.log(response.data);
        dispatch(setData(response.data));
      } catch (e) {
        console.log(e);
      }
    }

    if (query.length > 3) fetchData();
  }, [query]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  return (
    <>
      <Dropdown
        {...((!!data || isFilterVisible) && { trigger: ['click'], onVisibleChange: setOverlayVisible })}
        overlayClassName="search-dropdown"
        overlay={<SearchOverlay data={data} isFilterVisible={isFilterVisible} />}
        visible={isOverlayVisible}
        getPopupContainer={() => ref.current}
      >
        <HeaderActionWrapper>
          <InputSearch
            width="100%"
            value={query}
            placeholder={t('header.search')}
            filter={
              <Btn
                size="small"
                type={isFilterVisible ? 'ghost' : 'text'}
                aria-label="Filter"
                icon={<FilterIcon />}
                onClick={() => setFilterActive(!isFilterVisible)}
              />
            }
            onChange={(event) => setQuery(event.target.value)}
            enterButton={null}
            addonAfter={null}
          />
          <div ref={ref} />
        </HeaderActionWrapper>
      </Dropdown>
    </>
  );
};
