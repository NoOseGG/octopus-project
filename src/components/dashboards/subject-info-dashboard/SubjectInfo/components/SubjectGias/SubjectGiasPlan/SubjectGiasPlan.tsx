import React, { useState } from 'react';
import { Card, Table } from 'antd';
import { GiasPlan } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';
import styled from 'styled-components';
import { ColumnsType } from 'antd/es/table';
import SingleGiasPlan from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasPlan/SingleGiasPlan/SingleGiasPlan';

type MyComponentProps = {
  giasPlans: GiasPlan[];
};

const SubjectGiasAccreditedCustomer: React.FC<MyComponentProps> = ({ giasPlans }) => {
  const newGiasPlans = giasPlans.map((giasPlan) => ({
    ...giasPlan,
    from_dttm: formatDate(giasPlan.from_dttm),
  }));

  const [isTable, setIsTable] = useState(false);
  const [selectedGiasPlan, setSelectedGiasPlan] = useState<GiasPlan | null>(newGiasPlans[0]);

  const handleClick = () => {
    setIsTable(!isTable);
  };

  const handleRowClick = (record: GiasPlan) => {
    setSelectedGiasPlan(record);
    setIsTable(!isTable);
  };

  const columns: ColumnsType<GiasPlan> = [
    {
      title: 'Дата включения в реестр',
      dataIndex: 'from_dttm',
      key: 'from_dttm',
    },
    {
      title: 'Номер пункта плана',
      dataIndex: 'public_number',
      key: 'public_number',
    },
    {
      title: 'Предмет государственной закупки',
      dataIndex: 'subject_purchase',
      key: 'subject_purchase',
    },
    {
      title: 'Оплата со счетов казначейства эквивалент в USD',
      dataIndex: 'budget_cost_usd',
      key: 'budget_cost_usd',
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (text, record: GiasPlan) => (
        <span onClick={() => handleRowClick(record)} style={{ cursor: 'pointer', color: 'blue' }}>
          Подробнее
        </span>
      ),
    },
  ];

  return (
    <Card
      title={<Title>Данные из торгового реестра</Title>}
      style={{ display: 'grid', marginTop: 10 }}
      extra={
        !isTable ? (
          <ShowAll onClick={handleClick}>Показать все данные - {newGiasPlans.length} шт.</ShowAll>
        ) : (
          <ShowAll onClick={handleClick}>Назад</ShowAll>
        )
      }
    >
      {!isTable && selectedGiasPlan !== null && <SingleGiasPlan giasPlan={selectedGiasPlan} />}

      {isTable && Boolean(newGiasPlans.length) && (
        <Table size={'middle'} columns={columns} dataSource={newGiasPlans} pagination={{ size: 'small' }}></Table>
      )}
    </Card>
  );
};

export default SubjectGiasAccreditedCustomer;

const Title = styled.div`
  width: 100%;
  text-align: center;
`;

const ShowAll = styled.a`
  text-align: center;
`;
