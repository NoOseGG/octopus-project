import React, { useState } from 'react';
import { GovernmentInspection } from '@app/store/types/Subject';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';
import { formatDate } from '@app/utils/utils';
import TableLineLink from '@app/components/dashboards/profile-info/components/components/Fields/TableLineLink/TableLineLink';

const COLLAPSE_OPEN = 'Скрыть проверку';
const COLLAPSE_CLOSE = 'Показать проверку';

type MyComponentProps = {
  governmentInspection: GovernmentInspection;
};

const MyResume: React.FC<MyComponentProps> = ({ governmentInspection }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [textCollapseButton, setTextCollapseButton] = useState(COLLAPSE_CLOSE);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) setTextCollapseButton(COLLAPSE_CLOSE);
    else setTextCollapseButton(COLLAPSE_OPEN);
  };

  return (
    <VacancyContainer>
      <Title>
        <div>
          <TitleName>{governmentInspection.legal_entity_id_gov_name}</TitleName>{' '}
          <TitleFromDttm>{`от ${formatDate(governmentInspection.from_dttm)}`}</TitleFromDttm>
        </div>
        <div>
          {governmentInspection.from_dttm && (
            <TitleStatus color={getColor(governmentInspection.from_dttm)}>
              {getTitle(governmentInspection.from_dttm)}
            </TitleStatus>
          )}
        </div>
      </Title>
      <S.StyledTable>
        <tbody>
          <TableLineLink
            name={'УНП контролирующего (надзорного) органа'}
            field={governmentInspection.legal_entity_id_gov}
          />
          <TableLine
            name={'Государственный орган, утвердивший сводный план проверок'}
            field={governmentInspection.state_body}
          />
          {isCollapsed && (
            <>
              <TableLine name={'Тип плана'} field={governmentInspection.plan_type} />
              <TableLine name={'Наименование плана'} field={governmentInspection.plan_name} />
              <TableLine name={'Основание для назначения проверки'} field={governmentInspection.reason} />
            </>
          )}
        </tbody>
      </S.StyledTable>
      <span onClick={() => handleClick()}>
        <ButtonShow>{isCollapsed ? <>{textCollapseButton}</> : <>{textCollapseButton}</>}</ButtonShow>
      </span>
    </VacancyContainer>
  );
};

export default MyResume;

const VacancyContainer = styled.div`
  width: 100%;
  margin-top: 1.835rem;
`;

const Title = styled.div`
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const TitleName = styled.span`
  color: blue;
`;

const TitleFromDttm = styled.span`
  color: grey;
`;

type TitleStatusProps = {
  color: string;
};

const TitleStatus = styled.span<TitleStatusProps>`
  color: #000;
  margin-left: 2rem;
  max-width: 9rem;
  height: 1.125rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
  font-size: 0.5rem;
  line-height: 0.725rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  background-color: ${(props) => {
    return props.color;
  }};
`;

const getColor = (date: string): string => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const valueDate = new Date(date).toISOString().slice(0, 10);
  if (currentDate > valueDate) {
    return '#64bb42';
  } else if (valueDate > currentDate) {
    return '#e770b0';
  } else {
    return '#ffd19b';
  }
};

const getTitle = (date: string): string => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const valueDate = new Date(date).toISOString().slice(0, 10);
  if (currentDate > valueDate) {
    return 'Завершена';
  } else if (valueDate > currentDate) {
    return 'Планируется';
  } else {
    return 'Проводится';
  }
};
