import { ResponseColumnChart } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getPastMonth, getPastMonthFromDate } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { ColumnChartMonthState } from '@app/store/types/dashboard/ColumnChartMonthTypes';

const initialState: ColumnChartMonthState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForColumnChart = createAsyncThunk<ResponseColumnChart, RequestData>(
  'doGetDataForColumnChart',
  async ({ filters }) => {
    try {
      let baseUrl = DASH.BASE + DASH.AGR_COUNT + DASH.GROUP_BY('company_date_registration__month') + DASH.LEGAL_ENTITY;

      if (filters.isDate && filters.toDate !== null) {
        const month = getPastMonthFromDate(6, new Date(filters.toDate));
        baseUrl += DASH.DATE_AFTER(month);
        baseUrl += DASH.DATE_BEFORE(filters.toDate);
      } else {
        const month = getPastMonth(6);
        baseUrl += DASH.DATE_AFTER(`${month}-01`);
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, false);
      const response = await axios.get(url + DASH.ORDERING_AGG('company_date_registration__month'));

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const createdLColumnChartSlice = createSlice({
  name: 'createdLColumnChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForColumnChart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForColumnChart.fulfilled, (state, action) => {
      state.results = action.payload.results.map((item) => {
        return {
          type: item.group_fields.company_date_registration__month,
          sales: item.Count,
        };
      });
      state.loading = false;
    });
  },
});

export default createdLColumnChartSlice.reducer;
