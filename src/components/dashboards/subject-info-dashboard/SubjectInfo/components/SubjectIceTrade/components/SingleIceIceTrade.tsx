import React from 'react';
import { IceTradeCustomer, IceTradeParticipant } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldUrl from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldUrl';

type MyComponentProps = {
  iceTradeCustomer: IceTradeCustomer | IceTradeParticipant;
};

const SingleIceIceTrade: React.FC<MyComponentProps> = ({ iceTradeCustomer }) => {
  return (
    <>
      <DataField name={'Регистрационный номер приглашения'} content={formatDate(iceTradeCustomer.purchase_number)} />
      <DataField name={'№ лота'} content={iceTradeCustomer.lot_number} />
      <DataField name={'Дата договора'} content={iceTradeCustomer.contract_date} />
      <DataFieldUrl name={'Url результата процедуры закупки'} content={iceTradeCustomer.purchase_url} />
      <DataField name={'Краткое описание предмета закупки'} content={iceTradeCustomer.title} />
      <DataField name={'Описание предмета закупки'} content={iceTradeCustomer.description} />
      <DataField name={'Объем (количество) поставки'} content={iceTradeCustomer.volume} />
      <DataField name={'Участники, с которыми заключен договор'} content={iceTradeCustomer.participants} />
      <DataField name={'Цена договора эквивалент в BYN'} content={iceTradeCustomer.price_byn} />
      <DataField name={'Цена договора'} content={iceTradeCustomer.price} />
      <DataField name={'Валюта договора'} content={iceTradeCustomer.currency} />
      <DataField name={'Результат процедуры закупки'} content={iceTradeCustomer.purchase_status} />
      <DataField
        name={'Места нахождения участников, с которыми заключен договор'}
        content={iceTradeCustomer.participants_identifier}
      />
      <DataField
        name={
          'УНП участников (или номера документов, удостоверяющих личность, для физических лиц), с которыми заключен договор'
        }
        content={iceTradeCustomer.locations_participants}
      />
      <DataField name={'Иные участники и цены их предложений'} content={iceTradeCustomer.other_participants} />
      <DataFieldUrl name={'url конкурса'} content={iceTradeCustomer.contest_url} />
      <DataField name={'Отрасль'} content={iceTradeCustomer.industry} />
      <DataField name={'Подотрасль'} content={iceTradeCustomer.subindustry} />
      <DataField name={'Дата и время начала приема предложений'} content={formatDate(iceTradeCustomer.request_start)} />
      <DataField
        name={'Дата и время окончания приема предложений'}
        content={formatDate(iceTradeCustomer.request_end)}
      />
      <DataField name={'Валюта общей ориентировочной стоимости закупки'} content={iceTradeCustomer.currency_purchase} />
      <DataField
        name={'Общая ориентировочная стоимости закупки в валюте закупки'}
        content={iceTradeCustomer.total_price_purchase}
      />
      <DataField
        name={'Общая ориентировочная стоимости закупки эквивалент BYN'}
        content={iceTradeCustomer.total_price_purchase_byn}
      />
      <DataField
        name={'Общая ориентировочная стоимости закупки эквивалент USD'}
        content={iceTradeCustomer.total_price_purchase_usd}
      />
      <DataField name={'Стоимость лота в валюте лота'} content={iceTradeCustomer.lot_price} />
      <DataField name={'Валюта лота'} content={iceTradeCustomer.lot_currency} />
      <DataField name={'Стоимость лота эквивалент BYN'} content={iceTradeCustomer.lot_price_byn} />
      <DataField name={'Стоимость лота эквивалент USD'} content={iceTradeCustomer.lot_price_usd} />
      <DataField name={'Предмет закупки'} content={iceTradeCustomer.purchase_subject} />
      <DataField name={'Количество'} content={iceTradeCustomer.volume_lot} />
      <DataField name={'Статус закупки лота'} content={iceTradeCustomer.lot_status} />
      <DataField name={'Источник финансирования'} content={iceTradeCustomer.source_financing} />
      <DataField name={'Код ОКРБ'} content={iceTradeCustomer.okrb_code} />
    </>
  );
};

export default SingleIceIceTrade;
