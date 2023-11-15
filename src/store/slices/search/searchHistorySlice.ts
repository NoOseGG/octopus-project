import { ResponseSearchHistory, SearchHistoryState } from '@app/store/types/search/SearchHistory';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN_NAME, URLS } from '@app/constants/Constants';
import { readToken } from '@app/services/localStorage.service';

const initialState: SearchHistoryState = {
  history: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  loading: false,
  error: null,
};

export const doGetSearchHistory = createAsyncThunk<ResponseSearchHistory>('doGetSearchHistory', async () => {
  try {
    const response = await axios.get(URLS.SEARCH_HISTORY, {
      headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetSearchHistory.fulfilled, (state, action) => {
      state.history = action.payload;
    });
  },
});

export default searchHistorySlice.reducer;
