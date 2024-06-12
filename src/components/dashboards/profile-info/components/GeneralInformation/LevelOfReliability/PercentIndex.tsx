import React, { useEffect, useState } from 'react';
import { ResponseDashboard } from '@app/interfaces/interfaces';

import * as S from './styles/PercentStyles';

type Props = {
  data: ResponseDashboard;
};

const PercentIndex: React.FC<Props> = ({ data }) => {
  const [statistic, setStatistic] = useState<number[] | undefined>(undefined);
  const [all, setAll] = useState(0);

  useEffect(() => {
    if (data?.results?.length > 1) {
      setAll(data.results.length);
      const result = calculatePercentKing(data);
      setStatistic(result);
    }
  }, [data]);

  return (
    <>
      {statistic && (
        <S.Container>
          <S.Item backgroundColor={'lightgrey'} fontWeight={700}>
            0-1
          </S.Item>
          <S.Item backgroundColor={'lightgrey'} fontWeight={700}>
            2-3
          </S.Item>
          <S.Item backgroundColor={'lightgrey'} fontWeight={700}>
            4-5
          </S.Item>
          <S.Item backgroundColor={'lightgrey'} fontWeight={700}>
            6-7
          </S.Item>
          <S.Item backgroundColor={'lightgrey'} fontWeight={700}>
            8-9
          </S.Item>

          <S.Item>{statistic[0]}</S.Item>
          <S.Item>{statistic[1]}</S.Item>
          <S.Item>{statistic[2]}</S.Item>
          <S.Item>{statistic[3]}</S.Item>
          <S.Item>{statistic[4]}</S.Item>

          <S.Item>{((statistic[0] / all) * 100).toFixed(1)}%</S.Item>
          <S.Item>{((statistic[1] / all) * 100).toFixed(1)}%</S.Item>
          <S.Item>{((statistic[2] / all) * 100).toFixed(1)}%</S.Item>
          <S.Item>{((statistic[3] / all) * 100).toFixed(1)}%</S.Item>
          <S.Item>{((statistic[4] / all) * 100).toFixed(1)}%</S.Item>
        </S.Container>
      )}
    </>
  );
};

export default PercentIndex;

const calculatePercentKing = (data: ResponseDashboard) => {
  let zeroOne = 0;
  let twoThree = 0;
  let fourFive = 0;
  let sixSeven = 0;
  let eightNine = 0;

  data?.results?.forEach((item) => {
    switch (true) {
      case item.king_group >= 0 && item.king_group <= 1:
        zeroOne++;
        break;
      case item.king_group >= 2 && item.king_group <= 3:
        twoThree++;
        break;
      case item.king_group >= 4 && item.king_group <= 5:
        fourFive++;
        break;
      case item.king_group >= 6 && item.king_group <= 7:
        sixSeven++;
        break;
      case item.king_group >= 8 && item.king_group <= 9:
        eightNine++;
        break;
      default:
        break;
    }
  });

  return [zeroOne, twoThree, fourFive, sixSeven, eightNine];
};
