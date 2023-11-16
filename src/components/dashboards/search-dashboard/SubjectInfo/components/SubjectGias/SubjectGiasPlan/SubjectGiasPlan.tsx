import React, { useState } from 'react';
import { Card, Table } from 'antd';
import { GiasPlan } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';
import styled from 'styled-components';
import { ColumnsType } from 'antd/es/table';
import SingleGiasPlan from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectGias/SubjectGiasPlan/SingleGiasPlan/SingleGiasPlan';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectGiasPlan: React.FC = () => {
  const gias_plans = useAppSelector((state) => state.searchProfile.profile.gias_plan);
  const new_gias_plan = gias_plans.map((gias_plan) => ({
    ...gias_plan,
    from_dttm: formatDate(gias_plan.from_dttm),
  }));

  const [isTable, setIsTable] = useState(false);
  const [selectedGiasPlan, setSelectedGiasPlan] = useState<GiasPlan | null>(new_gias_plan[0]);

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
    <>
      {Boolean(gias_plans.length) && (
        <Card
          title={<Title>Реестр ГИАС планы закупок</Title>}
          style={{ display: 'grid', marginTop: 10 }}
          extra={
            !isTable ? (
              <ShowAll onClick={handleClick}>Показать все данные - {new_gias_plan.length} шт.</ShowAll>
            ) : (
              <ShowAll onClick={handleClick}>Назад</ShowAll>
            )
          }
        >
          {!isTable && selectedGiasPlan !== null && <SingleGiasPlan giasPlan={selectedGiasPlan} />}

          {isTable && Boolean(new_gias_plan.length) && (
            <Table size={'middle'} columns={columns} dataSource={new_gias_plan} pagination={{ size: 'small' }}></Table>
          )}
        </Card>
      )}
    </>
  );
};

export default SubjectGiasPlan;

const Title = styled.div`
  width: 100%;
  text-align: center;
`;

const ShowAll = styled.a`
  text-align: center;
`;
