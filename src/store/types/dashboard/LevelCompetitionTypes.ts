export interface ILevelCompetitionState {
  level_competition: ILevelCompetitionResponse;
  isLoading: boolean;
  error: string | null;
}

export interface ILevelCompetitionResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ILevelCompetitionObject[];
}

export interface ILevelCompetitionObject {
  legal_entity_id: string;
  type_activity_name: string;
  settlement: string;
  count_lei: number;
  avg_lei: number;
  count_settlement: number;
  ratio_by_settlement: number;
  high_avg: number;
  level_competition: string;
}
