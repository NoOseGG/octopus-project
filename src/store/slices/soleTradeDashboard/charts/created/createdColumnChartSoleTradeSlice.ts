import { ColumnChartState, ResponseColumnChart } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getPastMonth, getPastMonthFromDate } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';

const initialState: ColumnChartState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForColumnChartSoleTrade = createAsyncThunk<ResponseColumnChart, RequestData>(
  'doGetDataForColumnChartSoleTrade',
  async ({ filters }) => {
    try {
      let baseUrl = DASH.BASE + DASH.AGR_COUNT + DASH.GROUP_BY('company_date_registration__month') + DASH.SOLE_TRADE;

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

const createdLColumnChartSoleTradeSlice = createSlice({
  name: 'createdLColumnChartSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForColumnChartSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForColumnChartSoleTrade.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.loading = false;
    });
  },
});

export default createdLColumnChartSoleTradeSlice.reducer;
