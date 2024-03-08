import { IceTradeCustomer, IceTradeOtherParticipant, IceTradeParticipant } from '@app/store/types/Subject';

export type IceTradesType = IceTradeCustomer[] | IceTradeParticipant[] | IceTradeOtherParticipant[];

export enum IceTradeNamesEnum {
  CUSTOMER = 'Заказчик',
  PARTICIPANT = 'Участник',
  OTHER_PARTICIPANT = 'Другой участник',
  // ORGANIZER = 'Организатор',
  // ORGANIZER_NEGOTIATIONS = 'Переговоры с организатором',
}

export interface IceTradeHistoryDataType {
  short_name_participants: string;
  contract_date: string | null;
  description: string;
  volume_lot: string;
  total_price_purchase_byn: number;
  total_price_purchase_usd: number;
  firm_name: string;
  participants_identifier: string;
  short_name: string;
  request_end: string | null;
  customer_id: string;
  customer_name: string;
}
