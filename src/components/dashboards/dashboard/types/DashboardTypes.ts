import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';

export interface RequestData {
  filters: FiltersType;
}

export enum EntityType {
  LEGAL_ENTITY,
  SOLE_TRADE,
}
