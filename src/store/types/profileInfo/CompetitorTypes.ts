export interface ICompetitorRequestData {
  settlement: string;
  typeActivity: string;
}

export interface ICountCompetitorState {
  count: number;
  isLoading: boolean;
  error: string | null;
}

export interface ICountCompetitorResponse {
  count: number;
}
