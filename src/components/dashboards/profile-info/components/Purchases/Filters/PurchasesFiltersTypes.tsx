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
  PROGRESS = 'В процессе',
  FINISHED = 'Завершенно',
}
export const statusesData = [StatusEnum.ALL, StatusEnum.PROGRESS, StatusEnum.FINISHED];

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
];

export type IceTrades = {
  iceTradeCustomer: IceTradeCustomer[];
  iceTradeParticipant: IceTradeParticipant[];
  iceTradeOtherParticipant: IceTradeOtherParticipant[];
  iceTradeOrganizer: IceTradeOrganizer[];
  iceTradeOrganizerNegotiations: IceTradeOrganizerNegotiations[];
};
