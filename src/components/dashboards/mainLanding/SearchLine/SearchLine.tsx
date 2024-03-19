import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import Search from 'antd/es/input/Search';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import _ from 'lodash';
import { clearSearchData, doSearch } from '@app/store/slices/search/searchSlice';
import { Dropdown } from 'antd';
import DropdownMenu from '@app/components/dashboards/mainLanding/SearchLine/components/DropdownMenu/DropdownMenu';

const SearchLine: React.FC = () => {
  const dispatch = useAppDispatch();
  const { results } = useAppSelector((state) => state.search.data);
  const [query, setQuery] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log(JSON.stringify(results));
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
    if (query.trim().length > 2) {
      delaySearch(query);
    } else {
      clearSearch();
    }
  }, [query]);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <Container backgroundColor={'#dbe1ea'} onClick={handleClick}>
      <InnerContainer>
        <SearchLineContainer>
          <Dropdown overlay={<DropdownMenu data={results} />} visible={isVisible} placement={'bottom'}>
            <Search
              placeholder={'Введите УНП или название проверяемого субъекта'}
              enterButton={'Проверить'}
              onChange={(event) => setQuery(event.target.value)}
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
