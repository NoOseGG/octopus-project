import React from 'react';
import { Resume } from '@app/store/types/Subject';
import styled from 'styled-components';

type MyComponentProps = {
  resume: Resume;
};

const ResumeExpand: React.FC<MyComponentProps> = ({ resume }) => {
  return (
    <VacancyExpandContainer>
      <LeftColumn>
        <InfoRow name={'Дата рождения'} value={resume.birth_date} />
        <InfoRow name={'Пол'} value={resume.gender} />
        <InfoRow name={'Желаемая должность'} value={resume.desired_position} />
        <InfoRow name={'Образование'} value={resume.education_level} />
        <InfoRow name={'Сведения об образовании'} value={resume.education} />
        <InfoRow name={'Дополнительная информация'} value={resume.addition} />
        <InfoRow name={'Владение языками'} value={resume.language_name} />
        <InfoRow name={'Ключевые навыки'} value={resume.skill_name} />
      </LeftColumn>
      <RightColumn>
        <InfoRow name={'Должностные обязанности'} value={resume.responsibilities} />
      </RightColumn>
    </VacancyExpandContainer>
  );
};

export default ResumeExpand;

const VacancyExpandContainer = styled.div`
  display: flex;
  font-size: 14px;
  gap: 20px;
`;

const LeftColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const InfoRow: React.FC<{ name: string; value: string | null }> = ({ name, value }) => {
  return (
    <div>
      <span>{name}:</span> <span style={{ fontWeight: 600 }}>{value ? value : '-'}</span>
    </div>
  );
};
