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
  unn: string;
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
  unn: '',
  loading: false,
  error: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.data = initialState.data;
      state.error = action.payload;
    },
    setSubjectUnn: (state, action) => {
      console.log(`SET UNN = ${action.payload}`);
      state.unn = action.payload;
    },
  },
});

export const { setData, setError, setSubjectUnn } = searchSlice.actions;
export default searchSlice.reducer;
