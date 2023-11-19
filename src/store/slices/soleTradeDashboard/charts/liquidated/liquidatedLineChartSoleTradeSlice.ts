import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { LiquidatedResponseLineChart } from '@app/store/types/dashboard/LiquidatedChartsTypes';
import { LineChartYearsState } from '@app/store/types/dashboard/LineChartYearsTypes';

const initialState: LineChartYearsState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForLiquidatedLineChartSoleTrade = createAsyncThunk<LiquidatedResponseLineChart, RequestData>(
  'doGetDataForLiquidatedLineChartSoleTrade',
  async ({ filters }) => {
    try {
      const currentDate = getCurrentDate();
      let baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_status_from_dttm__year') +
        DASH.SOLE_TRADE +
        DASH.LIQUIDATED_ENTITY;
      if (!filters.isDate) {
        baseUrl += DASH.DATE_BEFORE_LIQUIDATED(currentDate);
        baseUrl += DASH.DATE_AFTER_LIQUIDATED('2000-01-01');
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, true);

      const response = await axios.get(url + DASH.ORDERING_AGG('company_status_from_dttm__year'));

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const liquidatedLineChartSoleTradeSlice = createSlice({
  name: 'liquidatedLineChartSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForLiquidatedLineChartSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForLiquidatedLineChartSoleTrade.fulfilled, (state, action) => {
      state.results = action.payload.results.map((item) => {
        return {
          year: item.group_fields.company_status_from_dttm__year,
          count: item.Count,
        };
      });
      state.loading = false;
    });
  },
});

export default liquidatedLineChartSoleTradeSlice.reducer;
