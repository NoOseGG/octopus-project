import React from 'react';
import { WordCloud, WordCloudConfig } from '@ant-design/charts';
import styled from 'styled-components';

export enum CloudTagsTitleType {
  VACANCIES = 'ваканский',
  RESUMES = 'резюме',
}

type KeyWord = {
  value: number;
  name: string;
};

type MyComponentProps = {
  keyWords: KeyWord[];
  title: CloudTagsTitleType;
};

const CloudTags: React.FC<MyComponentProps> = ({ keyWords, title }) => {
  const data = keyWords;
  console.log(JSON.stringify(data));

  const config: WordCloudConfig = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
      rotation: 0,
    },
    random: () => 0.5,
  };

  return (
    <CloudTagsContainer>
      <Title>Ключевые навыки {title}</Title>
      <WordCloud {...config} />
    </CloudTagsContainer>
  );
};

export default CloudTags;

const CloudTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  text-decoration: underline;
`;
