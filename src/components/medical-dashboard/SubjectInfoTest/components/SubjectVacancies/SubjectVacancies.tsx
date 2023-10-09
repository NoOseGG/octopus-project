import React from 'react';
import { Vacancy } from '@app/store/types/Subject';
import { Table } from 'antd';
import Column from 'antd/es/table/Column';
import styled from 'styled-components';
import { formatDate } from '@app/utils/utils';
import ColumnGroup from 'antd/es/table/ColumnGroup';

type MyComponentProps = {
  vacancies: Vacancy[];
};

const SubjectVacancies: React.FC<MyComponentProps> = ({ vacancies }) => {
  const newVacancies = vacancies.map((vacancy) => ({
    ...vacancy,
    min_salary_byn: `${vacancy.min_salary_byn} BYN`,
    from_dttm: `${formatDate(vacancy.from_dttm)}`,
  }));

  return (
    <TableStyle dataSource={newVacancies} bordered={true} size={'small'} tableLayout={'fixed'}>
      <ColumnGroup title="Вакансии">
        <Column title="Название вакансии" dataIndex="vacancy_name" key="vacancy_name" />
        <Column title="Дата публикации вакансии" dataIndex="from_dttm" key="from_dttm" />
        <Column title="Режим работы" dataIndex="working_hours" key="working_hours" />
        <Column title="Заработная плата" dataIndex="min_salary_byn" key="min_salary_byn" />
      </ColumnGroup>
    </TableStyle>
  );
};

export default SubjectVacancies;

const TableStyle = styled(Table)`
  margin-top: 10px;
`;
