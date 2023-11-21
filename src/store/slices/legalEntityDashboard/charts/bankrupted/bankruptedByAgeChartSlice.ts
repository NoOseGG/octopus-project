import {
  LiquidatedByAgeChartResponse,
  LiquidatedByAgeChartState,
} from '@app/store/types/dashboard/LiquidatedByAgeChartTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';

const initialState: LiquidatedByAgeChartState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForBankruptedByAgeChart = createAsyncThunk<LiquidatedByAgeChartResponse, RequestData>(
  'doGetDataForBankruptedByAgeChart',
  async ({ filters }) => {
    try {
      const baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY_PERIOD_ACTIVITY() +
        DASH.LEGAL_ENTITY +
        DASH.STATUS_BP +
        DASH.DATE_AFTER_LIQUIDATED('2010-01-01') +
        DASH.IS_NULL_FALSE('period_activity');
      const url = constructorUrlForDashboard(baseUrl, filters, false, true);

      const response = await axios.get(url + DASH.ORDERING_AGG('company_status_from_dttm__year'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const bankruptedByAgeChartSlice = createSlice({
  name: 'bankruptedByAgeChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForBankruptedByAgeChart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForBankruptedByAgeChart.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.loading = false;
    });
  },
});

export default bankruptedByAgeChartSlice.reducer;
