import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import MyVacancy from '@app/components/dashboards/profile-info/components/Vacancies/components/Vacancy/MyVacancy';
import styled from 'styled-components';
import CountVacancies from '@app/components/dashboards/profile-info/components/Vacancies/components/CountVacancies/CountVacancies';

const Vacancies: React.FC = () => {
  const vacancies = useAppSelector((state) => state.searchProfile.profile.vacancy);

  return (
    <>
      {Boolean(vacancies.length) ? (
        <>
          <CountVacancies count={vacancies.length} />
          <VacanciesContainer>
            {vacancies.map((item, index) => (
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
