import React, { useState } from 'react';
import { IceTradeCustomer } from '@app/store/types/Subject';
import styled from 'styled-components';

const IceTradeCustomerTitle = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Container = styled.div`
  padding: 5px;
  border: 1px solid #ffc53d;
  margin: 10px 0;
`;

const Line = styled.div`
  padding: 5px;
  border: 1px solid #000c17;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
  padding: 5px;
  text-align: center;
`;

type MyComponentProps = {
  iceTradeCustomers: IceTradeCustomer[];
};

const SubjectWebSites: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let count = 0;
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.iceTradeCustomers.length > 0 ? (
        <div>
          <IceTradeCustomerTitle onClick={handleClick}>
            Субъект является заказчиком процедуры закупки:
          </IceTradeCustomerTitle>{' '}
          {props.iceTradeCustomers.length > 0 && `- ${props.iceTradeCustomers.length}`}
        </div>
      ) : (
        <div>NULL</div>
      )}

      {isExpanded && (
        <div>
          {props.iceTradeCustomers.map((iceTradeCustomer) => (
            <Container key={count++}>
              <Title>{iceTradeCustomer.title}</Title>
              {iceTradeCustomer.purchase_number && (
                <Line>Регистрационный номер приглашения: {iceTradeCustomer.purchase_number}</Line>
              )}
              {Boolean(iceTradeCustomer.lot_number) && <Line>№ лота: {iceTradeCustomer.lot_number}</Line>}
              {iceTradeCustomer.contract_date && <Line>Дата договора: {iceTradeCustomer.contract_date}</Line>}
              {iceTradeCustomer.purchase_url && (
                <Line>Url результата процедуры закупки: {iceTradeCustomer.purchase_url}</Line>
              )}
              {iceTradeCustomer.title && <Line>Краткое описание предмета закупки: {iceTradeCustomer.title}</Line>}
              {iceTradeCustomer.description && <Line>Описание предмета закупки: {iceTradeCustomer.description}</Line>}
              {iceTradeCustomer.volume && <Line>Объем (количество) поставки: {iceTradeCustomer.volume}</Line>}
              {iceTradeCustomer.participants && (
                <Line>Участники, с которыми заключен договор: {iceTradeCustomer.participants}</Line>
              )}
              {Boolean(iceTradeCustomer.price_byn) && (
                <Line>Цена договора эквивалент в BYN: {iceTradeCustomer.price_byn}</Line>
              )}
              {Boolean(iceTradeCustomer.price_usd) && (
                <Line>Цена договора эквивалент в USD: {iceTradeCustomer.price_usd}</Line>
              )}
              {Boolean(iceTradeCustomer.price) && <Line>Цена договора: {iceTradeCustomer.price}</Line>}
              {iceTradeCustomer.currency && <Line>Валюта договора: {iceTradeCustomer.currency}</Line>}
              {iceTradeCustomer.purchase_status && (
                <Line>Результат процедуры закупки: {iceTradeCustomer.purchase_status}</Line>
              )}
              {iceTradeCustomer.locations_participants && (
                <Line>
                  Места нахождения участников, с которыми заключен договор: {iceTradeCustomer.locations_participants}
                </Line>
              )}
              {iceTradeCustomer.participants_identifier && (
                <Line>
                  УНП участников (или номера документов, удостоверяющих личность, для физических лиц), с которыми
                  заключен договор: {iceTradeCustomer.participants_identifier}
                </Line>
              )}
              {iceTradeCustomer.other_participants && (
                <Line>Иные участники и цены их предложений: {iceTradeCustomer.other_participants}</Line>
              )}
              {iceTradeCustomer.contest_url && <Line>url конкурса: {iceTradeCustomer.contest_url}</Line>}
              {iceTradeCustomer.industry && <Line>Отрасль: {iceTradeCustomer.industry}</Line>}
              {iceTradeCustomer.subindustry && <Line>Подотрасль: {iceTradeCustomer.subindustry}</Line>}
              {iceTradeCustomer.request_start && (
                <Line>Дата и время начала приема предложений: {iceTradeCustomer.request_start}</Line>
              )}
              {iceTradeCustomer.request_end && (
                <Line>Дата и время окончания приема предложений: {iceTradeCustomer.request_end}</Line>
              )}
              {iceTradeCustomer.currency_purchase && (
                <Line>Валюта общей ориентировочной стоимости закупки: {iceTradeCustomer.currency_purchase}</Line>
              )}
              {Boolean(iceTradeCustomer.total_price_purchase) && (
                <Line>
                  Общая ориентировочная стоимости закупки в валюте закупки: {iceTradeCustomer.total_price_purchase}
                </Line>
              )}
              {Boolean(iceTradeCustomer.total_price_purchase_byn) && (
                <Line>
                  Общая ориентировочная стоимости закупки эквивалент BYN: {iceTradeCustomer.total_price_purchase_byn}
                </Line>
              )}
              {Boolean(iceTradeCustomer.total_price_purchase_usd) && (
                <Line>
                  Общая ориентировочная стоимости закупки эквивалент USD: {iceTradeCustomer.total_price_purchase_usd}
                </Line>
              )}
              {Boolean(iceTradeCustomer.lot_price) && (
                <Line>Стоимость лота в валюте лота: {iceTradeCustomer.lot_price}</Line>
              )}
              {iceTradeCustomer.lot_currency && <Line>Валюта лота: {iceTradeCustomer.lot_currency}</Line>}
              {Boolean(iceTradeCustomer.lot_price_byn) && (
                <Line>Стоимость лота эквивалент BYN: {iceTradeCustomer.lot_price_byn}</Line>
              )}
              {Boolean(iceTradeCustomer.lot_price_usd) && (
                <Line>Стоимость лота эквивалент USD: {iceTradeCustomer.lot_price_usd}</Line>
              )}
              {iceTradeCustomer.purchase_subject && <Line>Предмет закупки: {iceTradeCustomer.purchase_subject}</Line>}
              {iceTradeCustomer.volume_lot && <Line>Количество: {iceTradeCustomer.volume_lot}</Line>}
              {iceTradeCustomer.lot_status && <Line>Статус закупки лота: {iceTradeCustomer.lot_status}</Line>}
              {iceTradeCustomer.source_financing && (
                <Line>Источник финансирования: {iceTradeCustomer.source_financing}</Line>
              )}
              {iceTradeCustomer.okrb_code && <Line>Код ОКРБ: {iceTradeCustomer.okrb_code}</Line>}
            </Container>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubjectWebSites;
