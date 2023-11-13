import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Spin } from 'antd';
import styled from 'styled-components';
import SubjectsList from '@app/components/dashboards/search-dashboard/subjectsList/SubjectsList';
import { doGetSearchHistory } from '@app/store/slices/search/searchHistorySlice';
import SearchHistory from '@app/components/dashboards/search-dashboard/SearchHistory/SearchHistory';

const Search: React.FC = () => {
  const { history } = useAppSelector((state) => state.searchHistory);
  const { results } = useAppSelector((state) => state.search.data);
  const { error, loading } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetSearchHistory());
  }, [dispatch]);

  return (
    <Container>
      {loading && (
        <SpinnerSpace>
          <Spin size="large" tip="Загрузка данных . . ." />
        </SpinnerSpace>
      )}

      {error !== null && <h1>{error}</h1>}

      {!loading && error === null && !Boolean(results.length) && <SearchHistory listHistory={history} />}

      {Boolean(results.length) && !loading && <SubjectsList listItems={results} />}
    </Container>
  );
};

export default Search;

const Container = styled.div`
  height: 100%;
  flex-grow: 1;
`;

const SpinnerSpace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
