import { ResponseLineChart } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { LineChartYearsState } from '@app/store/types/dashboard/LineChartYearsTypes';

const initialState: LineChartYearsState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForLineChartSoleTrade = createAsyncThunk<ResponseLineChart, RequestData>(
  'doGetDataForLineChartSoleTrade',
  async ({ filters }) => {
    try {
      const currentDate = getCurrentDate();
      let baseUrl = DASH.BASE + DASH.AGR_COUNT + DASH.GROUP_BY('company_date_registration__year') + DASH.SOLE_TRADE;
      if (!filters.isDate) {
        baseUrl += DASH.DATE_BEFORE(currentDate);
        baseUrl += DASH.DATE_AFTER('2000-01-01');
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, true);

      const response = await axios.get(url + DASH.ORDERING_AGG('company_date_registration__year'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const createdLineChartSoleTradeSlice = createSlice({
  name: 'createdLineChartSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForLineChartSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForLineChartSoleTrade.fulfilled, (state, action) => {
      state.results = action.payload.results.map((item) => {
        return {
          year: item.group_fields.company_date_registration__year,
          count: item.Count,
        };
      });
      state.loading = false;
    });
  },
});

export default createdLineChartSoleTradeSlice.reducer;
