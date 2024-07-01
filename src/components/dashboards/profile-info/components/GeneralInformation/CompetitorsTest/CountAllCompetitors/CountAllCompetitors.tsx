import React from 'react';
import { Block } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import * as S from '../style/CompetitorStyles';

type Props = {
  count: number;
};

const CountAllCompetitors: React.FC<Props> = ({ count }) => {
  return (
    <>
      {Boolean(count) && (
        <Block>
          <S.Title>Всего</S.Title>
          <S.Content>{count - 1}</S.Content>
        </Block>
      )}
    </>
  );
};

export default CountAllCompetitors;
