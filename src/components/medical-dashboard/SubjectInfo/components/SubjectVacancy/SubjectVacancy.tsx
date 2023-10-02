import React, { useState } from 'react';
import styled from 'styled-components';
import { Vacancy } from '@app/store/types/Subject';
import { Link } from 'react-router-dom';
const Vacancies = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Container = styled.div`
  padding: 5px;
  border: 1px solid #ffc53d;
  margin: 10px 0;
`;

const Line = styled.div`
  padding: 5px;
  border: 1px solid #000c17;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
  padding: 5px;
  text-align: center;
`;

type MyComponentProps = {
  vacancies: Vacancy[];
};

const SubjectWebSites: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let count = 0;

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.vacancies[0] && (
        <div>
          <Vacancies onClick={handleClick}>Данные о вакансиях:</Vacancies> Количество вакансий -{' '}
          {props.vacancies.length}
        </div>
      )}
      {isExpanded && (
        <div>
          {props.vacancies.map((vacancy) => (
            <Container key={count++}>
              <Title>{vacancy.vacancy_name}</Title>
              {vacancy.from_dttm && <Line>Дата публикации вакансии: {vacancy.from_dttm}</Line>}
              {vacancy.vacancy_name && <Line>Название вакансии: {vacancy.vacancy_name}</Line>}
              {vacancy.class_group && <Line>Группа занятий: {vacancy.class_group}</Line>}
              {vacancy.work_rate && <Line>Характер работы: {vacancy.work_rate}</Line>}
              {vacancy.working_hours && <Line>Режим работы: {vacancy.working_hours}</Line>}
              {vacancy.number_seats && <Line>Количество мест: {vacancy.number_seats}</Line>}
              {vacancy.min_salary_byn && <Line>Заработная плата от (белорусский рубль): {vacancy.min_salary_byn}</Line>}
              {vacancy.max_salary_byn && <Line>Заработная плата до (белорусский рубль): {vacancy.max_salary_byn}</Line>}
              {vacancy.min_salary_usd && <Line>Заработная плата от (доллар США): {vacancy.min_salary_usd}</Line>}
              {vacancy.max_salary_usd && <Line>Заработная плата до (доллар США): {vacancy.max_salary_usd}</Line>}
              {vacancy.work_rate && <Line>Рабочая ставка: {vacancy.work_rate}</Line>}
              {vacancy.workplace_address_full && (
                <Line>Полное наименование адреса рабочего места: {vacancy.workplace_address_full}</Line>
              )}
              {vacancy.workplace_address_region && (
                <Line>Адрес рабочего места (Область): {vacancy.workplace_address_region}</Line>
              )}
              {vacancy.workplace_address_district && (
                <Line>Адрес рабочего места (Район): {vacancy.workplace_address_district}</Line>
              )}
              {vacancy.workplace_address_settlement && (
                <Line>Адрес рабочего места (Населенный пункт): {vacancy.workplace_address_settlement}</Line>
              )}
              {vacancy.education_level && <Line>Уровень образования: {vacancy.education_level}</Line>}
              {vacancy.employment_service_division && (
                <Line>Подразделение службы занятости: {vacancy.employment_service_division}</Line>
              )}
              {vacancy.tariff_category && <Line>Тарифный разряд, категория: {vacancy.tariff_category}</Line>}
              {vacancy.addition && <Line>Дополнительная информация: {vacancy.addition}</Line>}
              {vacancy.work_experience && <Line>Требуемый опыт работы: {vacancy.work_experience}</Line>}
              {vacancy.accept_handicapped && (
                <Line>Доступно соискателю с инвалидностью: {vacancy.accept_handicapped}</Line>
              )}
            </Container>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubjectWebSites;
