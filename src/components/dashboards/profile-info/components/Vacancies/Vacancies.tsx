import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import MyVacancy from '@app/components/dashboards/profile-info/components/Vacancies/components/Vacancy/MyVacancy';

const Vacancies: React.FC = () => {
  const vacancies = useAppSelector((state) => state.searchProfile.profile.vacancy);

  return (
    <div>
      {vacancies.map((item, index) => (
        <MyVacancy vacancy={item} key={index} />
      ))}
    </div>
  );
};

export default Vacancies;
