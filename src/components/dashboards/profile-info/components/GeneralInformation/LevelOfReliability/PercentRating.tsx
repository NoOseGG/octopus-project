import React, { useEffect, useState } from 'react';
import { ResponseDashboard } from '@app/interfaces/interfaces';

import * as S from './styles/PercentStyles';

type Props = {
  data: ResponseDashboard;
};

const PercentRating: React.FC<Props> = ({ data }) => {
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [statistic, setStatistic] = useState<number[] | undefined>(undefined);
  const [all, setAll] = useState(0);
  // const [valueMax, setValueMax] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (data && data?.results?.length > 1) {
      setAll(data.results.length);
      const max = data?.results[data?.results?.length - 1]?.king;
      setRating(max);
      setStatistic(calculateStatistic(max, data));
    }
  }, [data]);

  return (
    <>
      {rating && statistic && (
        <S.Container>
          <S.TopLine>
            <S.Item backgroundColor={'red'} fontWeight={700} fontSize={10}>
              0 - 250
            </S.Item>
            <S.Item backgroundColor={'red'} fontWeight={700} fontSize={10}>
              251 - 500
            </S.Item>
            <S.Item backgroundColor={'orange'} fontWeight={700} fontSize={10}>
              501 - 750
            </S.Item>
            <S.Item backgroundColor={'orange'} fontWeight={700} fontSize={10}>
              751 - 1000
            </S.Item>
            <S.Item backgroundColor={'green'} fontWeight={700} fontSize={10}>
              1001 - {rating}
            </S.Item>
          </S.TopLine>
          <S.MiddleLine>
            <S.Item>{statistic[0]}</S.Item>
            <S.Item>{statistic[1]}</S.Item>
            <S.Item>{statistic[2]}</S.Item>
            <S.Item>{statistic[3]}</S.Item>
            <S.Item>{statistic[4]}</S.Item>
          </S.MiddleLine>
          <S.BottomLine>
            <S.Item fontWeight={700}>{((statistic[0] / all) * 100).toFixed(1)}%</S.Item>
            <S.Item fontWeight={700}>{((statistic[1] / all) * 100).toFixed(1)}%</S.Item>
            <S.Item fontWeight={700}>{((statistic[2] / all) * 100).toFixed(1)}%</S.Item>
            <S.Item fontWeight={700}>{((statistic[3] / all) * 100).toFixed(1)}%</S.Item>
            <S.Item fontWeight={700}>{((statistic[4] / all) * 100).toFixed(1)}%</S.Item>
          </S.BottomLine>
        </S.Container>
      )}
    </>
  );
};

export default PercentRating;

// const calculateRating = (max: number): number => {
//   const step = max / 5;
//   const ratings = [];
//
//   for (let i = 0; i < 5; i++) {
//     console.log(Number(((i + 1) * step).toFixed()));
//     ratings.push(Number(((i + 1) * step).toFixed()));
//   }
//   console.log(ratings);
//   return ratings;
// };

const calculateStatistic = (rating: number, data: ResponseDashboard): number[] => {
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;

  data.results.forEach((item) => {
    switch (true) {
      case item.king >= 0 && item.king <= 250:
        one++;
        break;
      case item.king >= 251 && item.king <= 500:
        two++;
        break;
      case item.king >= 501 && item.king <= 750:
        three++;
        break;
      case item.king >= 751 && item.king <= 1000:
        four++;
        break;
      case item.king >= 1001 && item.king <= rating:
        five++;
        break;
      default:
        break;
    }
  });

  return [one, two, three, four, five];
};
