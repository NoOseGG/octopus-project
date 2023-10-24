import React, { useState } from 'react';
import { IceTradeCustomer } from '@app/store/types/Subject';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';
import styled from 'styled-components';
import { Card, Table } from 'antd';
import { formatDate } from '@app/utils/utils';
import SingleIceIceTrade from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIceTrade/components/SingleIceIceTrade';
import SubjectIceTradeLiquidPlot from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeLiquidPlot';

type MyComponentProps = {
  icetrade_customer: IceTradeCustomer[];
};

const SubjectIceTradeCustomer: React.FC<MyComponentProps> = ({ icetrade_customer }) => {
  const [isTable, setIsTable] = useState(false);
  const [selectedIceTradeCustomer, setSelectedIceTradeCustomer] = useState<IceTradeCustomer | null>(
    icetrade_customer[0],
  );

  const newIceTradeCustomer = icetrade_customer.map((vacancy) => ({
    ...vacancy,
    request_end: `${formatDate(vacancy.request_end)}`,
  }));

  const handleClick = () => {
    setIsTable(!isTable);
  };

  const handleRowClick = (record: IceTradeCustomer) => {
    setSelectedIceTradeCustomer(record);
    setIsTable(!isTable);
  };

  return (
    <Container>
      <SubjectIceTradeLiquidPlot icetrade={icetrade_customer} />

      <Card
        title={<Title>Покупатель</Title>}
        style={{ display: 'grid', marginTop: 10, width: '100%' }}
        extra={
          !isTable ? (
            <ShowAll onClick={handleClick}>Показать все данные - {newIceTradeCustomer.length} шт.</ShowAll>
          ) : (
            <ShowAll onClick={handleClick}>Назад</ShowAll>
          )
        }
      >
        {!isTable && selectedIceTradeCustomer !== null && <SingleIceIceTrade iceTrade={selectedIceTradeCustomer} />}

        {isTable && Boolean(newIceTradeCustomer.length) && (
          <TableStyle
            dataSource={newIceTradeCustomer}
            bordered={true}
            size={'small'}
            tableLayout={'fixed'}
            pagination={{ pageSize: 5, pageSizeOptions: [] }}
          >
            <ColumnGroup title="Закупки IceTrade (Покупатель)">
              <Column title="Название" dataIndex="title" key="title" />
              <Column title="Сумма BYN" dataIndex="lot_price_byn" key="lot_price_byn" />
              <Column title="Дата завершения" dataIndex="request_end" key="request_end" />
              <Column
                title="Действие"
                key="actions"
                render={(text, record: IceTradeCustomer) => (
                  <span onClick={() => handleRowClick(record)} style={{ cursor: 'pointer', color: 'blue' }}>
                    Подробнее
                  </span>
                )}
              />
            </ColumnGroup>
          </TableStyle>
        )}
      </Card>
    </Container>
  );
};

export default SubjectIceTradeCustomer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;

const TableStyle = styled(Table)`
  margin-top: 10px;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
`;

const ShowAll = styled.a`
  text-align: center;
`;
