import {
  LiquidatedByAgeChartResponse,
  LiquidatedByAgeChartState,
} from '@app/store/types/dashboard/LiquidatedByAgeChartTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';
import axios from 'axios';

const initialState: LiquidatedByAgeChartState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForLiquidatedByAgeChartSoleTrade = createAsyncThunk<LiquidatedByAgeChartResponse, RequestData>(
  'doGetDataForLiquidatedByAgeChart',
  async ({ filters }) => {
    try {
      const baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY_PERIOD_ACTIVITY() +
        DASH.SOLE_TRADE +
        DASH.LIQUIDATED_ENTITY +
        DASH.DATE_AFTER_LIQUIDATED('2010-01-01') +
        DASH.IS_NULL_FALSE('period_activity');
      const url = constructorUrlForDashboard(baseUrl, filters, false, true);

      const response = await httpDashboard.get(url + DASH.ORDERING_AGG('company_status_from_dttm__year'));
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('request canceled');
      } else {
        console.log(error);
      }
    }
  },
);

const liquidatedByAgeChartSoleTradeSlice = createSlice({
  name: 'liquidatedByAgeChartSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForLiquidatedByAgeChartSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForLiquidatedByAgeChartSoleTrade.fulfilled, (state, action) => {
      state.results = action.payload?.results;
      state.loading = false;
    });
  },
});

export default liquidatedByAgeChartSoleTradeSlice.reducer;
