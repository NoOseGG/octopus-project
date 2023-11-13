import React, { useState } from 'react';
import { IceTradeOrganizer, IceTradeParticipant } from '@app/store/types/Subject';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';
import styled from 'styled-components';
import { Card, Table } from 'antd';
import { formatDate } from '@app/utils/utils';
import SingleIceIceTrade from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectIceTrade/components/SingleIceIceTrade';
import SubjectIceTradeLiquidPlot from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeLiquidPlot';

type MyComponentProps = {
  icetrade_organizer: IceTradeOrganizer[];
};

const SubjectIceTradeOrganizer: React.FC<MyComponentProps> = ({ icetrade_organizer }) => {
  const newIceTradeOrganizer = icetrade_organizer.map((organizer) => ({
    ...organizer,
    request_end: `${formatDate(organizer.request_end)}`,
  }));

  const [isTable, setIsTable] = useState(false);
  const [selectedIceTradeOrganizer, setSelectedIceTradeOrganizer] = useState<IceTradeOrganizer | null>(
    newIceTradeOrganizer[0],
  );

  const handleClick = () => {
    setIsTable(!isTable);
  };

  const handleRowClick = (record: IceTradeOrganizer) => {
    setSelectedIceTradeOrganizer(record);
    setIsTable(!isTable);
  };

  return (
    <Container>
      <SubjectIceTradeLiquidPlot icetrade={icetrade_organizer} />

      <Card
        title={<Title>Организатор</Title>}
        style={{ display: 'grid', marginTop: 10, width: '100%' }}
        extra={
          !isTable ? (
            <ShowAll onClick={handleClick}>Показать все данные - {newIceTradeOrganizer.length} шт.</ShowAll>
          ) : (
            <ShowAll onClick={handleClick}>Назад</ShowAll>
          )
        }
      >
        {!isTable && selectedIceTradeOrganizer !== null && <SingleIceIceTrade iceTrade={selectedIceTradeOrganizer} />}

        {isTable && Boolean(newIceTradeOrganizer.length) && (
          <TableStyle
            dataSource={newIceTradeOrganizer}
            bordered={true}
            size={'small'}
            tableLayout={'fixed'}
            pagination={{ pageSize: 5, pageSizeOptions: [] }}
          >
            <ColumnGroup title="Закупки IceTrade (Организатор)">
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

export default SubjectIceTradeOrganizer;

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
