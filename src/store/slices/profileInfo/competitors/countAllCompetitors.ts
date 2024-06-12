import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';
import {
  ICompetitorRequestData,
  ICountCompetitorResponse,
  ICountCompetitorState,
} from '@app/store/types/profileInfo/CompetitorTypes';

const initialState: ICountCompetitorState = {
  count: 0,
  isLoading: false,
  error: null,
};

export const doCountAllCompetitors = createAsyncThunk<ICountCompetitorResponse, ICompetitorRequestData>(
  'doCountAllCompetitors',
  async ({ settlement, typeActivity }) => {
    try {
      const url =
        DASH.BASE + DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) + DASH.TYPE_ACTIVITY(typeActivity) + DASH.COUNT;
      const response = await httpDashboard.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const countAllCompetitorsSlice = createSlice({
  name: 'countAllCompetitors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doCountAllCompetitors.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doCountAllCompetitors.fulfilled, (state, action) => {
      state.count = action.payload?.count;
      state.isLoading = false;
    });
  },
});

export default countAllCompetitorsSlice.reducer;
