import React, { useState } from 'react';
import { IceTradeOrganizerNegotiations, IceTradeParticipant } from '@app/store/types/Subject';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';
import styled from 'styled-components';
import { Card, Table } from 'antd';
import { formatDate } from '@app/utils/utils';
import SingleIceIceTrade from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectIceTrade/components/SingleIceIceTrade';
import SubjectIceTradeLiquidPlot from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeLiquidPlot';

type MyComponentProps = {
  icetrade_organizer_negotiations: IceTradeOrganizerNegotiations[];
};

const SubjectIceTradeOrganizerNegotiations: React.FC<MyComponentProps> = ({ icetrade_organizer_negotiations }) => {
  const newIceTradeOrganizerNegotiations = icetrade_organizer_negotiations.map((organizer_negotiations) => ({
    ...organizer_negotiations,
    request_end: `${formatDate(organizer_negotiations.request_end)}`,
  }));

  const [isTable, setIsTable] = useState(false);
  const [selectedIceTradeOtherNegotiations, setSelectedIceTradeOtherNegotiations] =
    useState<IceTradeParticipant | null>(newIceTradeOrganizerNegotiations[0]);

  const handleClick = () => {
    setIsTable(!isTable);
  };

  const handleRowClick = (record: IceTradeOrganizerNegotiations) => {
    setSelectedIceTradeOtherNegotiations(record);
    setIsTable(!isTable);
  };

  return (
    <Container>
      <SubjectIceTradeLiquidPlot icetrade={icetrade_organizer_negotiations} />

      <Card
        title={<Title>Переговоры с организатором</Title>}
        style={{ display: 'grid', marginTop: 10, width: '100%' }}
        extra={
          !isTable ? (
            <ShowAll onClick={handleClick}>Показать все данные - {newIceTradeOrganizerNegotiations.length} шт.</ShowAll>
          ) : (
            <ShowAll onClick={handleClick}>Назад</ShowAll>
          )
        }
      >
        {!isTable && selectedIceTradeOtherNegotiations !== null && (
          <SingleIceIceTrade iceTrade={selectedIceTradeOtherNegotiations} />
        )}

        {isTable && Boolean(newIceTradeOrganizerNegotiations.length) && (
          <TableStyle
            dataSource={newIceTradeOrganizerNegotiations}
            bordered={true}
            size={'small'}
            tableLayout={'fixed'}
            pagination={{ pageSize: 5, pageSizeOptions: [] }}
          >
            <ColumnGroup title="Закупки IceTrade (Переговоры с организатором)">
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

export default SubjectIceTradeOrganizerNegotiations;

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
