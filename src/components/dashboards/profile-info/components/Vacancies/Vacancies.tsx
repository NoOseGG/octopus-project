import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import { Button, Select } from 'antd';
import { filterStyle, PlaceholderText } from '@app/components/dashboards/profile-info/styles/SelectStyles';
import CloudTags, {
  CloudTagsTitleType,
} from '@app/components/dashboards/profile-info/components/Vacancies/components/CloudTags/CloudTags';
import { Vacancy } from '@app/store/types/Subject';
import { GroupDataType } from '@app/components/dashboards/profile-info/components/CommercialRegister/types/CommercialRegisterTypes';
import StatisticTable, {
  StatisticTableType,
} from '@app/components/dashboards/profile-info/components/StatisticTable/StatisticTable';
import VacancyTable from '@app/components/tables/VacancyTable/VacancyTable';
import { getCurrentDate, getDateLastYear } from '@app/utils/utils';
import PercentInfo from '@app/components/dashboards/profile-info/components/Vacancies/components/PercentInfo/PercentInfo';
import AvgSalary from '@app/components/dashboards/profile-info/components/Vacancies/components/AvgSalary/AvgSalary';

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
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [statisticsNameVacancies, setStatisticsNameVacancies] = useState<{ value: string; count: number }[]>([]);
  const [statisticsNameVacancies365days, setStatisticsNameVacancies365days] = useState<
    { value: string; count: number }[]
  >([]);
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

  useEffect(() => {
    const groupData: GroupDataType = sortedVacancies
      .filter((item) => {
        const date = item.from_dttm || getCurrentDate();
        return date > getDateLastYear();
      })
      .reduce((acc: GroupDataType, item) => {
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

    setStatisticsNameVacancies365days(resultArray);
  }, [sortedVacancies]);

  const avgSalaryBYN = getAvgSalaryBYN(vacancies);
  const avgSalaryUSD = getAvgSalaryUSD(vacancies);

  const addFilter = (text: string) => {
    const result = sortedVacancies.filter((item) => item.vacancy_name === text);
    setSortedVacancies(result);
    setSelectedFilter(text);
  };

  const deleteFilter = () => {
    setSortedVacancies([...vacancies]);
    setSelectedFilter(null);
  };

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
      {Boolean(sortedVacancies.length) ? (
        <>
          <PercentInfo />
          <AvgSalary avgSalaryBYN={avgSalaryBYN} avgSalaryUSD={avgSalaryUSD} />
          <>
            <Title>Сводная информация о требуемых специалистах</Title>
            {selectedFilter && (
              <ClearButtonContainer>
                <ClearButton onClick={() => deleteFilter()}>Очистить фильтр</ClearButton>
              </ClearButtonContainer>
            )}
            <StatisticTableContainer>
              {/*All vacancies name*/}
              <StatisticTable
                statistics={statisticsNameVacancies}
                addFilter={addFilter}
                deleteFilter={deleteFilter}
                selectedFilter={selectedFilter}
                statisticTableType={StatisticTableType.ALL}
              />
              {/*Last year vacancies name*/}
              <StatisticTable
                statistics={statisticsNameVacancies365days}
                addFilter={addFilter}
                deleteFilter={deleteFilter}
                selectedFilter={selectedFilter}
                statisticTableType={StatisticTableType.YEAR}
              />
            </StatisticTableContainer>
          </>
          <CloudTags keyWords={keyWords} title={CloudTagsTitleType.VACANCIES} />
          <Title>Детализированная информация</Title>
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
            <VacancyTable vacancies={sortedVacancies} />
          </VacanciesContainer>
        </>
      ) : (
        <h1 style={{ textAlign: 'center' }}>Вакансии отсутсвуют</h1>
      )}
    </>
  );
};

export default Vacancies;

const VacanciesContainer = styled.div`
  margin-top: 20px;
`;

const SelectContainer = styled.div`
  margin-top: 1.8735rem;
  display: flex;
  justify-content: space-around;
`;

const StatisticTableContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ClearButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
`;

const ClearButton = styled(Button)`
  width: 200px;
  height: 30px;
  padding: 0;
  font-size: 14px;
`;

const Title = styled.h2`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 700;
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
