import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { LineChartYearsState } from '@app/store/types/dashboard/LineChartYearsTypes';
import { CheckedResponseLineChart } from '@app/store/types/dashboard/CheckedLineChart';

const initialState: LineChartYearsState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForCheckedLineChart = createAsyncThunk<CheckedResponseLineChart, RequestData>(
  'doGetDataForCheckedLineChart',
  async ({ filters }) => {
    try {
      const currentDate = getCurrentDate();
      let baseUrl = DASH.BASE_INSPECTION + DASH.AGR_COUNT + DASH.GROUP_BY('inspection_dttm__year') + DASH.LEGAL_ENTITY;
      if (!filters.isDate) {
        baseUrl += DASH.DATE_BEFORE_INSPECTION(currentDate);
        baseUrl += DASH.DATE_AFTER_INSPECTION('2000-01-01');
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, true);

      const response = await axios.get(url + DASH.ORDERING_AGG('inspection_dttm__year'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const liquidatedLineChartSlice = createSlice({
  name: 'LiquidatedLineChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForCheckedLineChart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForCheckedLineChart.fulfilled, (state, action) => {
      state.results = action.payload.results.map((item) => {
        return {
          type: item.group_fields.inspection_dttm__year,
          sales: item.Count,
        };
      });
      state.loading = false;
    });
  },
});

export default liquidatedLineChartSlice.reducer;
