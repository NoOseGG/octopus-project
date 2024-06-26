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

//JUMP TYPE ACTIVITY

export interface IJumpTypeActivityState {
  jumps: IJumpTypeActivityResponse;
  isLoading: boolean;
  error: string | null;
}

export interface IJumpTypeActivityResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IJumpTypeActivityObject[];
}

interface IJumpTypeActivityObject {
  id: number;
  type_activity_name: string;
  legal_form_id: string;
  count_reg: number;
  avg_reg: number;
  reg_month: string;
  reg_year: number;
  type_reg: string;
}
