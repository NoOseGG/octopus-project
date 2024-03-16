import React, { useState } from 'react';
import { News } from '@app/store/types/Subject';
import styled from 'styled-components';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';
import { formatDate } from '@app/utils/utils';
import { Divider, Typography } from 'antd';

const { Text } = Typography;

type MyComponentProps = {
  news: News;
};

const OneNews: React.FC<MyComponentProps> = ({ news }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <NewsContainer>
      {news?.news_text && (
        <>
          <Title>{news.news_title}</Title> <TitleFromDttm>({formatDate(news.from_dttm)})</TitleFromDttm>
          <Text
            style={{
              display: 'block',
              textAlign: 'justify',
              overflow: isCollapsed ? 'hidden' : 'auto',
              maxHeight: isCollapsed ? '3.6em' : 'none',
              lineHeight: '1.2em',
            }}
          >
            {news.news_text}
          </Text>
          {news.news_text.length > 100 && (
            <span onClick={toggleCollapse}>
              <ButtonShow>{isCollapsed ? 'Показать полностью' : 'Свернуть'}</ButtonShow>
            </span>
          )}
          <Divider />
        </>
      )}
    </NewsContainer>
  );
};

export default OneNews;

const NewsContainer = styled.div`
  width: 100%;
  margin-top: 1.835rem;
`;

const Title = styled.span`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
`;

const TitleFromDttm = styled.span`
  color: grey;
  font-size: 20px;
`;
