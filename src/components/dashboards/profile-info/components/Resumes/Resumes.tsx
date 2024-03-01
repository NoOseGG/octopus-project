import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import MyResume from '@app/components/dashboards/profile-info/components/Resumes/components/Resume/MyResume';
import CountResumes from '@app/components/dashboards/profile-info/components/Resumes/components/CountResumes/CountResumes';
import CloudTags, {
  CloudTagsTitleType,
} from '@app/components/dashboards/profile-info/components/Vacancies/components/CloudTags/CloudTags';
import { Select } from 'antd';
import { filterStyle, PlaceholderText } from '@app/components/dashboards/profile-info/styles/SelectStyles';
import StatisticCommercialRegister from '@app/components/dashboards/profile-info/components/CommercialRegister/components/StatisticCommercialRegister/StatisticCommercialRegister';
import { GroupDataType } from '@app/components/dashboards/profile-info/components/CommercialRegister/types/CommercialRegisterTypes';

enum SelectEnum {
  DATE = 'По названию',
  NAME = 'По имени',
  SALARY = 'По зарплате',
}

enum AscendingEnum {
  ASCENDING = 'По возрастанию',
  ASCENDING_REVERSE = 'По убыванию',
}

const Resumes: React.FC = () => {
  const resumes = useAppSelector((state) => state.searchProfile.profile.resume);
  const [sortedResumes, setSortedResumes] = useState([...resumes]);
  const [ascending, setAscending] = useState(AscendingEnum.ASCENDING_REVERSE);
  const [selectField, setSelectField] = useState(SelectEnum.DATE);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [statisticsNameResumes, setStatisticsNameResumes] = useState<{ value: string; count: number }[]>([]);

  const words = resumes.reduce<string[]>((acc, obj) => {
    const wordsArray = obj.skill_name?.split(';') ?? [];
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
    const groupData: GroupDataType = sortedResumes.reduce((acc: GroupDataType, item) => {
      const value = item.work_position;

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

    setStatisticsNameResumes(resultArray);
  }, [sortedResumes]);

  const addFilter = (text: string) => {
    const result = sortedResumes.filter((item) => item.work_position === text);
    setSortedResumes(result);
    setSelectedFilter(text);
  };

  const deleteFilter = () => {
    setSortedResumes([...resumes]);
    setSelectedFilter(null);
  };

  //SORTING

  const sortResumes = () => {
    switch (selectField) {
      case SelectEnum.DATE: {
        if (ascending === AscendingEnum.ASCENDING) {
          setSortedResumes(
            resumes.slice().sort((a, b) => {
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
          setSortedResumes(
            resumes.slice().sort((a, b) => {
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
          setSortedResumes(
            resumes.slice().sort((a, b) => {
              const nameA = a.work_position || '';
              const nameB = b.work_position || '';

              return nameA.localeCompare(nameB);
            }),
          );
        } else {
          setSortedResumes(
            resumes.slice().sort((a, b) => {
              const nameA = a.work_position || '';
              const nameB = b.work_position || '';

              return nameB.localeCompare(nameA);
            }),
          );
        }
        break;
      }
      case SelectEnum.SALARY: {
        if (ascending === AscendingEnum.ASCENDING) {
          setSortedResumes(
            resumes.slice().sort((a, b) => {
              const salaryA = Number(a.salary_byn) || 0;
              const salaryB = Number(b.salary_byn) || 0;

              return salaryA - salaryB;
            }),
          );
        } else {
          setSortedResumes(
            resumes.slice().sort((a, b) => {
              const salaryA = Number(a.salary_byn) || 0;
              const salaryB = Number(b.salary_byn) || 0;

              return salaryB - salaryA;
            }),
          );
        }
        break;
      }
    }
  };

  useEffect(() => {
    sortResumes();
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
      {Boolean(keyWords.length) && <CloudTags keyWords={keyWords} title={CloudTagsTitleType.RESUMES} />}
      <StatisticCommercialRegister
        statistics={statisticsNameResumes}
        addFilter={addFilter}
        deleteFilter={deleteFilter}
        selectedFilter={selectedFilter}
      />
      {Boolean(sortedResumes.length) ? (
        <>
          <CountResumes count={resumes.length} />
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
          <ResumesContainer>
            {sortedResumes.map((item, index) => (
              <MyResume resume={item} key={index} />
            ))}
          </ResumesContainer>
        </>
      ) : (
        <h1 style={{ textAlign: 'center' }}>Резюме отсутсвуют</h1>
      )}
    </>
  );
};

export default Resumes;

const ResumesContainer = styled.div``;

const SelectContainer = styled.div`
  margin-top: 1.8735rem;
  display: flex;
  justify-content: space-around;
`;
