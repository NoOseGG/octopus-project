import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Col, Spin } from 'antd';
import styled from 'styled-components';
import SubjectsList from '@app/components/dashboards/search-dashboard/subjectsList/SubjectsList';
import { doGetSearchHistory } from '@app/store/slices/search/searchHistorySlice';
import SearchHistory from '@app/components/dashboards/search-dashboard/SearchHistory/SearchHistory';
import Favourites from '@app/components/dashboards/search-dashboard/Favourites/Favourites';

const Search: React.FC = () => {
  const { history } = useAppSelector((state) => state.searchHistory);
  const { results } = useAppSelector((state) => state.search.data);
  const { favourites } = useAppSelector((state) => state.favourites);
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

      {!loading && error === null && !Boolean(results?.length) && (
        <div style={{ display: 'flex', gap: 20 }}>
          <Col span={14}>
            <SearchHistory listHistory={history?.results} />
          </Col>
          <Col span={10}>
            <Favourites favourites={favourites?.results} />
          </Col>
        </div>
      )}

      {Boolean(results.length) && !loading && <SubjectsList listItems={results} />}
    </Container>
  );
};

export default Search;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const SpinnerSpace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
