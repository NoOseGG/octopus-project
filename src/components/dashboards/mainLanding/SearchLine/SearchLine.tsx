import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import Search from 'antd/es/input/Search';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import _ from 'lodash';
import { clearSearchData, doSearch } from '@app/store/slices/search/searchSlice';
import { Dropdown } from 'antd';
import DropdownMenu from '@app/components/dashboards/mainLanding/SearchLine/components/DropdownMenu/DropdownMenu';
import { readToken } from '@app/services/localStorage.service';
import { useNavigate } from 'react-router-dom';
import { notificationController } from '@app/controllers/notificationController';

const SearchLine: React.FC = () => {
  const dispatch = useAppDispatch();
  const { results } = useAppSelector((state) => state.search.data);
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (Boolean(results.length)) setIsVisible(true);
    else setIsVisible(false);
  }, [results]);

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

  useEffect(() => {
    if (initialized) {
      if (query.trim().length > 2) {
        delaySearch(query);
      } else {
        clearSearch();
      }
    } else {
      // Если это первый запуск, устанавливаем флаг инициализации в true
      setInitialized(true);
    }
  }, [query, delaySearch, clearSearch]);

  const handleClick = () => {
    setIsVisible(false);
  };

  const handleSearch = () => {
    if (Boolean(results.length)) {
      const token = readToken();
      if (token !== null) navigate('/search');
      else {
        navigate('/auth/login');
        notificationController.warning({
          message: 'Авторизируйтесь чтобы посмотреть найденных субъектов',
        });
      }
    }
  };

  return (
    <Container backgroundColor={'#1d1d47'} onClick={handleClick}>
      <InnerContainer>
        <SearchLineContainer>
          <Dropdown overlay={<DropdownMenu data={results} />} visible={isVisible} placement={'bottom'}>
            <Search
              placeholder={'Введите УНП или название проверяемого субъекта'}
              enterButton={'Проверить'}
              onChange={(event) => setQuery(event.target.value)}
              onSearch={handleSearch}
            />
          </Dropdown>
        </SearchLineContainer>
      </InnerContainer>
    </Container>
  );
};

export default SearchLine;

const SearchLineContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
