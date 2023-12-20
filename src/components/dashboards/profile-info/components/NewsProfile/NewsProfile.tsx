import React, { useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import OneNews from '@app/components/dashboards/profile-info/components/NewsProfile/components/OneNews/OneNews';
import CountNews from '@app/components/dashboards/profile-info/components/NewsProfile/components/CountNews/CountNews';
import NewsFilters from '@app/components/dashboards/profile-info/components/NewsProfile/components/NewsFilters/NewsFilters';
import { News } from '@app/store/types/Subject';

const NewsProfile: React.FC = () => {
  const news = useAppSelector((state) => state.searchProfile.profile.news);
  const [isLoading, setIsLoading] = useState(false);
  const [sortedNews, setSortedNews] = useState([...news]);

  const handleSetSortedNews = (news: News[]) => {
    setSortedNews(news);
  };

  const handleSetIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  return (
    <>
      <NewsFilters
        news={news}
        sortedNews={sortedNews}
        handleSetSortedNews={handleSetSortedNews}
        handleSetIsLoading={handleSetIsLoading}
      />
      <CountNews count={sortedNews.length} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {Boolean(sortedNews.length) && (
            <>
              <NewsContainer>
                {sortedNews.map((item, index) => (
                  <OneNews news={item} key={index} />
                ))}
              </NewsContainer>
            </>
          )}
        </>
      )}
    </>
  );
};

export default NewsProfile;

const NewsContainer = styled.div``;
