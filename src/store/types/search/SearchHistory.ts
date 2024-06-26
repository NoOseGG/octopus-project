export interface SearchHistoryObject {
  legal_entity_id: string | null;
  view_dttm: string | null;
  user_profile: string | null;
  legal_entity_name: string | null;
}

export interface ResponseSearchHistory {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: SearchHistoryObject[];
}

export interface SearchHistoryState {
  history: ResponseSearchHistory;
  loading: boolean;
  error: string | null;
}
