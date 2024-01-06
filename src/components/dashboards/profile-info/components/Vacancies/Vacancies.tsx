import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import MyVacancy from '@app/components/dashboards/profile-info/components/Vacancies/components/Vacancy/MyVacancy';
import styled from 'styled-components';
import CountVacancies from '@app/components/dashboards/profile-info/components/Vacancies/components/CountVacancies/CountVacancies';
import { Select } from 'antd';
import { PlaceholderText, filterStyle } from '@app/components/dashboards/profile-info/styles/SelectStyles';
import CloudTags from '@app/components/dashboards/profile-info/components/Vacancies/components/CloudTags/CloudTags';
import { Vacancy } from '@app/store/types/Subject';
import { GroupDataType } from '@app/components/dashboards/profile-info/components/CommercialRegister/types/CommercialRegisterTypes';
import { getYearFromDate } from '@app/utils/utils';
import StatisticVacancies from '@app/components/dashboards/profile-info/components/Vacancies/components/StatisticVacancies/StatisticVacancies';

enum SelectEnum {
  DATE = 'По названию',
  NAME = 'По имени',
  SALARY = 'По зарплате',
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
  const [statisticsYear, setStatisticsYear] = useState<{ value: string; count: number }[]>([]);
  const [statisticsNameVacancies, setStatisticsNameVacancies] = useState<{ value: string; count: number }[]>([]);
  const words = vacancies.reduce<string[]>((acc, obj) => {
    const wordsArray = obj.key_skill?.split(';') ?? [];
    return [...acc, ...wordsArray];
  }, []);
  const countObj: { [key: string]: number } = {};

  // Подсчитываем количество каждого элемента в массиве
  words.forEach((word) => {
    countObj[word] = (countObj[word] || 0) + 1;
  });

  // Преобразуем объект в массив объектов
  const keyWords: { name: string; value: number }[] = Object.entries(countObj).map(([name, value]) => ({
    value,
    name,
  }));

  useEffect(() => {
    const groupData: GroupDataType = sortedVacancies.reduce((acc: GroupDataType, item) => {
      const value = getYearFromDate(item.from_dttm);

      if (value !== null) {
        if (acc[value]) {
          acc[value]++;
        } else {
          acc[value] = 1;
        }
      }

      return acc;
    }, {});

    const resultArray = Object.keys(groupData).map((key) => ({ value: key, count: groupData[key] }));

    setStatisticsYear(resultArray);
  }, [sortedVacancies]);

  useEffect(() => {
    const groupData: GroupDataType = sortedVacancies.reduce((acc: GroupDataType, item) => {
      const value = item.vacancy_name;

      if (value !== null) {
        if (acc[value]) {
          acc[value]++;
        } else {
          acc[value] = 1;
        }
      }

      return acc;
    }, {});

    const resultArray = Object.keys(groupData).map((key) => ({ value: key, count: groupData[key] }));

    setStatisticsNameVacancies(resultArray);
  }, [sortedVacancies]);

  const avgSalaryBYN = getAvgSalaryBYN(vacancies);
  const avgSalaryUSD = getAvgSalaryUSD(vacancies);

  const sortVacancies = () => {
    switch (selectField) {
      case SelectEnum.DATE: {
        if (ascending === AscendingEnum.ASCENDING) {
          setSortedVacancies(
            vacancies.slice().sort((a, b) => {
              const dateA = a.from_dttm ? new Date(a.from_dttm) : null;
              const dateB = b.from_dttm ? new Date(b.from_dttm) : null;

              // Добавьте проверку на null перед использованием даты
              if (dateA && dateB) {
                return dateA.getTime() - dateB.getTime();
              }

              // Обработка случая, если хотя бы одна из дат равна null
              return 0;
            }),
          );
        } else {
          setSortedVacancies(
            vacancies.slice().sort((a, b) => {
              const dateA = a.from_dttm ? new Date(a.from_dttm) : null;
              const dateB = b.from_dttm ? new Date(b.from_dttm) : null;

              // Добавьте проверку на null перед использованием даты
              if (dateA && dateB) {
                return dateB.getTime() - dateA.getTime();
              }

              // Обработка случая, если хотя бы одна из дат равна null
              return 0;
            }),
          );
        }
        break;
      }
      case SelectEnum.NAME: {
        if (ascending === AscendingEnum.ASCENDING) {
          setSortedVacancies(
            vacancies.slice().sort((a, b) => {
              const nameA = a.vacancy_name || '';
              const nameB = b.vacancy_name || '';

              return nameA.localeCompare(nameB);
            }),
          );
        } else {
          setSortedVacancies(
            vacancies.slice().sort((a, b) => {
              const nameA = a.vacancy_name || '';
              const nameB = b.vacancy_name || '';

              return nameB.localeCompare(nameA);
            }),
          );
        }
        break;
      }
      case SelectEnum.SALARY: {
        if (ascending === AscendingEnum.ASCENDING) {
          setSortedVacancies(
            vacancies.slice().sort((a, b) => {
              const salaryA = Number(a.min_salary_byn) || 0;
              const salaryB = Number(b.min_salary_byn) || 0;

              return salaryA - salaryB;
            }),
          );
        } else {
          setSortedVacancies(
            vacancies.slice().sort((a, b) => {
              const salaryA = Number(a.min_salary_byn) || 0;
              const salaryB = Number(b.min_salary_byn) || 0;

              return salaryB - salaryA;
            }),
          );
        }
        break;
      }
    }
  };

  useEffect(() => {
    console.log(ascending);
    sortVacancies();
  }, [ascending, selectField]);

  const dataSelectField = [
    {
      value: SelectEnum.DATE,
      label: 'По дате',
    },
    {
      value: SelectEnum.NAME,
      label: 'По названию',
    },
    {
      value: SelectEnum.SALARY,
      label: 'По зарплате',
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
      {Boolean(keyWords.length) && <CloudTags keyWords={keyWords} />}
      <h3>Статистика</h3>
      <StatisticContainer>
        <StatisticVacancies statistics={statisticsYear} />
        <StatisticVacancies statistics={statisticsNameVacancies} />
      </StatisticContainer>
      {Boolean(sortedVacancies.length) ? (
        <>
          <AvgSalaryContainer>
            {Boolean(Number(avgSalaryBYN)) && (
              <AvgSalary>
                <span style={{ fontWeight: 700 }}>Средняя зарплата</span>
                <span>{avgSalaryBYN} BYN</span>
              </AvgSalary>
            )}
            {Boolean(Number(avgSalaryUSD)) && (
              <AvgSalary>
                <span style={{ fontWeight: 700 }}>Средняя зарплата </span>
                <span>{avgSalaryUSD} USD</span>
              </AvgSalary>
            )}
          </AvgSalaryContainer>
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
        <h1 style={{ textAlign: 'center' }}>Вакансии отсутсвуют</h1>
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

const AvgSalaryContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const AvgSalary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatisticContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const getAvgSalaryBYN = (vacancies: Vacancy[]): string => {
  let length = 0;
  const avg = vacancies.reduce((acc, item) => {
    if (item.min_salary_byn !== '0' && item.max_salary_byn !== '0') {
      length++;
      return acc + (Number(item.min_salary_byn) + Number(item.max_salary_byn)) / 2;
    } else {
      return 0;
    }
  }, 0);
  return (avg / length).toFixed();
};

const getAvgSalaryUSD = (vacancies: Vacancy[]): string => {
  let length = 0;
  const avg = vacancies.reduce((acc, item) => {
    if (item.min_salary_usd !== '0' && item.max_salary_usd !== '0') {
      length++;
      return acc + (Number(item.min_salary_usd) + Number(item.max_salary_usd)) / 2;
    } else {
      return 0;
    }
  }, 0);
  return (avg / length).toFixed();
};

// const avgSalaryBYN = (
//   vacancies.reduce((acc, item) => {
//     if (item.min_salary_byn !== null && item.max_salary_byn !== null) {
//       return acc + (Number(item.min_salary_byn) + Number(item.max_salary_byn)) / 2;
//     } else {
//       return 0;
//     }
//   }, 0) / vacancies.length
// ).toFixed();
