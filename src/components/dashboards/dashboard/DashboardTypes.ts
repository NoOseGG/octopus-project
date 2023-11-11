import { FiltersType } from '@app/store/slices/searchFiltersSlice';

export interface RequestData {
  filters: FiltersType;
}

export enum EntityType {
  LEGAL_ENTITY,
  SOLE_TRADE,
}

export type DashboardProps = {
  legalEntity: EntityType;
  dynamicPath: DynamicPath;
};

export enum DynamicPath {
  CREATED_ALL,
  CREATED_YEAR,
  CREATED_QUARTER,
  CREATED_OPERATION,
  CREATED_SOLE_TRADE_ALL,
  CREATED_SOLE_TRADE_YEAR,
  CREATED_SOLE_TRADE_QUARTER,
  CREATED_SOLE_TRADE_OPERATION,
}
