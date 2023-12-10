import React, { useState } from 'react';
import { Resume } from '@app/store/types/Subject';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';
import TableLineKeySkill from '@app/components/dashboards/profile-info/components/Vacancies/components/TableLineKeySkill/TableLineKeySkill';
import { formatDate } from '@app/utils/utils';

const COLLAPSE_OPEN = 'Скрыть вакансию';
const COLLAPSE_CLOSE = 'Показать вакансию';

type MyComponentProps = {
  resume: Resume;
};

const MyResume: React.FC<MyComponentProps> = ({ resume }) => {
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
        <TitleName>{resume.work_position}</TitleName>{' '}
        <TitleFromDttm>{`от ${formatDate(resume.from_dttm)}`}</TitleFromDttm>
      </Title>
      <S.StyledTable>
        <tbody>
          <TableLine name={'Населенный пункт'} field={resume.settlement} />
          <TableLine name={'Образование'} field={resume.education_level} />
          {isCollapsed && (
            <>
              <TableLine name={'Желаемая заработная плата BYN'} field={resume.salary_byn?.toString()} />
              <TableLine name={'Желаемая заработная плата USD'} field={resume.salary_usd?.toString()} />
              <TableLine name={'Окончание периода работы'} field={resume.to_dttm} isDate={true} />
              <TableLine name={'Дата рождения'} field={resume.birth_date} />
              <TableLine name={'Пол'} field={resume.gender} />
              <TableLine name={'Желаемая должность'} field={resume.desired_position} />
              <TableLine name={'Дополнительная информация'} field={resume.addition} />
              <TableLine name={'Дата резюме'} field={resume.resume_from_dttm} isDate={true} />
              <TableLine name={'Сведения об образовании'} field={resume.education} />
              <TableLine name={'Должностные обязанности'} field={resume.responsibilities} />
              <TableLine name={'Владение языками'} field={resume.language_name} />
              <TableLineKeySkill name={'Желаемая заработная плата USD'} field={resume.skill_name} />
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
