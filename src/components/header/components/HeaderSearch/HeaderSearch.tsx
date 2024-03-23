import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { SearchDropdown } from '../searchDropdown/SearchDropdown';
import { Button } from '@app/components/common/buttons/Button/Button';
import { components as configComponents, Component } from '@app/constants/config/components';
import { categoriesList, CategoryType } from '@app/constants/categoriesList';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './HeaderSearch.styles';
import { clearSearchData, doSearch } from '@app/store/slices/search/searchSlice';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

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

  const [isModalVisible, setModalVisible] = useState(false);
  // const [isOverlayVisible, setOverlayVisible] = useState(false);

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
    _.debounce((query: string) => {
      dispatch(doSearch(query));
    }, 500),
    [dispatch],
  );

  const clearSearch = useCallback(
    _.debounce(() => {
      dispatch(clearSearchData());
    }, 600),
    [dispatch],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (query.trim().length > 2) {
      delaySearch(query);
      navigate('/search');
    } else {
      clearSearch();
    }
  }, [query]);

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

      {isTablet && <SearchDropdown query={query} setQuery={setQuery} data={sortedResults} isOverlayVisible={false} />}
    </>
  );
};
