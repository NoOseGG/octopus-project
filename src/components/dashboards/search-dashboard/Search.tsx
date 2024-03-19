import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Col, Spin } from 'antd';
import styled from 'styled-components';
import SubjectsList from '@app/components/dashboards/search-dashboard/subjectsList/SubjectsList';
import { doGetSearchHistory } from '@app/store/slices/search/searchHistorySlice';
import SearchHistory from '@app/components/dashboards/search-dashboard/SearchHistory/SearchHistory';
import Favourites from '@app/components/dashboards/search-dashboard/Favourites/Favourites';
import dataImage from '../../../assets/images/seach/data-not-found.png';

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

      {error !== null && (
        <ErrorContainer>
          <ErrorTitle>{error}</ErrorTitle>
          <ErrorImage src={dataImage} alt={'Данных нет'} />
        </ErrorContainer>
      )}

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
  flex-grow: 1;
`;

const SpinnerSpace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const ErrorTitle = styled.h1`
  font-size: 40px;
`;

const ErrorImage = styled.img`
  width: 500px;
`;
