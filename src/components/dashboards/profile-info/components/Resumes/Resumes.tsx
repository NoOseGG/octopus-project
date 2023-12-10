import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import CountVacancies from '@app/components/dashboards/profile-info/components/Vacancies/components/CountVacancies/CountVacancies';
import MyResume from '@app/components/dashboards/profile-info/components/Resumes/components/Resume/MyResume';

const Resumes: React.FC = () => {
  const resumes = useAppSelector((state) => state.searchProfile.profile.resume);

  return (
    <>
      {Boolean(resumes.length) ? (
        <>
          <CountVacancies count={resumes.length} />
          <ResumesContainer>
            {resumes.map((item, index) => (
              <MyResume resume={item} key={index} />
            ))}
          </ResumesContainer>
        </>
      ) : (
        <h1>Резюме отсутсвуют</h1>
      )}
    </>
  );
};

export default Resumes;

const ResumesContainer = styled.div``;
