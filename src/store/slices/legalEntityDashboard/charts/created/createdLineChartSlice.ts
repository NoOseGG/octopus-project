import { ResponseLineChart } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { LineChartYearsState } from '@app/store/types/dashboard/LineChartYearsTypes';
import { httpDashboard } from '@app/api/http.api';

const initialState: LineChartYearsState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForLineChart = createAsyncThunk<ResponseLineChart, RequestData>(
  'doGetDataForLineChart',
  async ({ filters }) => {
    try {
      const currentDate = getCurrentDate();
      let baseUrl = DASH.BASE + DASH.AGR_COUNT + DASH.GROUP_BY('company_date_registration__year') + DASH.LEGAL_ENTITY;
      if (!filters.isDate) {
        baseUrl += DASH.DATE_BEFORE(currentDate);
        baseUrl += DASH.DATE_AFTER('2000-01-01');
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, true);

      const response = await httpDashboard.get(url + DASH.ORDERING_AGG('company_date_registration__year'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const createdLineChartSlice = createSlice({
  name: 'createdLineChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForLineChart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForLineChart.fulfilled, (state, action) => {
      state.results = action.payload.results.map((item) => {
        return {
          type: item.group_fields.company_date_registration__year,
          sales: item.Count,
        };
      });
      state.loading = false;
    });
  },
});

export default createdLineChartSlice.reducer;
