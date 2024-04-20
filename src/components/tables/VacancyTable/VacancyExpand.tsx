import React from 'react';
import { Vacancy } from '@app/store/types/Subject';
import styled from 'styled-components';
import { formatDate } from '@app/utils/utils';

type MyComponentProps = {
  vacancy: Vacancy;
};

const VacancyExpand: React.FC<MyComponentProps> = ({ vacancy }) => {
  console.log(JSON.stringify(vacancy));

  return (
    <VacancyExpandContainer>
      <LeftColumn>
        <InfoRow name={'Дата'} value={formatDate(vacancy.from_dttm)} />
        <InfoRow name={'Название вакансии'} value={vacancy.vacancy_name} />
        <InfoRow name={'Группа занятий'} value={vacancy.class_group} />
        <InfoRow name={'Характер работы'} value={vacancy.work_format} />
        <InfoRow name={'Режим работы'} value={vacancy.working_hours} />
        <InfoRow name={'Количество мест'} value={vacancy.number_seats} />
        <InfoRow name={'Рабочая ставка'} value={vacancy.work_rate} />
        <InfoRow name={'Дополнительная информация'} value={vacancy.addition} />
      </LeftColumn>
      <RightColumn>
        <InfoRow name={'Полное наименование адреса рабочего места'} value={vacancy.workplace_address_full} />
        <InfoRow name={'Заработная плата от (белорусский рубль)'} value={vacancy.min_salary_byn} />
        <InfoRow name={'Заработная плата до (белорусский рубль)'} value={vacancy.max_salary_byn} />
        <InfoRow name={'Заработная плата от (доллар США)'} value={vacancy.min_salary_usd} />
        <InfoRow name={'Заработная плата до (доллар США)'} value={vacancy.max_salary_usd} />
        <InfoRow name={'Адрес рабочего места (Область)'} value={vacancy.workplace_address_region} />
        <InfoRow name={'Адрес рабочего места (Район)'} value={vacancy.workplace_address_district} />
        <InfoRow name={'Адрес рабочего места (Населенный пункт)'} value={vacancy.workplace_address_settlement} />
        <InfoRow name={'Уровень образования'} value={vacancy.education_level} />
        <InfoRow name={'Подразделение службы занятости'} value={vacancy.employment_service_division} />
        <InfoRow name={'Тарифный разряд, категория'} value={vacancy.tariff_category} />
        <InfoRow name={'Требуемый опыт работы'} value={vacancy.work_experience} />
        <InfoRow name={'Доступно соискателю с инвалидностью'} value={vacancy.accept_handicapped} />
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
      </RightColumn>
    </VacancyExpandContainer>
  );
};

export default VacancyExpand;

const VacancyExpandContainer = styled.div`
  display: flex;
  font-size: 14px;
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
