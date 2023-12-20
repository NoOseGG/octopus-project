import React from 'react';
import styled from 'styled-components';

type MyComponentProps = {
  count: number;
};

const CountNews: React.FC<MyComponentProps> = ({ count }) => {
  return (
    <>
      {Boolean(count) && (
        <CountNewsContainer>
          {count} {getNewsEnding(count)}
        </CountNewsContainer>
      )}
    </>
  );
};

export default CountNews;

const CountNewsContainer = styled.div`
  margin-top: 1.8735rem;
  width: 100%;
  padding: 16px;
  text-align: center;
  background-color: #f1f5fb;
`;

const getNewsEnding = (count: number) => {
  if (count % 100 >= 11 && count % 100 <= 19) {
    return 'новостей';
  } else {
    switch (count % 10) {
      case 1:
        return 'новость';
      case 2:
      case 3:
      case 4:
        return 'новости';
      default:
        return 'новостей';
    }
  }
};
