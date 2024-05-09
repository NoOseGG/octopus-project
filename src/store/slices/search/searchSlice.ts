import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN_NAME, URLS } from '@app/constants/Constants';
import { readToken } from '@app/services/localStorage.service';
import { httpSearch } from '@app/api/http.api';

export let searchController: AbortController | undefined;

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

export const doSearch = createAsyncThunk<Data, string>('auth/doSearch', async (query, { rejectWithValue }) => {
  try {
    if (!!searchController) {
      console.log('abort111');
      searchController.abort();
    }
    searchController = new AbortController();
    const response = await httpSearch.get(URLS.SEARCH, {
      params: { val: query },
      signal: searchController.signal,
    });

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('cancel');
      return;
    }
    if (axios.isAxiosError(error)) {
      const responseError: SearchError | undefined = error.response?.data;
      if (responseError) {
        const errorMessage: string | null = responseError.detail;
        // dispatch(clearSearchData());
        console.log(222);
        return rejectWithValue(errorMessage);
      } else {
        // dispatch(clearSearchData());
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
      console.log('pending');
      state.loading = true;
      state.error = null;
    });
    builder.addCase(doSearch.fulfilled, (state, action) => {
      console.log('fullfilled');
      state.data = action.payload
        ? action.payload
        : {
            count: 0,
            next: null,
            previous: null,
            results: [],
          };
      state.loading = false;
      state.error = null;
    });
    builder.addCase(doSearch.rejected, (state, action) => {
      console.log('rejected');
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
