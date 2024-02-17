import { FeedbackResponse, FeedbackState } from '@app/store/types/feedback/FeedbackTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN_NAME, URLS } from '@app/constants/Constants';
import { readToken } from '@app/services/localStorage.service';

const initialState: FeedbackState = {
  feedbacks: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  loading: false,
  error: null,
};

export const doGetFeedbacks = createAsyncThunk<FeedbackResponse>('doGetFeedbacks', async () => {
  try {
    const response = await axios.get(URLS.FEEDBACK, {
      headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
    });
    console.log(URLS.FEEDBACK);
    console.log(JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const feedbackSlice = createSlice({
  name: 'feedbackSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetFeedbacks.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(doGetFeedbacks.fulfilled, (state, action) => {
      state.feedbacks = action.payload;
      state.loading = false;
      state.error = null;
    });
  },
});

export default feedbackSlice.reducer;
