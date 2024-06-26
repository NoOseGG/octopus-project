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

const CloudTags: React.FC<MyComponentProps> = ({ keyWords }) => {
  const data = keyWords;

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
    <>
      {Boolean(keyWords.length) && (
        <CloudTagsContainer>
          <Title>Требуемые навыки от специалистов</Title>
          <WordCloud {...config} />
        </CloudTagsContainer>
      )}
    </>
  );
};

export default CloudTags;

const CloudTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 700;
`;
