export interface CurrentByAgeState {
  age: number;
  loading: boolean;
  error: string | null;
}

export interface CurrentByAvgAgeState {
  count: number;
  loading: boolean;
  error: string | null;
}

export interface ResponseCurrentByAge {
  count: number;
}

export interface ResponseCurrentByAvgAge {
  results: CurrentAvgAgeObject[];
}

export interface CurrentAvgAgeObject {
  group_fields: {
    company_status_code: string;
  };
  Avg: number;
}
