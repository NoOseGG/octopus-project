import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import React from 'react';
import {
  IceTradeCustomer,
  IceTradeOrganizer,
  IceTradeOrganizerNegotiations,
  IceTradeOtherParticipant,
  IceTradeParticipant,
} from '@app/store/types/Subject';

export enum StatusEnum {
  ALL = 'Все статусы',
  FINISHED = 'Состоялась',
  CANCELLED = 'Не состоялась',
  RESULT_NOT_POST = 'Результат не размещен',
}
export const statusesData = [StatusEnum.ALL, StatusEnum.FINISHED, StatusEnum.CANCELLED, StatusEnum.RESULT_NOT_POST];

export enum RolesEnum {
  ALL = 'Все роли',
  CUSTOMER = 'Заказчик',
  PARTICIPANT = 'Участник',
  OTHER_PARTICIPANT = 'Участник (Договор)',
  ORGANIZER = 'Организатор',
  ORGANIZER_NEGOTIATION = 'Организатор (Переговоры)',
}
export const RolesData = [
  RolesEnum.ALL,
  RolesEnum.CUSTOMER,
  RolesEnum.PARTICIPANT,
  RolesEnum.OTHER_PARTICIPANT,
  RolesEnum.ORGANIZER,
  RolesEnum.ORGANIZER_NEGOTIATION,
];

export enum TypeFilterEnum {
  DATE_ASCENDING,
  DATE_DESCENDING,
  SUM_ASCENDING,
  SUM_DESCENDING,
}
export const typeFilterData = [
  {
    value: TypeFilterEnum.DATE_ASCENDING,
    label: (
      <span>
        <ArrowDownOutlined /> По дате
      </span>
    ),
  },
  {
    value: TypeFilterEnum.DATE_DESCENDING,
    label: (
      <span>
        <ArrowUpOutlined /> По дате
      </span>
    ),
  },
  {
    value: TypeFilterEnum.SUM_ASCENDING,
    label: (
      <span>
        <ArrowDownOutlined /> По сумме
      </span>
    ),
  },
  {
    value: TypeFilterEnum.SUM_DESCENDING,
    label: (
      <span>
        <ArrowUpOutlined /> По сумме
      </span>
    ),
  },
];

export type IceTrades = {
  iceTradeCustomer: IceTradeCustomer[];
  iceTradeParticipant: IceTradeParticipant[];
  iceTradeOtherParticipant: IceTradeOtherParticipant[];
  iceTradeOrganizer: IceTradeOrganizer[];
  iceTradeOrganizerNegotiations: IceTradeOrganizerNegotiations[];
};

export interface IceTrade {
  purchase_number: string | null;
  lot_number: number | null;
  contract_date: string | null;
  purchase_url: string | null;
  title: string | null;
  description: string | null;
  volume: string | null;
  participants: string | null;
  price_byn: number | null;
  price_usd: number | null;
  price: number | null;
  currency: string | null;
  purchase_status: string | null;
  locations_participants: string | null;
  participants_identifier: string | null;
  other_participants: string | null;
  contest_url: string | null;
  industry: string | null;
  subindustry: string | null;
  request_start: string | null;
  request_end: string | null;
  currency_purchase: string | null;
  total_price_purchase: number | null;
  total_price_purchase_byn: number | null;
  total_price_purchase_usd: number | null;
  lot_price: number | null;
  lot_currency: string | null;
  lot_price_byn: number | null;
  lot_price_usd: number | null;
  purchase_subject: string | null;
  volume_lot: string | null;
  lot_status: string | null;
  source_financing: string | null;
  okrb_code: string | null;
}
