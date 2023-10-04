import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN_NAME, URLS } from '@app/constants/Constants';
import { readToken } from '@app/services/localStorage.service';

export interface Organization {
  unn: string;
  date_reg: string;
  full_name: string;
  full_address: string;
  status_code: string;
  status_name: string;
}

interface Data {
  count: number;
  next: string | null;
  previous: string | null;
  results: Organization[];
}

interface SearchState {
  data: Data;
  unn: string;
  loading: boolean;
  error: boolean;
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
  error: false,
};

export const doSearch = createAsyncThunk<Data, string>('auth/doSearch', async (query: string, { rejectWithValue }) => {
  try {
    const response = await axios.get(URLS.SEARCH, {
      headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
      params: { val: query },
    });

    return response.data;
  } catch (error) {
    return rejectWithValue('');
  }
});

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
      state.unn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doSearch.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(doSearch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(doSearch.rejected, (state) => {
      state.data = initialState.data;
      state.error = true;
      state.loading = false;
    });
  },
});

export const { setData, setError, setSubjectUnn } = searchSlice.actions;
export default searchSlice.reducer;
