import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getPastMonth, getPastMonthFromDate, sortDataByMonth } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { LiquidatedResponseColumnChart } from '@app/store/types/dashboard/LiquidatedChartsTypes';
import { ColumnChartMonthState } from '@app/store/types/dashboard/ColumnChartMonthTypes';
import { httpDashboard } from '@app/api/http.api';
import axios from 'axios';

const initialState: ColumnChartMonthState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForBankruptedColumnChart = createAsyncThunk<LiquidatedResponseColumnChart, RequestData>(
  'doGetDataForBankruptedColumnChart',
  async ({ filters }) => {
    try {
      let baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_status_from_dttm__month') +
        DASH.LEGAL_ENTITY +
        DASH.STATUS_BP;
      if (filters.isDate && filters.toDate !== null) {
        const month = getPastMonthFromDate(5, new Date(filters.toDate));
        baseUrl += DASH.DATE_AFTER_LIQUIDATED(month);
        baseUrl += DASH.DATE_BEFORE_LIQUIDATED(filters.toDate);
      } else {
        const month = getPastMonth(5);
        baseUrl += DASH.DATE_AFTER_LIQUIDATED(`${month}-01`);
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, false);
      const response = await httpDashboard.get(url + DASH.ORDERING_AGG('company_status_from_dttm__month'));
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

const bankruptedColumnChartSlice = createSlice({
  name: 'bankruptedColumnChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForBankruptedColumnChart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForBankruptedColumnChart.fulfilled, (state, action) => {
      const data = action.payload?.results?.map((item) => {
        return {
          type: item.group_fields.company_status_from_dttm__month,
          sales: item.Count,
        };
      });
      state.results = data ? sortDataByMonth(data) : [];
      state.loading = false;
    });
  },
});

export default bankruptedColumnChartSlice.reducer;
