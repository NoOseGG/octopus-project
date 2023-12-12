import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import MyVacancy from '@app/components/dashboards/profile-info/components/Vacancies/components/Vacancy/MyVacancy';
import styled from 'styled-components';
import CountVacancies from '@app/components/dashboards/profile-info/components/Vacancies/components/CountVacancies/CountVacancies';
import { Vacancy } from '@app/store/types/Subject';
import { Select } from 'antd';
import { PlaceholderText, filterStyle } from '@app/components/dashboards/profile-info/styles/SelectStyles';

enum SelectEnum {
  DATE = 'По названию',
  NAME = 'По имени',
}

enum AscendingEnum {
  ASCENDING = 'По возрастанию',
  ASCENDING_REVERSE = 'По убыванию',
}

const Vacancies: React.FC = () => {
  const vacancies = useAppSelector((state) => state.searchProfile.profile.vacancy);
  const [sortedVacancies, setSortedVacancies] = useState([...vacancies]);
  const [ascending, setAscending] = useState(AscendingEnum.ASCENDING_REVERSE);
  const [selectField, setSelectField] = useState(SelectEnum.DATE);
  const avgSalary = (
    vacancies.reduce((acc, item) => {
      if (item.min_salary_byn !== null && item.max_salary_byn !== null) {
        return acc + (Number(item.min_salary_byn) + Number(item.max_salary_byn)) / 2;
      } else {
        return 0;
      }
    }, 0) / vacancies.length
  ).toFixed();

  const sortVacancies = (): Vacancy[] => {
    switch (selectField) {
      case SelectEnum.DATE: {
        if (ascending === AscendingEnum.ASCENDING) {
          setSortedVacancies([...vacancies]);
          console.log(JSON.stringify(sortedVacancies));
          return [...vacancies];
        } else {
          setSortedVacancies([...vacancies.reverse()]);
          console.log(JSON.stringify(sortedVacancies));
          return [...vacancies.reverse()];
        }
      }
      case SelectEnum.NAME: {
        if (ascending === AscendingEnum.ASCENDING) {
          setSortedVacancies([
            ...vacancies.sort((a, b) => {
              const nameA = a.vacancy_name || '';
              const nameB = b.vacancy_name || '';

              return nameA.localeCompare(nameB);
            }),
          ]);
          return [...vacancies];
        } else {
          setSortedVacancies([
            ...vacancies.sort((a, b) => {
              const nameA = a.vacancy_name || '';
              const nameB = b.vacancy_name || '';

              return nameB.localeCompare(nameA);
            }),
          ]);
          return [...vacancies.reverse()];
        }
      }
    }
  };

  useEffect(() => {
    console.log(ascending);
    sortVacancies();
  }, [ascending]);

  const dataSelectField = [
    {
      value: SelectEnum.DATE,
      label: 'По дате',
    },
    {
      value: SelectEnum.NAME,
      label: 'По названию',
    },
  ];

  const dataAscending = [
    {
      value: AscendingEnum.ASCENDING,
      label: 'По возрастанию',
    },
    {
      value: AscendingEnum.ASCENDING_REVERSE,
      label: 'По убыванию',
    },
  ];

  return (
    <>
      {Boolean(sortedVacancies.length) ? (
        <>
          <div>Средння зарплата по всем вакансиям: {avgSalary} BYN</div>
          <CountVacancies count={sortedVacancies.length} />
          <SelectContainer>
            <Select
              size="small"
              showSearch
              style={filterStyle}
              placeholder={<PlaceholderText>{selectField}</PlaceholderText>}
              optionFilterProp="children"
              value={selectField}
              onChange={setSelectField}
              filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
              options={dataSelectField}
            />
            <Select
              size="small"
              showSearch
              style={filterStyle}
              placeholder={<PlaceholderText>{ascending}</PlaceholderText>}
              optionFilterProp="children"
              value={ascending}
              onChange={setAscending}
              filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
              options={dataAscending}
            />
          </SelectContainer>
          <VacanciesContainer>
            {sortedVacancies.map((item, index) => (
              <MyVacancy vacancy={item} key={index} />
            ))}
          </VacanciesContainer>
        </>
      ) : (
        <h1>Вакансии отсутсвуют</h1>
      )}
    </>
  );
};

export default Vacancies;

const VacanciesContainer = styled.div``;

const SelectContainer = styled.div`
  margin-top: 1.8735rem;
  display: flex;
  justify-content: space-around;
`;
