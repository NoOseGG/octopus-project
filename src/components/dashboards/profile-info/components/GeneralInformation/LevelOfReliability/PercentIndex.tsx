import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ResponseDashboard } from '@app/interfaces/interfaces';

type Props = {
  data: ResponseDashboard;
};

const PercentIndex: React.FC<Props> = ({ data }) => {
  const [statistic, setStatistic] = useState<number[] | undefined>(undefined);
  const [all, setAll] = useState(0);

  useEffect(() => {
    if (data?.results?.length > 1) {
      setAll(data.results.length);
      console.log(all);
      const result = calculatePercentKing(data);
      setStatistic(result);
    }
  }, [data]);

  return (
    <>
      {statistic && (
        <Container>
          <TopLine>
            <Item backgroundColor={'red'}>0-1</Item>
            <Item backgroundColor={'red'}>2-3</Item>
            <Item backgroundColor={'orange'}>4-5</Item>
            <Item backgroundColor={'orange'}>6-7</Item>
            <Item backgroundColor={'green'}>8-9</Item>
          </TopLine>
          <MiddleLine>
            <Item>{statistic[0]}</Item>
            <Item>{statistic[1]}</Item>
            <Item>{statistic[2]}</Item>
            <Item>{statistic[3]}</Item>
            <Item>{statistic[4]}</Item>
          </MiddleLine>
          <BottomLine>
            <Item>{((statistic[0] / all) * 100).toFixed(1)}%</Item>
            <Item>{((statistic[1] / all) * 100).toFixed(1)}%</Item>
            <Item>{((statistic[2] / all) * 100).toFixed(1)}%</Item>
            <Item>{((statistic[3] / all) * 100).toFixed(1)}%</Item>
            <Item>{((statistic[4] / all) * 100).toFixed(1)}%</Item>
          </BottomLine>
        </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
`;

const TopLine = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const MiddleLine = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: gray;
`;

const BottomLine = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: gray;
`;

type ItemProps = {
  backgroundColor?: string;
};

const Item = styled.div<ItemProps>`
  text-align: center;
  padding: 4px 12px;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'darkgray')};

  //&:not(:last-child) {
  //  border-right: 1px solid #000;
  //}
`;
