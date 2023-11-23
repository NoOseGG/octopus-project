import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getPastMonth, getPastMonthFromDate } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { CheckedColumnChartState, CheckedResponseColumnChart } from '@app/store/types/dashboard/CheckedColumnChart';

const initialState: CheckedColumnChartState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForCheckedColumnChart = createAsyncThunk<CheckedResponseColumnChart, RequestData>(
  'doGetDataForCheckedColumnChart',
  async ({ filters }) => {
    try {
      let baseUrl = DASH.BASE_INSPECTION + DASH.AGR_COUNT + DASH.GROUP_BY('inspection_dttm__month') + DASH.LEGAL_ENTITY;

      if (filters.isDate && filters.toDate !== null) {
        const month = getPastMonthFromDate(6, new Date(filters.toDate));
        baseUrl += DASH.DATE_AFTER_INSPECTION(month);
        baseUrl += DASH.DATE_BEFORE_INSPECTION(filters.toDate);
      } else {
        const month = getPastMonth(6);
        baseUrl += DASH.DATE_AFTER_INSPECTION(`${month}-01`);
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, false);
      const response = await axios.get(url + DASH.ORDERING_AGG('inspection_dttm__month'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const checkedColumnChartSlice = createSlice({
  name: 'checkedColumnChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForCheckedColumnChart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForCheckedColumnChart.fulfilled, (state, action) => {
      state.results = action.payload.results.map((item) => {
        return {
          type: item.group_fields.inspection_dttm__month,
          sales: item.Count,
        };
      });
      state.loading = false;
    });
  },
});

export default checkedColumnChartSlice.reducer;
