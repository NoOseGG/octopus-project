import React, { useState } from 'react';
import { GovernmentInspection } from '@app/store/types/Subject';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';
import { formatDate } from '@app/utils/utils';

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
        <TitleName>{governmentInspection.legal_entity_id_gov_name}</TitleName>{' '}
        <TitleFromDttm>{`от ${formatDate(governmentInspection.from_dttm)}`}</TitleFromDttm>
      </Title>
      <S.StyledTable>
        <tbody>
          <TableLine
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
`;

const TitleName = styled.span`
  color: blue;
`;

const TitleFromDttm = styled.span`
  color: grey;
`;
