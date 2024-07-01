import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { SearchDropdown } from '../searchDropdown/SearchDropdown';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Component, components as configComponents } from '@app/constants/config/components';
import { categoriesList, CategoryType } from '@app/constants/categoriesList';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './HeaderSearch.styles';
import { clearSearchData, doSearch, searchController } from '@app/store/slices/search/searchSlice';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import SearchInput, { SearchType } from '@app/components/header/components/SearchInput/SearchInput';

export interface CategoryComponents {
  category: CategoryType;
  components: Component[];
}

export const HeaderSearch: React.FC = () => {
  const { mobileOnly, isTablet } = useResponsive();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [query, setQuery] = useState('');
  const [components] = useState<Component[]>(configComponents);
  const [searchType, setSearchType] = useState<SearchType>(SearchType.STANDARD);

  const [isModalVisible, setModalVisible] = useState(false);

  const sortedResults = query
    ? categoriesList.reduce((acc, current) => {
        const searchResults = components.filter(
          (component) =>
            component.categories.includes(current.name) &&
            component.keywords.some((keyword) => keyword.includes(query)),
        );

        return searchResults.length > 0 ? acc.concat({ category: current.name, components: searchResults }) : acc;
      }, [] as CategoryComponents[])
    : null;

  useEffect(() => {
    setModalVisible(false);
    // setOverlayVisible(false);
  }, [pathname]);

  const delaySearch = useCallback(
    _.debounce((query: string, searchType: SearchType) => {
      console.log('delay', searchType);
      dispatch(doSearch({ query, searchType }));
    }, 500),
    [dispatch],
  );

  const clearSearch = useCallback(
    _.debounce(() => {
      searchController?.abort();
      dispatch(clearSearchData());
    }, 600),
    [dispatch],
  );

  const handleCancelSearch = () => {
    setQuery('');
    clearSearch();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (query.trim().length > 2) {
      // dispatch(doSearch(query.trim()));
      delaySearch(query, searchType);
      navigate('/search');
    }

    if (query.trim().length === 1) {
      clearSearch();
    }
  }, [query, searchType]);

  return (
    <>
      {mobileOnly && (
        <>
          <Button
            type={isModalVisible ? 'ghost' : 'text'}
            icon={<S.SearchIcon onClick={() => setModalVisible(!isModalVisible)} />}
          />
          <S.SearchModal
            visible={isModalVisible}
            closable={false}
            footer={null}
            onCancel={() => setModalVisible(false)}
            destroyOnClose
          >
            <SearchDropdown query={query} setQuery={setQuery} data={sortedResults} isOverlayVisible={false} />
          </S.SearchModal>
        </>
      )}

      {/*{isTablet && <SearchDropdown query={query} setQuery={setQuery} data={sortedResults} isOverlayVisible={false} />}*/}
      {isTablet && (
        <SearchInput
          query={query}
          setQuery={setQuery}
          handleCancelSearch={handleCancelSearch}
          searchType={searchType}
          setSearchType={setSearchType}
        />
      )}
    </>
  );
};
