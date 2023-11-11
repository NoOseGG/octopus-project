import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getPastMonth, getPastMonthFromDate } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import {
  LiquidatedColumnChartState,
  LiquidatedResponseColumnChart,
} from '@app/store/types/dashboard/LiquidatedChartsTypes';

const initialState: LiquidatedColumnChartState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForLiquidatedColumnChartSoleTrade = createAsyncThunk<LiquidatedResponseColumnChart, RequestData>(
  'doGetDataForLiquidatedColumnChartSoleTrade',
  async ({ filters }) => {
    try {
      let baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_status_from_dttm__month') +
        DASH.SOLE_TRADE +
        DASH.LIQUIDATED_ENTITY;

      if (filters.isDate && filters.toDate !== null) {
        const month = getPastMonthFromDate(6, new Date(filters.toDate));
        baseUrl += DASH.DATE_AFTER_LIQUIDATED(month);
        baseUrl += DASH.DATE_BEFORE_LIQUIDATED(filters.toDate);
      } else {
        const month = getPastMonth(6);
        console.log(month);
        baseUrl += DASH.DATE_AFTER_LIQUIDATED(`${month}-01`);
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, false);
      console.log(url);
      const response = await axios.get(url + DASH.ORDERING_AGG('company_status_from_dttm__month'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const liquidatedColumnChartSoleTradeSlice = createSlice({
  name: 'liquidatedColumnChartSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForLiquidatedColumnChartSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForLiquidatedColumnChartSoleTrade.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.loading = false;
    });
  },
});

export default liquidatedColumnChartSoleTradeSlice.reducer;
