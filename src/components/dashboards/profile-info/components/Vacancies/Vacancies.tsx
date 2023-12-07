import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import MyVacancy from '@app/components/dashboards/profile-info/components/Vacancies/components/Vacancy/MyVacancy';
import styled from 'styled-components';
import Description from '@app/components/dashboards/profile-info/components/GeneralInformation/Description/Description';
import CountVacancies from '@app/components/dashboards/profile-info/components/Vacancies/components/CountVacancies/CountVacancies';

const Vacancies: React.FC = () => {
  const vacancies = useAppSelector((state) => state.searchProfile.profile.vacancy);

  return (
    <div style={{ maxWidth: 1320 }}>
      <Description />
      <CountVacancies count={vacancies.length} />
      <VacanciesContainer>
        {vacancies.map((item, index) => (
          <MyVacancy vacancy={item} key={index} />
        ))}
      </VacanciesContainer>
    </div>
  );
};

export default Vacancies;

const VacanciesContainer = styled.div``;
