export interface IJumpSettlementState {
  jumps: IJumpSettlementResponse;
  isLoading: boolean;
  error: string | null;
}

export interface IJumpSettlementResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IJumpSettlementObject[];
}

interface IJumpSettlementObject {
  id: number;
  settlement: string;
  legal_form_id: string;
  count_reg: number;
  avg_reg: number;
  reg_month: string;
  reg_year: number;
  type_reg: string;
}
