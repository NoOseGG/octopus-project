export interface TypeActivityObject {
  group_fields: {
    type_activity_name: string;
  };
  Count: number;
}

export interface TypeActivityType {
  results: TypeActivityObject[];
}

export interface TypeActivityState {
  typeActivities: TypeActivityType;
  loading: boolean;
  error: string | null;
}
