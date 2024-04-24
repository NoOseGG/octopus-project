import React from 'react';
import { Vacancy } from '@app/store/types/Subject';
import styled from 'styled-components';

type MyComponentProps = {
  vacancy: Vacancy;
};

const VacancyExpand: React.FC<MyComponentProps> = ({ vacancy }) => {
  console.log(JSON.stringify(vacancy));

  return (
    <VacancyExpandContainer>
      <LeftColumn>
        <InfoRow name={'Характер работы'} value={vacancy.work_format} />
        <InfoRow name={'Режим работы'} value={vacancy.working_hours} />
        <InfoRow
          name={'Ключевые навыки'}
          value={
            vacancy.key_skill
              ? vacancy.key_skill
                  ?.split(';')
                  .map((item) => `- ${item}\n`)
                  .join('')
              : null
          }
        />
        <InfoRow name={'Уровень образования'} value={vacancy.education_level} />
        <InfoRow name={'Подразделение службы занятости'} value={vacancy.employment_service_division} />
        <InfoRow name={'Тарифный разряд, категория'} value={vacancy.tariff_category} />
        <InfoRow name={'Требуемый опыт работы'} value={vacancy.work_experience} />
        <InfoRow name={'Доступно соискателю с инвалидностью'} value={vacancy.accept_handicapped} />
        <InfoRow name={'Полное наименование адреса рабочего места'} value={vacancy.workplace_address_full} />
      </LeftColumn>
      <RightColumn>
        <InfoRow name={'Дополнительная информация'} value={vacancy.addition} />
      </RightColumn>
    </VacancyExpandContainer>
  );
};

export default VacancyExpand;

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
