import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard, getCurrentDate } from '@app/utils/utils';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import {
  DetailedInformationState,
  ResponseDetailedInformation,
} from '@app/store/types/dashboard/DetailedInformationType';

const initialState: DetailedInformationState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetCheckedDetailedSoleTrade = createAsyncThunk<ResponseDetailedInformation, RequestData>(
  'doGetCheckedDetailedSoleTrade',
  async ({ filters }) => {
    try {
      const date = getCurrentDate();
      const url = constructorUrlForDashboard(
        DASH.BASE_INSPECTION +
          DASH.PAGE_SIZE(30) +
          DASH.SOLE_TRADE +
          DASH.DATE_BEFORE_INSPECTION(date) +
          DASH.ORDERING('-inspection_dttm') +
          DASH.IS_NULL_FALSE('inspection_dttm'),
        filters,
        false,
        false,
      );

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const checkedDetailedSoleTradeSlice = createSlice({
  name: 'checkedDetailedSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCheckedDetailedSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCheckedDetailedSoleTrade.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.loading = false;
    });
  },
});

export default checkedDetailedSoleTradeSlice.reducer;
