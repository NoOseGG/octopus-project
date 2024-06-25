export interface FeedbackResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: FeedbackObject[];
}

export interface FeedbackObject {
  created_at: string;
  message: string;
}

export interface FeedbackState {
  feedbacks: FeedbackObject[];
  loading: boolean;
  error: string | null;
}

export interface FeedbackRequest {
  name: string;
  message: string;
}
