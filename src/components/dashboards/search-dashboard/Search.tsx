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
  const results = useAppSelector((state) => state.search.data.results);
  const { favourites } = useAppSelector((state) => state.favourites);
  const { error, loading } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetSearchHistory());
  }, [dispatch]);

  if (Boolean(results?.length) && !loading) {
    return (
      <Container>
        <SubjectsList listItems={results} />
      </Container>
    );
  }

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

      {!Boolean(results?.length) && !loading && error === null && (
        <HistoryContainer>
          <SearchHistoryContainer>
            <SearchHistory listHistory={history?.results} />
          </SearchHistoryContainer>
          <FavouritesContainer>
            <Favourites favourites={favourites?.results} />
          </FavouritesContainer>
        </HistoryContainer>
      )}
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

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    gap: 0;
  }
`;

const SearchHistoryContainer = styled.div`
  width: 58%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const FavouritesContainer = styled.div`
  width: 42%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
