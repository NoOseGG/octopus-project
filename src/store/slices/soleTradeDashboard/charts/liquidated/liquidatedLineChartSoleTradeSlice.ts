import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { LiquidatedResponseLineChart } from '@app/store/types/dashboard/LiquidatedChartsTypes';
import { LineChartYearsState } from '@app/store/types/dashboard/LineChartYearsTypes';
import { httpDashboard } from '@app/api/http.api';

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

      const response = await httpDashboard.get(url + DASH.ORDERING_AGG('company_status_from_dttm__year'));

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
          type: item.group_fields.company_status_from_dttm__year,
          sales: item.Count,
        };
      });
      state.loading = false;
    });
  },
});

export default liquidatedLineChartSoleTradeSlice.reducer;
