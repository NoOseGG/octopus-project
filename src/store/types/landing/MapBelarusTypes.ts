export interface MapBelarusSlice {
  countEntitiesOfMap: MapBelarusObject[];
}

export interface MapBelarusObject {
  legal_form_entity_type: string;
  address_region: string;
  count_at: number;
}
