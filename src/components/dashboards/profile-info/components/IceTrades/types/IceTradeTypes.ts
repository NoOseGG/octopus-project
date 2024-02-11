import { IceTradeCustomer, IceTradeOtherParticipant, IceTradeParticipant } from '@app/store/types/Subject';

export type IceTradesType = IceTradeCustomer[] | IceTradeParticipant[] | IceTradeOtherParticipant[];
export enum NamesEnum {
  CUSTOMER = 'Заказчик',
  PARTICIPANT = 'Участник',
  OTHER_PARTICIPANT = 'Другой участник',
  ORGANIZER = 'Организатор',
  ORGANIZER_NEGOTIATIONS = 'Переговоры с организатором',
}
