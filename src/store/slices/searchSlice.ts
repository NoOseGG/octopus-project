import { createSlice } from '@reduxjs/toolkit';

export interface Organization {
  unn: string;
  date_reg: string;
  full_name: string;
  full_address: string;
  status_code: string;
  status_name: string;
}

interface SearchState {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Organization[];
  };
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  data: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  loading: false,
  error: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setData: (state, action) => {
      console.log(`SETDATA ${action.payload}`);
      state.data = action.payload;
    },
  },
});

export const { setData } = searchSlice.actions;
export default searchSlice.reducer;
