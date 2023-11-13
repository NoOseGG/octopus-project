import React, { useState } from 'react';
import { IceTradeOtherParticipant, IceTradeParticipant } from '@app/store/types/Subject';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';
import styled from 'styled-components';
import { Card, Table } from 'antd';
import { formatDate } from '@app/utils/utils';
import SingleIceIceTrade from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectIceTrade/components/SingleIceIceTrade';
import SubjectIceTradeLiquidPlot from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeLiquidPlot';

type MyComponentProps = {
  icetrade_other_participant: IceTradeOtherParticipant[];
};

const SubjectIceTradeOtherParticipant: React.FC<MyComponentProps> = ({ icetrade_other_participant }) => {
  const newIceTradeOtherParticipant = icetrade_other_participant.map((other_participant) => ({
    ...other_participant,
    request_end: `${formatDate(other_participant.request_end)}`,
  }));

  const [isTable, setIsTable] = useState(false);
  const [selectedIceTradeOtherParticipant, setSelectedIceTradeOtherParticipant] =
    useState<IceTradeOtherParticipant | null>(newIceTradeOtherParticipant[0]);

  const handleClick = () => {
    setIsTable(!isTable);
  };

  const handleRowClick = (record: IceTradeParticipant) => {
    setSelectedIceTradeOtherParticipant(record);
    setIsTable(!isTable);
  };

  return (
    <Container>
      <SubjectIceTradeLiquidPlot icetrade={icetrade_other_participant} />

      <Card
        title={<Title>Другой участник</Title>}
        style={{ display: 'grid', marginTop: 10, width: '100%' }}
        extra={
          !isTable ? (
            <ShowAll onClick={handleClick}>Показать все данные - {newIceTradeOtherParticipant.length} шт.</ShowAll>
          ) : (
            <ShowAll onClick={handleClick}>Назад</ShowAll>
          )
        }
      >
        {!isTable && selectedIceTradeOtherParticipant !== null && (
          <SingleIceIceTrade iceTrade={selectedIceTradeOtherParticipant} />
        )}

        {isTable && Boolean(newIceTradeOtherParticipant.length) && (
          <TableStyle
            dataSource={newIceTradeOtherParticipant}
            bordered={true}
            size={'small'}
            tableLayout={'fixed'}
            pagination={{ pageSize: 5, pageSizeOptions: [] }}
          >
            <ColumnGroup title="Закупки IceTrade (Другой участник)">
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

export default SubjectIceTradeOtherParticipant;

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
