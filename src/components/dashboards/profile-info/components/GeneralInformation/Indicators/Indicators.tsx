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
            name={'Юридическая активность'}
            content={metric_change_constituent_doc[0]?.count_activity}
            description={
              <Description>
                <Paragraph>
                  <Bold>Индекс юридической активности</Bold> (далее - ИЮА) представляет собой композитный показатель,
                  который количественно оценивает юридическую активность компании на основе регулярности и значимости
                  юридических действий, осуществляемых в государственных органах управления. ИЮА интегрирует данные о
                  ключевых юридических операциях, таких как изменение юридического адреса, ротация руководства,
                  изменения в уставных документах и другие юридические процедуры. Эти параметры являются ключевыми для
                  оценки уровня корпоративного управления и стратегического развития организации. Индикатор использует
                  цветовую кодировку для обозначения уровня юридической активности:
                </Paragraph>
                <Paragraph>
                  <Green>Зеленый:</Green> Высокая активность, сигнализирующая о потенциально низком уровне риска.
                </Paragraph>
                <Paragraph>
                  <Orange>Оранжевый:</Orange> Средняя активность, требующая дополнительного анализа.
                </Paragraph>
                <Paragraph>
                  <Red>Красный:</Red> Низкая активность, что может указывать на повышенные риски.
                </Paragraph>
                <Paragraph>
                  Значение индекса, отображаемое на индикаторе, представляет собой агрегированное число совершения
                  юридических процедур за весь период функционирования компании.
                </Paragraph>
                <Paragraph>
                  Использование ИЮА позволяет руководству и аналитикам эффективно мониторить юридическую динамику
                  компании и принимать обоснованные управленческие решения, основанные на актуальной и наглядной
                  информации.
                </Paragraph>
              </Description>
            }
          />
        )}
        {metric_change_director[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_change_director[0].risk_level}
            name={'Индекс управленческой ротации'}
            content={metric_change_director[0]?.count_changes}
            description={
              <Description>
                <Paragraph>
                  <Bold>Индекс управленческой ротации</Bold> — это метрика, которая измеряет частоту изменения
                  управленческого состава организации (руководителей). Этот индекс служит индикатором стабильности
                  управленческой структуры и её влияния на операционную эффективность предприятия. Он рассчитывается как
                  суммарное количество замен руководителей компании (директоров) за определенный период времени.
                </Paragraph>
                <Paragraph>
                  <Green>Низкий уровень (Зелёная зона):</Green> Отражает устойчивость управленческой команды и
                  минимальную частоту организационных изменений. Предприятия с низким уровнем индекса характеризуются
                  сохранением стратегической последовательности, высокой степенью лояльности сотрудников и
                  непрерывностью бизнес-процессов. Такая стабильность указывает на сниженный риск в аспекте
                  управленческой непрерывности и обеспечивает предсказуемость функционирования организации.
                </Paragraph>
                <Paragraph>
                  <Orange>Средний уровень (Оранжевая зона):</Orange> Сигнализирует о присутствии умеренной
                  нестабильности в управленческом аппарате. Организации, попадающие в этот сегмент, могут сталкиваться с
                  периодическими сбоями в управлении, однако обладают способностью к адаптации к изменениям. Существует
                  умеренный риск, связанный с трудностями в поддержании долгосрочной стратегической направленности.
                </Paragraph>
                <Paragraph>
                  <Red>Высокий уровень (Красная зона):</Red> Индицирует значительную частоту смены управленческого
                  состава, что может свидетельствовать о потенциальной нестабильности в управлении. Частые кадровые
                  перестановки могут негативно сказываться на организационной культуре, процессах принятия решений и
                  реализации стратегических задач. Такие изменения могут привести к снижению производительности,
                  ухудшению морального климата среди сотрудников и нарушению стратегического согласования.
                </Paragraph>
                <Paragraph>
                  Значение индекса, отображаемое на индикаторе, представляет собой агрегированное число смен
                  руководителей за весь период функционирования компании.
                </Paragraph>
              </Description>
            }
          />
        )}
        {metric_entity_contact[0]?.risk_level && (
          <MeterGaugePlot
            risk={metric_entity_contact[0].risk_level}
            name={'Открытость'}
            content={metric_entity_contact[0].sum_count}
            description={
              <Description>
                <Paragraph>
                  <Bold>Маркер уровня открытости</Bold> — это передовой инструмент, предназначенный для оценки
                  доступности компании. Он анализирует и визуализирует количество доступных каналов связи, таких как
                  телефон, электронная почта и веб-сайты, предоставляя потенциальным клиентам и партнерам ясное
                  представление о том, насколько легко установить контакт с компанией. Индикатор использует{' '}
                  <Bold>цветовую кодировку</Bold> для обозначения уровня контактности:
                </Paragraph>
                <Paragraph>
                  <Green>Зеленый цвет</Green> символизирует <Bold>высокий уровень доступности</Bold>, указывая на то,
                  что компания предоставляет обширный набор средств для связи.
                </Paragraph>
                <Paragraph>
                  <Orange>Оранжевый цвет</Orange> отражает <Bold>средний уровень доступности</Bold>, что означает
                  наличие достаточного количества каналов связи для удовлетворения стандартных потребностей.
                </Paragraph>
                <Paragraph>
                  <Red>Красный цвет</Red> предупреждает о <Bold>низком уровне доступности</Bold>, сигнализируя о том,
                  что компания предоставляет ограниченное количество способов для связи.
                </Paragraph>
                <Paragraph>
                  Стоит отметить, что числовое значение, отображаемое на индикаторе, представляет собой общее количество
                  найденных системой каналов связи.
                </Paragraph>
                <Paragraph>
                  Индикатор уровня открытости помогает контрагентам оценить, насколько легко они могут связаться с
                  компанией. Отсутствие ясных контактных данных может вызвать сомнения у контрагентов. Они могут начать
                  сомневаться в надежности компании или даже подозревать скрытые намерения. Партнеры ожидают, что
                  компания будет доступна для общения. Четкие контактные данные говорят о прозрачности и готовности к
                  открытому общению. Компании, которые стремятся к прозрачности, обычно более привлекательны для
                  контрагентов.
                </Paragraph>
              </Description>
            }
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
