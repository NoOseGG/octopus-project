import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import MeterGaugePlot from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/components/MeterGaugePlot/MeterGaugePlot';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import MetricAddressEconomicHighRiskRegistry from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/components/MetricAddressEconomicHighRiskRegistry/MetricAddressEconomicHighRiskRegistry';
import LegendMap from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/components/LegendMap/LegendMap';

const Indicators: React.FC = () => {
  const metric_address_2 = useAppSelector((state) => state.searchProfile.profile.metric_address_2);
  const metric_change_constituent_doc = useAppSelector(
    (state) => state.searchProfile.profile.metric_change_constituent_doc,
  );
  const metric_change_director = useAppSelector((state) => state.searchProfile.profile.metric_change_director);
  const metric_entity_contact = useAppSelector((state) => state.searchProfile.profile.metric_entity_contact);
  const metric_level_competition = useAppSelector((state) => state.searchProfile.profile.metric_level_competition);
  const metric_probability_liquidation = useAppSelector(
    (state) => state.searchProfile.profile.metric_probability_liquidation,
  );
  const metric_address_economic_high_risk_registry = useAppSelector(
    (state) => state.searchProfile.profile.metric_address_economic_high_risk_registry,
  );

  return (
    <Container>
      <S.Title>Маркеры возможных рисков</S.Title>
      <TopLine>
        {metric_address_2[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_address_2[0].risk_level}
            name={'Частота смены адреса'}
            content={metric_address_2[0]?.count_changes}
            description={<div>coming soon</div>}
          />
        )}
        {metric_change_constituent_doc[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_change_constituent_doc[0].risk_level}
            name={'Частота юридически значимых действий'}
            content={metric_change_constituent_doc[0]?.count_activity}
            description={<div>coming soon</div>}
          />
        )}
        {metric_change_director[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_change_director[0].risk_level}
            name={'Частота смены руководителя'}
            content={metric_change_director[0]?.count_changes}
            description={<div>coming soon</div>}
          />
        )}
        {metric_entity_contact[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_entity_contact[0].risk_level}
            name={'Уровень контактности субъекта'}
            content={metric_entity_contact[0].sum_count}
            description={<div>coming soon</div>}
          />
        )}
        {metric_level_competition[0]?.level_competition && (
          <MeterGaugePlot
            risk={metric_level_competition[0].level_competition}
            name={'Уровень конкуренции'}
            content={metric_level_competition[0]?.count_lei}
            description={
              <Description>
                <Paragraph>
                  <Bold>Индикатор уровня конкуренции</Bold> (далее - ИУК) – это ключевой инструмент для бизнес-анализа,
                  который позволяет оценить интенсивность конкуренции между компаниями, зарегистрированными в конкретном
                  городе и оперирующими в одной и той же сфере бизнеса. Индикатор визуализирует уровень конкуренции с
                  помощью цветовой кодировки:
                </Paragraph>
                <Paragraph>
                  <Red>Красный (Высокий уровень конкуренции):</Red> Если ИУК отображается красным, это указывает на
                  интенсивную конкуренцию. В данном случае, компании соревнуются за ресурсы, клиентов и долю рынка.
                  Бизнесам следует принимать активные меры для выживания и роста.
                </Paragraph>
                <Paragraph>
                  <Orange>Оранжевый (Средний уровень конкуренции):</Orange> Оранжевый цвет указывает на умеренную
                  конкуренцию. Компании имеют некоторую свободу действий, но все еще должны следить за конкурентами и
                  адаптироваться к изменениям на рынке.
                </Paragraph>
                <Paragraph>
                  <Green>Зеленый (Низкий уровень конкуренции):</Green> Зеленый ИУК свидетельствует о низкой конкуренции.
                  В такой ситуации компании могут более свободно развиваться и экспериментировать. Однако необходимо
                  оставаться бдительными и не упускать возможности для роста.
                </Paragraph>
                <Paragraph>
                  Стоит отметить, что числовое значение, отображаемое на индикаторе, представляет собой общее количество
                  действующих компаний, зарегистрированных в конкретном городе и оперирующих в одной и той же сфере
                  бизнеса. Чем выше это число, тем более насыщенный рынок и более интенсивная конкуренция.
                </Paragraph>
                <Paragraph>
                  Этот индикатор поможет бизнес-лидерам принимать обоснованные решения, а также адаптировать свои
                  стратегии в зависимости от текущего уровня конкуренции.
                </Paragraph>
              </Description>
            }
          />
        )}
        {metric_address_economic_high_risk_registry[0]?.address_description && (
          <MetricAddressEconomicHighRiskRegistry
            risk={metric_address_economic_high_risk_registry[0].address_description}
            name={'Репутация адреса'}
            description={
              <Description>
                <Paragraph>
                  <Bold>Маркер репутации адреса</Bold> — это инновационный инструмент, который служит для оценки доверия
                  к бизнес-адресам. Он анализирует историю использования адреса и выявляет, ассоциирован ли он с
                  организациями, попавшими в негативные списки государственных органов. Индикатор визуализирует доверие
                  и надежность через цветовую кодировку. <Green>Зеленый цвет</Green> символизирует чистоту и
                  безопасность, указывая на отсутствие адреса в негативных реестрах государственных органов. В то время
                  как <Red>красный цвет</Red> сигнализирует о потенциальных рисках, обозначая наличие компании с
                  аналогичным адресом в реестре. Это ключевой индикатор призван помочь бизнес-партнерам и инвесторам
                  минимизировать риски и обеспечить прозрачность сотрудничества.
                </Paragraph>
                <Paragraph>
                  С помощью <Bold>маркера репутации адреса</Bold> вы сможете избежать связей с недобросовестными
                  партнерами и уберечь свою репутацию от нежелательных ассоциаций. Этот инструмент — не просто фильтр,
                  это залог вашей уверенности в принятии обоснованных решений.
                </Paragraph>
              </Description>
            }
          />
        )}
        {metric_probability_liquidation[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_probability_liquidation[0].risk_level}
            name={'Уровень ликвидаций'}
            content={`${metric_probability_liquidation[0]?.probability_liquidation?.toFixed(2)}%`}
            description={
              <Description>
                <Paragraph>
                  <Bold>Маркер уровня ликвидаций</Bold> представляет собой ключевой показатель, который отслеживает
                  процентное соотношение ликвидированных предприятий к общему числу зарегистрированных компаний в
                  конкретном городе, оперируя в одной сфере бизнеса. Основываясь на возрасте компаний, индикатор
                  проводит детальный анализ, сопоставляя количество новых и прекративших своё существование предприятий,
                  при этом особое внимание уделяется тем, чей возраст меньше или равен возрасту анализируемой компании.
                </Paragraph>
                <Paragraph>
                  Данный индикатор особенно ценен для стратегического планирования и оценки рисков, так как позволяет
                  предприятиям адаптироваться к меняющимся рыночным условиям, учитывая тенденции ликвидации в их
                  секторе. С течением времени, увеличение возраста компании коррелирует с повышением процента
                  ликвидаций, что служит важным индикатором для принятия обоснованных управленческих решений.
                </Paragraph>
                <Paragraph>
                  Индикатор поможет оценить риски при принятии решений о расширении бизнеса или вложении средств.
                  Высокий процент ликвидаций может быть сигналом о недостаточной устойчивости рынка.
                </Paragraph>
              </Description>
            }
          />
        )}
      </TopLine>
      <LegendMap />
      <S.MyDivider />
    </Container>
  );
};

export default Indicators;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TopLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
`;

const Description = styled.div`
  text-align: justify;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const Paragraph = styled.p`
  text-indent: 40px;
  padding: 0;
  margin: 0;
`;

const Red = styled.span`
  color: red;
  font-weight: 700;
`;

const Orange = styled.span`
  color: orange;
  font-weight: 700;
`;

const Green = styled.span`
  color: green;
  font-weight: 700;
`;
