import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Liquid, LiquidConfig } from '@ant-design/charts';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import InfoTooltip from '@app/components/dashboards/profile-info/components/components/Buttons/InfoTooltip/InfoTooltip';
import styled from 'styled-components';

const KindIndicator: React.FC = () => {
  const metric_kind = useAppSelector((state) => state.searchProfile.profile.metric_king);
  const [color, setColor] = useState('black');
  const [percent, setPercent] = useState(0);

  const getPercentByKind = (kind: string | null): number => {
    if (kind === null) return 0;

    switch (kind) {
      case '1':
        return 0.1;
      case '2':
        return 0.2;
      case '3':
        return 0.3;
      case '4':
        return 0.4;
      case '5':
        return 0.5;
      case '6':
        return 0.6;
      case '7':
        return 0.7;
      case '8':
        return 0.8;
      case '9':
        return 0.9;
      default:
        return 0;
    }
  };

  const getColorByKind = (kind: string | null): string => {
    switch (kind) {
      case '0':
      case '1':
      case '2':
        return 'red';
      case '3':
      case '4':
      case '5':
      case '6':
        return 'orange';
      case '7':
      case '8':
      case '9':
        return 'green';
      default:
        return 'red';
    }
  };

  useEffect(() => {
    setColor(getColorByKind(metric_kind[0]?.king_group));
    setPercent(getPercentByKind(metric_kind[0]?.king_group));
  }, [metric_kind]);

  const config: LiquidConfig = {
    percent: percent,
    theme: {
      styleSheet: {
        brandColor: color,
      },
    },
    statistic: {
      title: false,
      content: false,
    },
  };

  return (
    <>
      {metric_kind[0]?.king_group && (
        <Container>
          <S.Title>Индекс уровня надежности (0-9)</S.Title>
          <ContainerInfo>
            <Liquid {...config} style={{ width: 150, height: 150 }} />
            <KindInfo>
              <Text>
                <Name>Значение индекса</Name> - <Content color={color}>{metric_kind[0].king_group}</Content>{' '}
                <InfoTooltip
                  description="Индекс уровня надежности — это скоринговый аналитический показатель, рассчитываемый на основе публично доступной информации о деятельности юридического лица. Он помогает оценить надежность или ненадежность контрагента. Индекс уровня надежности для анализа компаний использует только официальные источники данных, такие как регистрационные сведения, данные о деятельности и факторы риска.
Для расчета индекса система учитывает более 30 различных факторов, что позволяет дать оценку степени благонадежности фирмы-партнера и погасить риски ведения бизнеса с ней. Индекс уровня надежности находится в диапазоне от 0 до 9. Чем выше значение, тем меньше риск, что компания может быть ненадежной.
Данный инструмент помогает повысить прозрачность бизнеса, а также более точно выявлять фирмы, с которыми сотрудничество может быть рискованным.
Индекс уровня надежности является важным инструментом для инвесторов, аналитиков и бизнес-партнеров, помогая им принимать обоснованные решения на основе объективных данных о компаниях."
                />
              </Text>
              <Text>
                <Name>Комплексная оценка</Name> - <Content color={color}>{metric_kind[0].king}</Content> баллов{' '}
                <InfoTooltip description="Комплексная оценка - это числовой показатель в виде баллов, набранных компанией при расчете индекса уровня надежности. Чем выше значение, тем более положительных факторов учтено в деятельности компании." />
              </Text>
            </KindInfo>
          </ContainerInfo>
        </Container>
      )}
    </>
  );
};

export default KindIndicator;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const KindInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 16px;
`;

type ContentProps = {
  color: string;
};

const Content = styled.span<ContentProps>`
  font-weight: 700;
  color: ${(props) => props.color};
`;

const Name = styled.span`
  font-weight: 550;
`;
