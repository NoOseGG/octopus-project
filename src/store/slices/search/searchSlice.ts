import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { CancelTokenSource } from 'axios';
import { TOKEN_NAME, URLS } from '@app/constants/Constants';
import { readToken } from '@app/services/localStorage.service';

let source: CancelTokenSource | undefined;

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
  error: string | null;
}

interface SearchError {
  detail: string;
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

export const doSearch = createAsyncThunk<Data, string>('auth/doSearch', async (query: string, { rejectWithValue }) => {
  try {
    if (source !== undefined) {
      source?.cancel();
    }
    source = axios.CancelToken.source();

    const response = await axios.get(URLS.SEARCH, {
      headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
      params: { val: query },
      cancelToken: source.token,
    });

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      return;
    }
    if (axios.isAxiosError(error)) {
      const responseError: SearchError | undefined = error.response?.data;
      if (responseError) {
        const errorMessage: string | null = responseError.detail;
        return rejectWithValue(errorMessage);
      } else {
        console.log('Ошибка запрос', error.message);
        return rejectWithValue('');
      }
    }
  }
});

export const doNewPage = createAsyncThunk<Data, string>(
  'auth/doNewPage',
  async (newPage: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(newPage, {
        headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue('Ошибка');
    }
  },
);

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
    clearSearchData: (state) => {
      state.data = {
        count: 0,
        next: null,
        previous: null,
        results: [],
      };
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doSearch.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(doSearch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(doSearch.rejected, (state, action) => {
      state.data.results = [];
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = null;
      }
      state.loading = false;
    });
    builder.addCase(doNewPage.pending, (state) => {
      state.data = initialState.data;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(doNewPage.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(doNewPage.rejected, (state, action) => {
      state.data = initialState.data;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = null;
      }
      state.loading = false;
    });
  },
});

export const { setData, setError, setSubjectUnn, clearSearchData } = searchSlice.actions;
export default searchSlice.reducer;
