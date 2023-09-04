import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  data: {
    results: any[];
  };
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  data: {
    results: [],
  },
  loading: false,
  error: null,
};

export const doSearch = createAsyncThunk('profile_search', (payload, { dispatch }) => {
  return {
    payload: {},
  };
});

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doSearch.fulfilled, (state, action) => {
      // state.data = action.payload;
    });
  },
});

export default searchSlice.reducer;
