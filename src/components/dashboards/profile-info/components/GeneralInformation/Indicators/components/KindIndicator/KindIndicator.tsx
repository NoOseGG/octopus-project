import React from 'react';
import styled from 'styled-components';
import { MyStyles } from '@app/styles/themes/myStyles/myStyles';
import { Popover } from 'antd';

type KindIndicatorProps = {
  kind_group: string;
};

const KindIndicator: React.FC<KindIndicatorProps> = ({ kind_group }) => {
  const getWidthByKind = (kind: string): string => {
    switch (kind) {
      case '1':
        return '10%';
      case '2':
        return '20%';
      case '3':
        return '30%';
      case '4':
        return '40%';
      case '5':
        return '50%';
      case '6':
        return '60%';
      case '7':
        return '70%';
      case '8':
        return '80%';
      case '9':
        return '90%';
      case '10':
        return '100%';
      default:
        return '0';
    }
  };

  const getColorByKind = (kind: string): string => {
    switch (kind) {
      case '0':
      case '1':
      case '2':
      case '3':
        return 'red';
      case '4':
      case '5':
      case '7':
        return 'orange';
      case '8':
      case '9':
      case '10':
        return 'green';
      default:
        return 'red';
    }
  };

  const pluralize = (count: number): string => {
    // Правила склонения слова "балл"
    const cases = [2, 0, 1, 1, 1, 2];
    const titles = ['балл', 'балла', 'баллов'];

    // Вычисляем индекс для выбора правильного склонения
    const index = count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)];

    // Возвращаем правильное склонение
    return titles[index];
  };

  return (
    <KindIndicatorContainer>
      <Kind>
        {kind_group} {pluralize(Number(kind_group))}
      </Kind>
      <IndicatorWrapper>
        <Indicator width={getWidthByKind(kind_group)} backgroundColor={getColorByKind(kind_group)} />
      </IndicatorWrapper>
      <Popover content={'Будет какое-то описание'}>
        <Title>Царь индикатор</Title>
      </Popover>
    </KindIndicatorContainer>
  );
};

export default KindIndicator;

const KindIndicatorContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

const IndicatorWrapper = styled.div`
  width: 100%;
  height: 5px;
  background-color: #f1f1f1;
  border-radius: 6px;
  overflow: hidden;
`;

type IndicatorProps = {
  width: string;
  backgroundColor: string;
};

const Indicator = styled.span<IndicatorProps>`
  display: flex;
  justify-content: start;
  width: ${(props) => props.width};
  height: 5px;
  background-color: ${(props) => props.backgroundColor};
`;

const Title = styled.span`
  width: 120px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  color: ${MyStyles.primaryColor};
  transition: transfrom 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Kind = styled.span`
  font-size: 18px;
  line-height: 15px;
  color: #787e86;
`;
