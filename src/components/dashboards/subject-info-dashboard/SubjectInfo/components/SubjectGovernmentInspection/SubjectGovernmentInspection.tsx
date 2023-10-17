import React, { useState } from 'react';
import { GovernmentInspection } from '@app/store/types/Subject';
import { Card, Table } from 'antd';
import { formatDate } from '@app/utils/utils';
import styled from 'styled-components';
import { ColumnsType } from 'antd/es/table';
import SingleGovernment from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectGovernmentInspection/components/SingleGovernment';

type MyComponentProps = {
  governmentInspections: GovernmentInspection[];
};

const SubjectGovernmentInspection: React.FC<MyComponentProps> = ({ governmentInspections }) => {
  const [isTable, setIsTable] = useState(true);
  const [selectedGovernment, setSelectedGovernment] = useState<GovernmentInspection | null>(governmentInspections[0]);

  const newGovernmentInspection = governmentInspections.map((governmentInspection) => ({
    ...governmentInspection,
    from_dttm: formatDate(governmentInspection.from_dttm),
  }));

  const handleClick = () => {
    console.log(isTable);
    setIsTable(!isTable);
  };

  const handleRowClick = (record: GovernmentInspection) => {
    setSelectedGovernment(record);
    setIsTable(!isTable);
  };

  const columns: ColumnsType<GovernmentInspection> = [
    {
      title: 'Наименование контролирующего (надзорного) органа',
      dataIndex: 'legal_entity_id_gov_name',
      key: 'legal_entity_id_gov_name',
    },
    {
      title: 'Тип плана',
      dataIndex: 'plan_type',
      key: 'plan_type',
    },
    {
      title: 'Наименование плана',
      dataIndex: 'plan_name',
      key: 'plan_name',
    },
    {
      title: 'Дата начала проверки',
      dataIndex: 'from_dttm',
      key: 'from_dttm',
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (text, record: GovernmentInspection) => (
        <span onClick={() => handleRowClick(record)} style={{ cursor: 'pointer', color: 'blue' }}>
          Подробнее
        </span>
      ),
    },
  ];

  return (
    <Card
      title={<Title>Сведения о проверках субъектов государственными органами</Title>}
      style={{ marginTop: 10, width: '100%' }}
      extra={
        !isTable ? (
          <ShowAll onClick={handleClick}>Показать все данные - {newGovernmentInspection.length} шт.</ShowAll>
        ) : (
          <ShowAll onClick={handleClick}>Назад</ShowAll>
        )
      }
    >
      {!isTable && selectedGovernment !== null && <SingleGovernment governmentInspections={selectedGovernment} />}

      {isTable && Boolean(governmentInspections.length) && (
        <Table
          size={'middle'}
          columns={columns}
          dataSource={newGovernmentInspection}
          pagination={{ size: 'small', pageSize: 5 }}
        ></Table>
      )}
    </Card>
  );
};

export default SubjectGovernmentInspection;

const Title = styled.div`
  width: 100%;
  text-align: center;
`;

const ShowAll = styled.a`
  text-align: center;
`;
