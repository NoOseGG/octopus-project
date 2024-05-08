import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import CountResumes from '@app/components/dashboards/profile-info/components/Resumes/components/CountResumes/CountResumes';
import CloudTags, {
  CloudTagsTitleType,
} from '@app/components/dashboards/profile-info/components/Vacancies/components/CloudTags/CloudTags';
import StatisticTable, {
  StatisticTableType,
} from '@app/components/dashboards/profile-info/components/StatisticTable/StatisticTable';
import { GroupDataType } from '@app/components/dashboards/profile-info/components/CommercialRegister/types/CommercialRegisterTypes';
import { getCurrentDate, getDateLastYear } from '@app/utils/utils';
import ResumeTable from '@app/components/tables/ResumeTable/ResumeTable';
import { Button } from 'antd';

const Resumes: React.FC = () => {
  const resumes = useAppSelector((state) => state.searchProfile.profile.resume);
  const [sortedResumes, setSortedResumes] = useState([...resumes]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [statisticsNameResumes, setStatisticsNameResumes] = useState<{ value: string; count: number }[]>([]);
  const [statisticsNameResumes365days, setStatisticsNameResumes365days] = useState<{ value: string; count: number }[]>(
    [],
  );

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

  useEffect(() => {
    const groupData: GroupDataType = sortedResumes
      .filter((item) => {
        const date = item.from_dttm || getCurrentDate();
        return date > getDateLastYear();
      })
      .reduce((acc: GroupDataType, item) => {
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

    setStatisticsNameResumes365days(resultArray);
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

  return (
    <>
      {Boolean(keyWords.length) && <CloudTags keyWords={keyWords} title={CloudTagsTitleType.RESUMES} />}
      {Boolean(sortedResumes.length) ? (
        <>
          {selectedFilter && (
            <ClearButtonContainer>
              <ClearButton onClick={() => deleteFilter()}>Очистить фильтр</ClearButton>
            </ClearButtonContainer>
          )}
          <StatisticTableContainer>
            {/*All resumes name*/}
            <StatisticTable
              statistics={statisticsNameResumes}
              addFilter={addFilter}
              deleteFilter={deleteFilter}
              selectedFilter={selectedFilter}
              statisticTableType={StatisticTableType.ALL}
            />
            {/*Last year resumes name*/}
            <StatisticTable
              statistics={statisticsNameResumes365days}
              addFilter={addFilter}
              deleteFilter={deleteFilter}
              selectedFilter={selectedFilter}
              statisticTableType={StatisticTableType.YEAR}
            />
          </StatisticTableContainer>
          <CountResumes count={resumes.length} />
          <ResumesContainer>
            <ResumeTable resumes={sortedResumes} />
          </ResumesContainer>
        </>
      ) : (
        <h1 style={{ textAlign: 'center' }}>Резюме отсутсвуют</h1>
      )}
    </>
  );
};

export default Resumes;

const ResumesContainer = styled.div`
  margin-top: 20px;
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
