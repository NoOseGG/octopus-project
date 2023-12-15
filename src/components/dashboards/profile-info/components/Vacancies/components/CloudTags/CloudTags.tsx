import React from 'react';
import { WordCloud, WordCloudConfig } from '@ant-design/charts';

type KeyWord = {
  value: number;
  name: string;
};

type MyComponentProps = {
  keyWords: KeyWord[];
};

const CloudTags: React.FC<MyComponentProps> = ({ keyWords }) => {
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

  return <WordCloud {...config} />;
};

export default CloudTags;
