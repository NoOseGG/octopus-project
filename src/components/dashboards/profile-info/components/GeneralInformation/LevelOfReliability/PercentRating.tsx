import React, { useEffect, useState } from 'react';
import { ResponseDashboard } from '@app/interfaces/interfaces';

import * as S from './styles/PercentStyles';

type Props = {
  data: ResponseDashboard;
};

const PercentRating: React.FC<Props> = ({ data }) => {
  const [ratings, setRatings] = useState<number[] | undefined>();
  const [statistic, setStatistic] = useState<number[] | undefined>(undefined);
  const [all, setAll] = useState(0);
  // const [valueMax, setValueMax] = useState<number | undefined>(undefined);

  useEffect(() => {
    debugger;
    if (data && data?.results?.length > 1) {
      setAll(data.results.length);
      const max = data?.results[data?.results?.length - 1]?.king;
      const rating = calculateRating(max);
      setRatings(rating);
      setStatistic(calculateStatistic(rating, data));
    }
  }, [data]);

  return (
    <>
      {ratings && statistic && (
        <S.Container>
          <S.TopLine>
            <S.Item backgroundColor={'red'} fontWeight={700} fontSize={10}>
              0 - {ratings[0]}
            </S.Item>
            <S.Item backgroundColor={'red'} fontWeight={700} fontSize={10}>
              {ratings[0]} - {ratings[1]}
            </S.Item>
            <S.Item backgroundColor={'orange'} fontWeight={700} fontSize={10}>
              {ratings[1]} - {ratings[2]}
            </S.Item>
            <S.Item backgroundColor={'orange'} fontWeight={700} fontSize={10}>
              {ratings[2]} - {ratings[3]}
            </S.Item>
            <S.Item backgroundColor={'green'} fontWeight={700} fontSize={10}>
              {ratings[3]} - {ratings[4]}
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

const calculateRating = (max: number): number[] => {
  const step = max / 5;
  const ratings = [];

  for (let i = 0; i < 5; i++) {
    console.log(Number(((i + 1) * step).toFixed()));
    ratings.push(Number(((i + 1) * step).toFixed()));
  }
  console.log(ratings);
  return ratings;
};

const calculateStatistic = (rating: number[], data: ResponseDashboard): number[] => {
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;

  data.results.forEach((item) => {
    switch (true) {
      case item.king >= 0 && item.king < rating[0]:
        one++;
        break;
      case item.king >= rating[0] && item.king < rating[1]:
        two++;
        break;
      case item.king >= rating[1] && item.king < rating[2]:
        three++;
        break;
      case item.king >= rating[2] && item.king < rating[3]:
        four++;
        break;
      case item.king >= rating[3] && item.king <= rating[4]:
        five++;
        break;
      default:
        break;
    }
  });

  return [one, two, three, four, five];
};
