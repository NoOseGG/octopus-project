export interface MapBelarusSlice {
  legalEntities: MapBelarusResponse;
  soleTrades: MapBelarusResponse;
}

export interface MapBelarusResponse {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: MapBelarusObject[];
}

export interface MapBelarusObject {
  group_fields: {
    address_region: string;
  };
  Count: number;
}
