import { IceTradeCustomer } from '@app/store/types/Subject';
import {
  IceTrades,
  RolesEnum,
  StatusEnum,
  TypeFilterEnum,
} from '@app/components/dashboards/profile-info/components/Purchases/Filters/PurchasesFiltersTypes';

export const sortPurchases = (
  status: StatusEnum,
  role: RolesEnum,
  typeFilter: TypeFilterEnum,
  iceTrades: IceTrades,
): IceTradeCustomer[] => {
  const iceTrade = getSelectedArray(role, iceTrades);
  const sortedTypeIceTrade = getSortedDateArray(typeFilter, iceTrade);
  return sortedTypeIceTrade;
};

const getSelectedArray = (role: RolesEnum, iceTrades: IceTrades): IceTradeCustomer[] => {
  switch (role) {
    case RolesEnum.ALL:
      return [
        ...iceTrades.iceTradeCustomer,
        ...iceTrades.iceTradeParticipant,
        ...iceTrades.iceTradeOtherParticipant,
        ...iceTrades.iceTradeOrganizer,
        ...iceTrades.iceTradeOrganizerNegotiations,
      ];
    case RolesEnum.CUSTOMER:
      return iceTrades.iceTradeCustomer;
    case RolesEnum.PARTICIPANT:
      return iceTrades.iceTradeParticipant;
    case RolesEnum.OTHER_PARTICIPANT:
      return iceTrades.iceTradeOtherParticipant;
    case RolesEnum.ORGANIZER:
      return iceTrades.iceTradeOrganizer;
    case RolesEnum.ORGANIZER_NEGOTIATION:
      return iceTrades.iceTradeOrganizerNegotiations;
  }
};

const getSortedDateArray = (typeFilter: TypeFilterEnum, iceTrade: IceTradeCustomer[]): IceTradeCustomer[] => {
  switch (typeFilter) {
    case TypeFilterEnum.DATE_ASCENDING: {
      return iceTrade.sort((a, b) => {
        const dateA = a.request_start ? new Date(a.request_start) : null;
        const dateB = b.request_start ? new Date(b.request_start) : null;

        if (dateA && dateB) {
          return dateA.getTime() - dateB.getTime();
        }

        return 0;
      });
    }
    case TypeFilterEnum.DATE_DESCENDING: {
      return iceTrade.sort((a, b) => {
        const dateA = a.request_start ? new Date(a.request_start) : null;
        const dateB = b.request_start ? new Date(b.request_start) : null;

        if (dateA && dateB) {
          return dateB.getTime() - dateA.getTime();
        }

        return 0;
      });
    }
  }
};
