import React, { useState } from 'react';
import { Vacancy } from '@app/store/types/Subject';
import { Descriptions, Modal, Table } from 'antd';
import Column from 'antd/es/table/Column';
import styled from 'styled-components';
import { formatDate } from '@app/utils/utils';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectVacancies: React.FC = () => {
  const vacancies = useAppSelector((state) => state.searchProfile.profile.vacancy);
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const newVacancies = vacancies.map((vacancy) => ({
    ...vacancy,
    min_salary_byn: `${vacancy.min_salary_byn} BYN`,
    from_dttm: `${formatDate(vacancy.from_dttm)}`,
  }));

  const handleRowClick = (record: Vacancy) => {
    setSelectedVacancy(record);
    setModalVisible(true);
  };

  return (
    <>
      {Boolean(newVacancies.length) && (
        <>
          <TableStyle dataSource={newVacancies} bordered={true} size={'small'} tableLayout={'fixed'}>
            <ColumnGroup title="Вакансии">
              <Column
                title="Название вакансии"
                dataIndex="vacancy_name"
                key="vacancy_name"
                sorter={(a: { vacancy_name: string }, b: { vacancy_name: string }) =>
                  a.vacancy_name.localeCompare(b.vacancy_name)
                }
                showSorterTooltip={false}
              />
              <Column title="Дата публикации вакансии" dataIndex="from_dttm" key="from_dttm" />
              <Column
                title="Режим работы"
                dataIndex="working_hours"
                key="working_hours"
                sorter={(a: { working_hours: string }, b: { working_hours: string }) =>
                  a.working_hours.localeCompare(b.working_hours)
                }
                showSorterTooltip={false}
              />
              <Column
                title="Заработная плата"
                dataIndex="min_salary_byn"
                key="min_salary_byn"
                sorter={(a: { min_salary_byn: string }, b: { min_salary_byn: string }) =>
                  parseSalaryForSort(a.min_salary_byn) - parseSalaryForSort(b.min_salary_byn)
                }
                showSorterTooltip={false}
              />
              <Column
                title="Действия"
                key="actions"
                render={(text, record: Vacancy) => (
                  <span onClick={() => handleRowClick(record)} style={{ cursor: 'pointer', color: 'blue' }}>
                    Подробнее
                  </span>
                )}
              />
            </ColumnGroup>
          </TableStyle>
          <Modal
            title="Полная информация о вакансии"
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={null}
            width={'auto'}
          >
            {selectedVacancy && (
              <Descriptions title={<Title>{selectedVacancy.vacancy_name}</Title>} column={6} size={'middle'} bordered>
                <Descriptions.Item label="Дата публикации" span={2}>
                  {formatDate(selectedVacancy.from_dttm)}
                </Descriptions.Item>
                <Descriptions.Item label="Группа занятий" span={2}>
                  {selectedVacancy.class_group}
                </Descriptions.Item>
                <Descriptions.Item label="Режим работы" span={2}>
                  {selectedVacancy.working_hours}
                </Descriptions.Item>

                <Descriptions.Item label="Количесво мест" span={2}>
                  {selectedVacancy.number_seats}
                </Descriptions.Item>
                <Descriptions.Item label="Заработная плата от (BYN)" span={2}>
                  {selectedVacancy.min_salary_byn}
                </Descriptions.Item>
                <Descriptions.Item label="Заработная плата до (BYN)" span={2}>
                  {selectedVacancy.max_salary_byn}
                </Descriptions.Item>

                <Descriptions.Item label="Рабочая ставка" span={2}>
                  {selectedVacancy.work_rate}
                </Descriptions.Item>
                <Descriptions.Item label="Заработная плата от (USD)" span={2}>
                  {selectedVacancy.min_salary_usd}
                </Descriptions.Item>
                <Descriptions.Item label="Заработная плата до (USD)" span={2}>
                  {selectedVacancy.max_salary_usd}
                </Descriptions.Item>

                <Descriptions.Item label="Полное наименование адреса рабочего места" span={3}>
                  {selectedVacancy.workplace_address_full}
                </Descriptions.Item>

                <Descriptions.Item label="Уровень образования" span={3}>
                  {selectedVacancy.education_level}
                </Descriptions.Item>
                <Descriptions.Item label="Подразделение службы занятости" span={3}>
                  {selectedVacancy.employment_service_division}
                </Descriptions.Item>
                <Descriptions.Item label="Тарифный разряд, категория" span={3}>
                  {selectedVacancy.tariff_category}
                </Descriptions.Item>

                <Descriptions.Item label="Требуемый опыт работы" span={3}>
                  {selectedVacancy.work_experience}
                </Descriptions.Item>
                <Descriptions.Item label="Доступно соискателю с инвалидностью" span={3}>
                  {selectedVacancy.accept_handicapped}
                </Descriptions.Item>
                <Descriptions.Item label="Дополнительная информация" span={6}>
                  {selectedVacancy.addition}
                </Descriptions.Item>
                <Descriptions.Item label="Ключевые навыки" span={6}>
                  {selectedVacancy.key_skill}
                </Descriptions.Item>
              </Descriptions>
            )}
          </Modal>
        </>
      )}
    </>
  );
};

export default SubjectVacancies;

const TableStyle = styled(Table)`
  margin-top: 10px;
`;

const Title = styled.div`
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

function parseSalaryForSort(salary: string): number {
  // Разбиваем строку по пробелу и извлекаем первый элемент (число)
  const parts = salary.split(' ');
  const numericPart = parts[0];

  // Преобразуем числовую часть в число с плавающей точкой
  return parseFloat(numericPart);
}
