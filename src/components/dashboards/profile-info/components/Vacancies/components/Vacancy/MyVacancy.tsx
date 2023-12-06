import React from 'react';
import { Vacancy } from '@app/store/types/Subject';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';

type MyComponentProps = {
  vacancy: Vacancy;
};

const MyVacancy: React.FC<MyComponentProps> = ({ vacancy }) => {
  return (
    <>
      <Title>
        <TitleName>{vacancy.vacancy_name}</TitleName> <TitleFromDttm>{`от ${vacancy.min_salary_byn}`}</TitleFromDttm>
      </Title>
      <S.StyledTable>
        <tbody>
          <TableLine name={'Регион'} field={vacancy.workplace_address_settlement} />
          <TableLine name={'Зарплата'} field={`от ${vacancy.min_salary_byn}`} />
        </tbody>
      </S.StyledTable>
    </>
  );
};

export default MyVacancy;

const VacancyContainer = styled.div``;

const Title = styled.div`
  font-size: 16px;
`;

const TitleName = styled.span`
  color: blue;
`;

const TitleFromDttm = styled.span`
  color: grey;
`;
