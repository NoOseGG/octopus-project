import React from 'react';
import { IceTradeCustomer, IceTradeParticipant } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldUrl from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataFieldUrl';

type MyComponentProps = {
  iceTrade: IceTradeCustomer | IceTradeParticipant;
};

const SingleIceIceTrade: React.FC<MyComponentProps> = ({ iceTrade }) => {
  return (
    <>
      <DataField name={'Регистрационный номер приглашения'} content={formatDate(iceTrade.purchase_number)} />
      <DataField name={'№ лота'} content={iceTrade.lot_number} />
      <DataField name={'Дата договора'} content={iceTrade.contract_date} />
      <DataFieldUrl name={'Url результата процедуры закупки'} content={iceTrade.purchase_url} />
      <DataField name={'Краткое описание предмета закупки'} content={iceTrade.title} />
      <DataField name={'Описание предмета закупки'} content={iceTrade.description} />
      <DataField name={'Объем (количество) поставки'} content={iceTrade.volume} />
      <DataField name={'Участники, с которыми заключен договор'} content={iceTrade.participants} />
      <DataField name={'Цена договора эквивалент в BYN'} content={iceTrade.price_byn} />
      <DataField name={'Цена договора'} content={iceTrade.price} />
      <DataField name={'Валюта договора'} content={iceTrade.currency} />
      <DataField name={'Результат процедуры закупки'} content={iceTrade.purchase_status} />
      <DataField
        name={'Места нахождения участников, с которыми заключен договор'}
        content={iceTrade.participants_identifier}
      />
      <DataField
        name={
          'УНП участников (или номера документов, удостоверяющих личность, для физических лиц), с которыми заключен договор'
        }
        content={iceTrade.locations_participants}
      />
      <DataField name={'Иные участники и цены их предложений'} content={iceTrade.other_participants} />
      <DataFieldUrl name={'url конкурса'} content={iceTrade.contest_url} />
      <DataField name={'Отрасль'} content={iceTrade.industry} />
      <DataField name={'Подотрасль'} content={iceTrade.subindustry} />
      <DataField name={'Дата и время начала приема предложений'} content={formatDate(iceTrade.request_start)} />
      <DataField name={'Дата и время окончания приема предложений'} content={formatDate(iceTrade.request_end)} />
      <DataField name={'Валюта общей ориентировочной стоимости закупки'} content={iceTrade.currency_purchase} />
      <DataField
        name={'Общая ориентировочная стоимости закупки в валюте закупки'}
        content={iceTrade.total_price_purchase}
      />
      <DataField
        name={'Общая ориентировочная стоимости закупки эквивалент BYN'}
        content={iceTrade.total_price_purchase_byn}
      />
      <DataField
        name={'Общая ориентировочная стоимости закупки эквивалент USD'}
        content={iceTrade.total_price_purchase_usd}
      />
      <DataField name={'Стоимость лота в валюте лота'} content={iceTrade.lot_price} />
      <DataField name={'Валюта лота'} content={iceTrade.lot_currency} />
      <DataField name={'Стоимость лота эквивалент BYN'} content={iceTrade.lot_price_byn} />
      <DataField name={'Стоимость лота эквивалент USD'} content={iceTrade.lot_price_usd} />
      <DataField name={'Предмет закупки'} content={iceTrade.purchase_subject} />
      <DataField name={'Количество'} content={iceTrade.volume_lot} />
      <DataField name={'Статус закупки лота'} content={iceTrade.lot_status} />
      <DataField name={'Источник финансирования'} content={iceTrade.source_financing} />
      <DataField name={'Код ОКРБ'} content={iceTrade.okrb_code} />
    </>
  );
};

export default SingleIceIceTrade;
