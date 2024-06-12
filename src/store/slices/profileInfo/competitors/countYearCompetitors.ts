import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrentDate, getDateLastYear } from '@app/utils/utils';
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

export const doCountYearsCompetitors = createAsyncThunk<ICountCompetitorResponse, ICompetitorRequestData>(
  'doCountYearsCompetitors',
  async ({ settlement, typeActivity }) => {
    try {
      const currentDate = getCurrentDate();
      const lastYearDate = getDateLastYear();
      const url =
        DASH.BASE +
        DASH.DATE_AFTER(lastYearDate) +
        DASH.DATE_BEFORE(currentDate) +
        DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
        DASH.TYPE_ACTIVITY(typeActivity) +
        DASH.COUNT;
      const response = await httpDashboard.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const countYearCompetitorsSlice = createSlice({
  name: 'countYearCompetitors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doCountYearsCompetitors.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doCountYearsCompetitors.fulfilled, (state, action) => {
      state.count = action.payload?.count;
      state.isLoading = false;
    });
  },
});

export default countYearCompetitorsSlice.reducer;
