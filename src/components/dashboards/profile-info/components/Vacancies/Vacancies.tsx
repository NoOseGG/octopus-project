import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import MyVacancy from '@app/components/dashboards/profile-info/components/Vacancies/components/Vacancy/MyVacancy';
import styled from 'styled-components';
import CountVacancies from '@app/components/dashboards/profile-info/components/Vacancies/components/CountVacancies/CountVacancies';
import { Vacancy } from '@app/store/types/Subject';
import { Select } from 'antd';
import {
  PlaceholderText,
  filterStyle,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';

enum Sort {
  DATE,
  NAME,
}

enum AscendingEnum {
  ASCENDING = 'По возрастанию',
  ASCENDING_REVERSE = 'По убыванию',
}

const Vacancies: React.FC = () => {
  const vacancies = useAppSelector((state) => state.searchProfile.profile.vacancy);
  const [sortedVacancies, setSortedVacancies] = useState([...vacancies]);
  const [ascending, setAscending] = useState(AscendingEnum.ASCENDING);

  const sortVacancies = (): Vacancy[] => {
    if (ascending === AscendingEnum.ASCENDING) {
      setSortedVacancies([...vacancies]);
      console.log(JSON.stringify(sortedVacancies));
      return [...vacancies];
    } else {
      setSortedVacancies([...vacancies.reverse()]);
      console.log(JSON.stringify(sortedVacancies));
      return [...vacancies.reverse()];
    }
  };

  useEffect(() => {
    console.log(ascending);
    sortVacancies();
  }, [ascending]);

  const data = [
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
          <Select
            size="small"
            showSearch
            style={filterStyle}
            placeholder={<PlaceholderText>{ascending}</PlaceholderText>}
            optionFilterProp="children"
            value={ascending}
            onChange={setAscending}
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            options={data}
          />
          <CountVacancies count={sortedVacancies.length} />
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
