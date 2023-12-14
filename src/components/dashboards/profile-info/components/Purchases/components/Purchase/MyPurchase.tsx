import React, { useState } from 'react';
import { IceTradeCustomer } from '@app/store/types/Subject';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';

const COLLAPSE_OPEN = 'Скрыть описание';
const COLLAPSE_CLOSE = 'Показать описание';

type MyComponentProps = {
  purchase: IceTradeCustomer;
};

const MyPurchase: React.FC<MyComponentProps> = ({ purchase }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [textCollapseButton, setTextCollapseButton] = useState(COLLAPSE_CLOSE);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) setTextCollapseButton(COLLAPSE_CLOSE);
    else setTextCollapseButton(COLLAPSE_OPEN);
  };

  return (
    <PurchaseContainer>
      <Title>
        <TitleName>{purchase.title}</TitleName>
        {/*<TitleFromDttm>{`от ${formatDate(purchase.price_byn)}`}</TitleFromDttm>*/}
      </Title>
      <S.StyledTable>
        <tbody>
          <TableLine name={'Стоимость лота эквивалент BYN'} field={purchase.lot_price_byn?.toString()} />
          <TableLine name={'Результат процедуры закупки'} field={purchase.purchase_status} />
          <TableLine name={'Дата и время начала приема предложений'} field={purchase.request_start} isDate={true} />
          {isCollapsed && (
            <>
              <TableLine
                name={'Дата и время окончания приема предложений'}
                field={purchase.request_end}
                isDate={true}
              />
              <TableLine name={'Регистрационный номер приглашения'} field={purchase.purchase_number} />
              <TableLine name={'№ лота'} field={purchase.lot_number?.toString()} />
              <TableLine name={'Дата договора'} field={purchase.contract_date} isDate={true} />
              <TableLine name={'Участники, с которыми заключен договор'} field={purchase.participants} />
              <TableLine name={'Цена договора эквивалент в BYN'} field={purchase.price_byn?.toString()} />
              <TableLine name={'Цена договора эквивалент в USD'} field={purchase.price_usd?.toString()} />
              <TableLine name={'Цена договора'} field={purchase.price?.toString()} />
              <TableLine name={'Валюта договора'} field={purchase.currency} />
              <TableLine
                name={'Места нахождения участников, с которыми заключен договор'}
                field={purchase.locations_participants}
              />
              <TableLine
                name={
                  'УНП участников (или номера документов, удостоверяющих личность, для физических лиц), с которыми заключен договор'
                }
                field={purchase.participants_identifier}
              />
              <TableLine name={'Иные участники и цены их предложений'} field={purchase.other_participants} />
              <TableLine name={'Отрасль'} field={purchase.industry} />
              <TableLine name={'Подотрасль'} field={purchase.subindustry} />
              <TableLine name={'Валюта общей ориентировочной стоимости закупки'} field={purchase.currency_purchase} />
              <TableLine
                name={'Общая ориентировочная стоимости закупки в валюте закупки'}
                field={purchase.total_price_purchase?.toString()}
              />
              <TableLine
                name={'Общая ориентировочная стоимости закупки эквивалент BYN'}
                field={purchase.total_price_purchase_byn?.toString()}
              />
              <TableLine
                name={'Общая ориентировочная стоимости закупки эквивалент USD'}
                field={purchase.total_price_purchase_usd?.toString()}
              />
              <TableLine name={'Стоимость лота в валюте лота'} field={purchase.lot_price?.toString()} />
              <TableLine name={'Валюта лота'} field={purchase.lot_currency} />
              <TableLine name={'Стоимость лота эквивалент USD'} field={purchase.lot_price_usd?.toString()} />
              <TableLine name={'Предмет закупки'} field={purchase.purchase_subject} />
              <TableLine name={'Объем (количество) поставки'} field={purchase.volume} />
              <TableLine name={'Количество'} field={purchase.volume_lot} />
              <TableLine name={'Статус закупки лота'} field={purchase.lot_status} />
              <TableLine name={'Источник финансирования'} field={purchase.source_financing} />
              <TableLine name={'Код ОКРБ'} field={purchase.okrb_code} />
            </>
          )}
        </tbody>
      </S.StyledTable>
      <span onClick={() => handleClick()}>
        <ButtonShow>{isCollapsed ? <>{textCollapseButton}</> : <>{textCollapseButton}</>}</ButtonShow>
      </span>
    </PurchaseContainer>
  );
};

export default MyPurchase;

const PurchaseContainer = styled.div`
  width: 100%;
  margin-top: 1.835rem;
`;

const Title = styled.div`
  width: 100%;
  font-size: 16px;
`;

const TitleName = styled.span`
  color: blue;
`;
