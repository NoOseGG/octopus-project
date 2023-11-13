import React, { useState } from 'react';
import { IceTradeParticipant } from '@app/store/types/Subject';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';
import styled from 'styled-components';
import { Card, Table } from 'antd';
import { formatDate } from '@app/utils/utils';
import SingleIceIceTrade from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectIceTrade/components/SingleIceIceTrade';
import SubjectIceTradeLiquidPlot from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeLiquidPlot';

type MyComponentProps = {
  icetrade_participant: IceTradeParticipant[];
};

const SubjectIceTradeParticipant: React.FC<MyComponentProps> = ({ icetrade_participant }) => {
  const newIceTradeParticipant = icetrade_participant.map((participant) => ({
    ...participant,
    request_end: `${formatDate(participant.request_end)}`,
  }));

  const [isTable, setIsTable] = useState(false);
  const [selectedIceTradeParticipant, setSelectedIceTradeParticipant] = useState<IceTradeParticipant | null>(
    newIceTradeParticipant[0],
  );

  const handleClick = () => {
    setIsTable(!isTable);
  };

  const handleRowClick = (record: IceTradeParticipant) => {
    setSelectedIceTradeParticipant(record);
    setIsTable(!isTable);
  };

  return (
    <Container>
      <SubjectIceTradeLiquidPlot icetrade={icetrade_participant} />

      <Card
        title={<Title>Участник</Title>}
        style={{ display: 'grid', marginTop: 10, width: '100%' }}
        extra={
          !isTable ? (
            <ShowAll onClick={handleClick}>Показать все данные - {newIceTradeParticipant.length} шт.</ShowAll>
          ) : (
            <ShowAll onClick={handleClick}>Назад</ShowAll>
          )
        }
      >
        {!isTable && selectedIceTradeParticipant !== null && (
          <SingleIceIceTrade iceTrade={selectedIceTradeParticipant} />
        )}

        {isTable && Boolean(newIceTradeParticipant.length) && (
          <TableStyle
            dataSource={newIceTradeParticipant}
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
                render={(text, record: IceTradeParticipant) => (
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

export default SubjectIceTradeParticipant;

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
