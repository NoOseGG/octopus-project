export interface FavouritesResponse {
  results: FavouritesObject[];
}

export interface FavouritesObject {
  created_at: string | null;
  legal_entity_id: string | null;
}

export interface FavouritesRequest {
  legal_entity_id: string;
}

export interface FavouritesState {
  favourites: FavouritesResponse[];
  loading: boolean;
  error: string | null;
}
