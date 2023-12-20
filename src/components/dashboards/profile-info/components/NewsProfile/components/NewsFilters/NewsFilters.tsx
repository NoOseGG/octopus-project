import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { News } from '@app/store/types/Subject';
import { sortNews } from '@app/components/dashboards/profile-info/components/NewsProfile/components/NewsFilters/sortNewsUtils';
import Search from 'antd/es/input/Search';

export enum TypeFilterEnum {
  DATE = 'По дате',
  NAME = 'По названию',
}
const typeFilterData = [TypeFilterEnum.DATE, TypeFilterEnum.NAME];

export enum SortFilterEnum {
  ASCENDING = 'По возрастанию',
  DESCENDING = 'По убыванию',
}
const ascendingFilterData = [SortFilterEnum.ASCENDING, SortFilterEnum.DESCENDING];

export type MyComponentProps = {
  news: News[];
  sortedNews: News[];
  handleSetSortedNews: (news: News[]) => void;
  handleSetIsLoading: (isLoading: boolean) => void;
};

const NewsFilters: React.FC<MyComponentProps> = ({ news, sortedNews, handleSetSortedNews, handleSetIsLoading }) => {
  const [type, setType] = useState(TypeFilterEnum.DATE);
  const [sort, setSort] = useState(SortFilterEnum.DESCENDING);
  const [search, setSearch] = useState<string | null>(null);

  useEffect(() => {
    const result = sortNews(type, sort, sortedNews);
    handleSetSortedNews(result);
  }, [type, sort]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    handleSetIsLoading(true);
    if (search !== null) {
      const result = news?.filter((item) => item.news_title?.toLowerCase()?.includes(search.toLowerCase()));
      handleSetSortedNews(result);
    }
    handleSetIsLoading(false);
  }, [search]);

  const handleClearFilters = () => {
    setType(TypeFilterEnum.DATE);
    setSort(SortFilterEnum.DESCENDING);
    setSearch(null);
    const result = sortNews(type, sort, sortedNews);
    handleSetSortedNews(result);
  };

  return (
    <FiltersContainer>
      <SelectsContainer>
        <Select
          defaultValue={TypeFilterEnum.DATE}
          style={selectFilterStyle}
          value={type}
          onChange={setType}
          size={'small'}
          options={typeFilterData.map((item) => {
            return {
              value: item,
              label: item,
            };
          })}
        />
        <Select
          defaultValue={SortFilterEnum.DESCENDING}
          style={selectFilterStyle}
          value={sort}
          onChange={setSort}
          size={'small'}
          options={ascendingFilterData.map((item) => {
            return {
              value: item,
              label: item,
            };
          })}
        />
      </SelectsContainer>
      <Search
        placeholder="Введите текст"
        value={search}
        onChange={onChange}
        style={{ width: '100%', marginTop: 10 }}
        size={'small'}
      />
      <ButtonClear onClick={handleClearFilters}>Сбросить фильтры</ButtonClear>
    </FiltersContainer>
  );
};

export default NewsFilters;

const selectFilterStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
};

const FiltersContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 2.5rem;
  background-color: #f1f5fb;
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
  padding: 0.625rem;
  color: #666;
  font-size: 0.9375rem;
  font-weight: 500;
`;

const SelectsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const ButtonClear = styled.button`
  margin-top: 10px;
  padding: 0;
  border: none;
  height: auto;
  background-color: #f1f5fb;
  color: #0057ff;
  font-weight: inherit;
  text-align: inherit;
  cursor: pointer;
`;
