import React from 'react';
import styled from 'styled-components';

export enum GradientType {
  GREEN,
  BLUE,
  SILVER,
}

export interface SourceItemObject {
  gradient: GradientType;
  upperTitle: string;
  title: string;
  number: string;
  value: string;
  description: string;
}

type MyComponentProps = {
  item: SourceItemObject;
};

const SourceItem: React.FC<MyComponentProps> = ({ item }) => {
  return (
    <Item>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemStats gradient={item.gradient}>
        <ItemStatsValue>{item.upperTitle}</ItemStatsValue>
        <ItemStatsNumber>{item.number}</ItemStatsNumber>
        <ItemStatsValue>{item.value}</ItemStatsValue>
      </ItemStats>
      <ItemDescription>{item.description}</ItemDescription>
    </Item>
  );
};

export default SourceItem;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px 48px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 400px) {
    padding: 8px 10px 8px;
  }
`;

const ItemTitle = styled.div`
  font-size: 18px;
  line-height: 1.33;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0;
  padding-bottom: 11px;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

interface ItemStatsProps {
  gradient: GradientType;
}

const ItemStats = styled.div<ItemStatsProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  text-align: center;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 30px 0 32px;
  background-image: ${(props) => getGradient(props.gradient)};
`;

const ItemStatsNumber = styled.span`
  font-size: 50px;
  line-height: 1.08;
  font-weight: 800;
  margin-bottom: 4px;
  text-align: center;
  color: transparent;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const ItemStatsValue = styled.span`
  font-size: 18px;
  line-height: 1.56;
  font-weight: 700;
  text-align: center;
  color: transparent;

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const ItemDescription = styled.div`
  font-size: 14px;
  line-height: 1.43;
  text-align: center;
  color: #979ca9;
  margin: 0 0 7px;

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const getGradient = (gradient: GradientType) => {
  switch (gradient) {
    case GradientType.GREEN:
      return 'linear-gradient(to right, #b7ff49, #77ba12)';
    case GradientType.BLUE:
      return 'linear-gradient(to right,#74a6ff,#2775ff 100%)';
    case GradientType.SILVER:
      return 'linear-gradient(to right,#becded,#7b93c5 100%)';
    default:
      return 'linear-gradient(to right, #b7ff49, #77ba12)';
  }
};
