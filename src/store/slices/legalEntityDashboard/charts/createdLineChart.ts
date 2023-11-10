import { LineChartState, ResponseLineChart } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';

const initialState: LineChartState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForLineChart = createAsyncThunk<ResponseLineChart, RequestData>(
  'doGetDataForLineChart',
  async ({ filters, legal_entity }) => {
    try {
      const currentDate = getCurrentDate();
      let baseUrl = DASH.BASE + DASH.AGR_COUNT + DASH.GROUP_BY('company_date_registration__year') + legal_entity;
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

const createdLineChartSlice = createSlice({
  name: 'createdLineChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForLineChart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForLineChart.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.loading = false;
    });
  },
});

export default createdLineChartSlice.reducer;
