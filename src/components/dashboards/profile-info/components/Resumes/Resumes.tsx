import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import MyResume from '@app/components/dashboards/profile-info/components/Resumes/components/Resume/MyResume';
import CountResumes from '@app/components/dashboards/profile-info/components/Resumes/components/CountResumes/CountResumes';
import CloudTags, {
  CloudTagsTitleType,
} from '@app/components/dashboards/profile-info/components/Vacancies/components/CloudTags/CloudTags';

const Resumes: React.FC = () => {
  const resumes = useAppSelector((state) => state.searchProfile.profile.resume);

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

  return (
    <>
      {Boolean(keyWords.length) && <CloudTags keyWords={keyWords} title={CloudTagsTitleType.RESUMES} />}
      {Boolean(resumes.length) ? (
        <>
          <CountResumes count={resumes.length} />
          <ResumesContainer>
            {resumes.map((item, index) => (
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
