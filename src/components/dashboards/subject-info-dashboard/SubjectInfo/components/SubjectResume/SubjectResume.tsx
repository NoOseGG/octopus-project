import React, { useState } from 'react';
import styled from 'styled-components';
import { Descriptions, Modal, Table } from 'antd';
import { Resume } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';

type MyComponentProps = {
  resumes: Resume[];
};

const SubjectResume: React.FC<MyComponentProps> = ({ resumes }) => {
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const newVacancies = resumes.map((resume) => ({
    ...resume,
    salary_byn: `${formatDate(resume.to_dttm)} BYN`,
    from_dttm: `${formatDate(resume.from_dttm)}`,
    to_dttm: `${formatDate(resume.to_dttm)}`,
    birth_date: `${formatDate(resume.birth_date)}`,
    resume_from_dttm: `${formatDate(resume.resume_from_dttm)}`,
  }));

  const handleRowClick = (record: Resume) => {
    setSelectedResume(record);
    setModalVisible(true);
  };

  return (
    <Container>
      <TableStyle dataSource={newVacancies} bordered={true} size={'small'} tableLayout={'fixed'}>
        <ColumnGroup title="Резюме">
          <Column
            title="Должность"
            dataIndex="work_position"
            key="work_position"
            sorter={(a: { work_position: string }, b: { work_position: string }) =>
              a.work_position.localeCompare(b.work_position)
            }
            showSorterTooltip={false}
          />
          <Column title="Начало периода работы" dataIndex="from_dttm" key="from_dttm" />
          <Column title="Окончание периода работы" dataIndex="to_dttm" key="to_dttm" />
          <Column
            title="Действия"
            key="actions"
            render={(text, record: Resume) => (
              <span onClick={() => handleRowClick(record)} style={{ cursor: 'pointer', color: 'blue' }}>
                Подробнее
              </span>
            )}
          />
        </ColumnGroup>
      </TableStyle>
      <Modal
        title="Полная информация о резюме"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={'auto'}
      >
        {selectedResume && (
          <Descriptions title={<Title>{selectedResume.work_position}</Title>} column={6} size={'middle'} bordered>
            <Descriptions.Item label="Начало периода работы" span={2}>
              {formatDate(selectedResume.from_dttm)}
            </Descriptions.Item>
            <Descriptions.Item label="Окончание периода работы" span={2}>
              {formatDate(selectedResume.to_dttm)}
            </Descriptions.Item>
            <Descriptions.Item label="Должность" span={2}>
              {selectedResume.work_position}
            </Descriptions.Item>

            <Descriptions.Item label="Должностные обязанности" span={6}>
              {selectedResume.responsibilities}
            </Descriptions.Item>

            <Descriptions.Item label="Дата рождения" span={3}>
              {formatDate(selectedResume.birth_date)}
            </Descriptions.Item>
            <Descriptions.Item label="Пол" span={3}>
              {selectedResume.gender}
            </Descriptions.Item>

            <Descriptions.Item label="Населенный пункт" span={2}>
              {selectedResume.settlement}
            </Descriptions.Item>
            <Descriptions.Item label="Желаемая должность" span={2}>
              {selectedResume.desired_position}
            </Descriptions.Item>
            <Descriptions.Item label="Желаемая заработная плата BYN" span={2}>
              {selectedResume.salary_byn}
            </Descriptions.Item>

            <Descriptions.Item label="Образование" span={2}>
              {selectedResume.education_level}
            </Descriptions.Item>
            <Descriptions.Item label="Дополнительная информация" span={2}>
              {selectedResume.addition}
            </Descriptions.Item>
            <Descriptions.Item label="Желаемая заработная плата USD" span={2}>
              {selectedResume.salary_usd}
            </Descriptions.Item>

            <Descriptions.Item label="Дата резюме" span={3}>
              {formatDate(selectedResume.resume_from_dttm)}
            </Descriptions.Item>
            <Descriptions.Item label="Сведения об образовании" span={3}>
              {formatDate(selectedResume.education)}
            </Descriptions.Item>

            <Descriptions.Item label="Владение языками" span={6}>
              {selectedResume.language_name}
            </Descriptions.Item>

            <Descriptions.Item label="Ключевые навыки" span={6}>
              {selectedResume.skill_name}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </Container>
  );
};

export default SubjectResume;

const Container = styled.div`
  margin-top: 20px;
`;

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
