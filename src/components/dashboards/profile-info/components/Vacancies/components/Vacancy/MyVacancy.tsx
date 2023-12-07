import React, { useState } from 'react';
import { Vacancy } from '@app/store/types/Subject';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';
import TableLineKeySkill from '@app/components/dashboards/profile-info/components/Vacancies/components/TableLineKeySkill/TableLineKeySkill';
import { formatDate } from '@app/utils/utils';

const COLLAPSE_OPEN = 'Скрыть вакансию';
const COLLAPSE_CLOSE = 'Показать вакансию';

type MyComponentProps = {
  vacancy: Vacancy;
};

const MyVacancy: React.FC<MyComponentProps> = ({ vacancy }) => {
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
        <TitleName>{vacancy.vacancy_name}</TitleName>{' '}
        <TitleFromDttm>{`от ${formatDate(vacancy.from_dttm)}`}</TitleFromDttm>
      </Title>
      <S.StyledTable>
        <tbody>
          <TableLine name={'Регион'} field={vacancy.workplace_address_settlement} />
          <TableLine name={'Зарплата'} field={`от ${vacancy.min_salary_byn}`} />
          {isCollapsed && (
            <>
              <TableLine name={'зарплата'} field={`до ${vacancy.max_salary_byn}`} />
              <TableLine name={'Зарплата USD'} field={`от ${vacancy.min_salary_usd}`} />
              <TableLine name={'Зарплата USD'} field={`до ${vacancy.max_salary_usd}`} />
              <TableLine name={'Режим работы'} field={vacancy.working_hours} />
              <TableLine name={'Рабочая ставка'} field={vacancy.work_rate} />
              <TableLine name={'Группа занятий'} field={vacancy.class_group} />
              <TableLine name={'Характер работы'} field={vacancy.work_format} />
              <TableLine name={'Количесво мест'} field={vacancy.number_seats} />
              <TableLine name={'Рабочая ставка'} field={vacancy.work_rate} />
              <TableLine name={'Полное наименование адреса рабочего места'} field={vacancy.workplace_address_full} />
              <TableLine name={'Адрес рабочего места (Область)'} field={vacancy.workplace_address_region} />
              <TableLine name={'Адрес рабочего места (Район)'} field={vacancy.workplace_address_district} />
              <TableLine name={'Уровень образования'} field={vacancy.education_level} />
              <TableLine name={'Подразделение службы занятости'} field={vacancy.employment_service_division} />
              <TableLine name={'Тарифный разряд, категория'} field={vacancy.tariff_category} />
              <TableLine name={'Дополнительная информация'} field={vacancy.addition} />
              <TableLine name={'Требуемый опыт работы'} field={vacancy.work_experience} />
              <TableLine name={'Доступно соискателю с инвалидностью'} field={vacancy.accept_handicapped} />
              <TableLineKeySkill name={'Ключевые навыки'} field={vacancy.key_skill} />
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

export default MyVacancy;

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
