import { IceTradeCustomer, StatusType } from '@app/store/types/Subject';
import {
  IceTrades,
  RolesEnum,
  TypeFilterEnum,
} from '@app/components/dashboards/profile-info/components/Purchases/Filters/PurchasesFiltersTypes';

export const sortPurchases = (
  status: StatusType,
  role: RolesEnum,
  typeFilter: TypeFilterEnum,
  iceTrades: IceTrades,
): IceTradeCustomer[] => {
  const iceTrade = getSelectedArray(role, iceTrades);

  return [];
};

const getSelectedArray = (role: RolesEnum, iceTrades: IceTrades): IceTradeCustomer[] => {
  switch (role) {
    case RolesEnum.ALL:
      return iceTrades.iceTradeCustomer;
    case RolesEnum.CUSTOMER:
      return iceTrades.iceTradeCustomer;
    case RolesEnum.PARTICIPANT:
      return iceTrades.iceTradeParticipant;
    case RolesEnum.OTHER_PARTICIPANT:
      return iceTrades.iceTradeOtherParticipant;
    case RolesEnum.ORGANIZER:
      return iceTrades.IceTradeOrganizer;
    case RolesEnum.ORGANIZER_NEGOTIATION:
      return iceTrades.iceTradeOrganizerNegotiations;
  }
};
