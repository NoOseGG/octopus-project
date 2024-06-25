export interface FavouritesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: FavouritesObject[];
}

export interface FavouritesObject {
  created_at: string | null;
  legal_entity_id: string | null;
  legal_entity_name: string | null;
}

export interface FavouritesRequest {
  legal_entity_id: string;
}

export interface FavouritesState {
  favourites: FavouritesObject[];
  loading: boolean;
  error: string | null;
}

export interface FavouritesResponsePost {
  message: string;
  data: FavouritesObject;
}
