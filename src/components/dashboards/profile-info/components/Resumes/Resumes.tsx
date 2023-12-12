import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import MyResume from '@app/components/dashboards/profile-info/components/Resumes/components/Resume/MyResume';
import CountResumes from '@app/components/dashboards/profile-info/components/Resumes/components/CountResumes/CountResumes';

const Resumes: React.FC = () => {
  const resumes = useAppSelector((state) => state.searchProfile.profile.resume);

  return (
    <>
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
