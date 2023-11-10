import { FiltersType } from '@app/store/slices/searchFiltersSlice';
import { EntityType } from '@app/constants/Constants';

export interface RequestData {
  filters: FiltersType;
  legal_entity: EntityType;
}

export type DashboardProps = {
  legal_entity: EntityType;
};
