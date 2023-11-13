import React, { useState } from 'react';
import { Card, Table } from 'antd';
import { CommercialRegister } from '@app/store/types/Subject';
import styled from 'styled-components';
import SingleCommercialRegister from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectCommercialRegister/components/SingleCommercialRegister';
import { ColumnsType } from 'antd/es/table';
import { formatDate } from '@app/utils/utils';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectCommercialRegister: React.FC = () => {
  const commercialRegisters = useAppSelector((state) => state.searchProfile.profile.commercial_register);
  const newCommercialRegister = commercialRegisters.map((commercialRegister) => ({
    ...commercialRegister,
    from_dttm: formatDate(commercialRegister.from_dttm),
    to_dttm: formatDate(commercialRegister.to_dttm),
  }));

  const [isTable, setIsTable] = useState(false);
  const [selectedCommercial, setSelectedCommercial] = useState<CommercialRegister | null>(newCommercialRegister[0]);

  const handleClick = () => {
    setIsTable(!isTable);
  };

  const handleRowClick = (record: CommercialRegister) => {
    setSelectedCommercial(record);
    setIsTable(!isTable);
  };

  const columns: ColumnsType<CommercialRegister> = [
    {
      title: 'Вид торгового объекта по формату',
      dataIndex: 'type_retail_format',
      key: 'type_retail_format',
    },
    {
      title: 'Классы товаров',
      dataIndex: 'goods_classes',
      key: 'goods_classes',
    },
    {
      title: 'Населенный пункт торгового объекта',
      dataIndex: 'object_address_settlement',
      key: 'object_address_settlement',
    },
    {
      title: 'Дата включения в реестр',
      dataIndex: 'from_dttm',
      key: 'from_dttm',
    },
    {
      title: 'Дата исключения из реестра',
      dataIndex: 'to_dttm',
      key: 'to_dttm',
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (text, record: CommercialRegister) => (
        <span onClick={() => handleRowClick(record)} style={{ cursor: 'pointer', color: 'blue' }}>
          Подробнее
        </span>
      ),
    },
  ];

  return (
    <>
      {Boolean(newCommercialRegister.length) && (
        <Card
          title={<Title>Данные из торгового реестра</Title>}
          style={{ display: 'grid', marginTop: 10 }}
          extra={
            !isTable ? (
              <ShowAll onClick={handleClick}>Показать все данные - {newCommercialRegister.length} шт.</ShowAll>
            ) : (
              <ShowAll onClick={handleClick}>Назад</ShowAll>
            )
          }
        >
          {!isTable && selectedCommercial !== null && (
            <SingleCommercialRegister commercialRegister={selectedCommercial} />
          )}

          {isTable && Boolean(commercialRegisters.length) && (
            <Table
              size={'middle'}
              columns={columns}
              dataSource={newCommercialRegister}
              pagination={{ size: 'small' }}
            ></Table>
          )}
        </Card>
      )}
    </>
  );
};

export default SubjectCommercialRegister;

const Title = styled.div`
  width: 100%;
  text-align: center;
`;

const ShowAll = styled.a`
  text-align: center;
`;
