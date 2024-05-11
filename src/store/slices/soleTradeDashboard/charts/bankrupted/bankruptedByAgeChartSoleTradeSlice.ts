import {
  LiquidatedByAgeChartResponse,
  LiquidatedByAgeChartState,
} from '@app/store/types/dashboard/LiquidatedByAgeChartTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';

const initialState: LiquidatedByAgeChartState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForBankruptedByAgeChartSoleTrade = createAsyncThunk<LiquidatedByAgeChartResponse, RequestData>(
  'doGetDataForBankruptedByAgeChartSoleTrade',
  async ({ filters }) => {
    const baseUrl =
      DASH.BASE +
      DASH.AGR_COUNT +
      DASH.GROUP_BY_PERIOD_ACTIVITY() +
      DASH.SOLE_TRADE +
      DASH.STATUS_BP +
      DASH.DATE_AFTER_LIQUIDATED('2010-01-01') +
      DASH.IS_NULL_FALSE('period_activity');
    const url = constructorUrlForDashboard(baseUrl, filters, false, true);

    const response = await httpDashboard.get(url + DASH.ORDERING_AGG('company_status_from_dttm__year'));
    return response.data;
  },
);

const bankruptedByAgeChartSoleTradeSlice = createSlice({
  name: 'bankruptedByAgeChartSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForBankruptedByAgeChartSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForBankruptedByAgeChartSoleTrade.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.loading = false;
    });
    builder.addCase(doGetDataForBankruptedByAgeChartSoleTrade.rejected, (state) => {
      state.results = [];
      state.loading = false;
    });
  },
});

export default bankruptedByAgeChartSoleTradeSlice.reducer;
