import {
  IceTrade,
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
): IceTrade[] => {
  console.log(`role: ${role} status: ${status} typeFilter: ${typeFilter}`);
  const iceTrade = getSelectedArray(role, iceTrades);
  const sortedTypeIceTrade = getSortedTypeArray(typeFilter, iceTrade);
  const sortedStatusIceTrade = getSortedStatusArray(status, sortedTypeIceTrade);
  return sortedStatusIceTrade;
};

const getSelectedArray = (role: RolesEnum, iceTrades: IceTrades): IceTrade[] => {
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

const getSortedTypeArray = (typeFilter: TypeFilterEnum, iceTrade: IceTrade[]): IceTrade[] => {
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
    case TypeFilterEnum.SUM_ASCENDING: {
      return iceTrade.sort((a, b) => {
        const sumA = a.lot_price_byn ? a.lot_price_byn : null;
        const sumB = b.lot_price_byn ? b.lot_price_byn : null;

        if (sumA && sumB) {
          console.log('SUM ASC');

          return sumA - sumB;
        }

        return 0;
      });
    }
    case TypeFilterEnum.SUM_DESCENDING: {
      return iceTrade.sort((a, b) => {
        const sumA = a.lot_price_byn ? a.lot_price_byn : null;
        const sumB = b.lot_price_byn ? b.lot_price_byn : null;

        if (sumA && sumB) {
          console.log('SUM DES');
          return sumB - sumA;
        }

        return 0;
      });
    }
  }
};

const getSortedStatusArray = (status: StatusEnum, iceTrade: IceTrade[]): IceTrade[] => {
  switch (status) {
    case StatusEnum.ALL:
      return iceTrade;
    case StatusEnum.FINISHED:
      return [...iceTrade.filter((item) => item.purchase_status === StatusEnum.FINISHED)];
    case StatusEnum.CANCELLED:
      return [...iceTrade.filter((item) => item.purchase_status === StatusEnum.CANCELLED)];
    case StatusEnum.RESULT_NOT_POST:
      return [...iceTrade.filter((item) => item.purchase_status === StatusEnum.RESULT_NOT_POST)];
  }
};
