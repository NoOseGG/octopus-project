import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { LineChartYearsState } from '@app/store/types/dashboard/LineChartYearsTypes';
import { BankruptedResponseLineChart } from '@app/store/types/dashboard/BankruptedChartsTypes';

const initialState: LineChartYearsState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForBankruptedLineChart = createAsyncThunk<BankruptedResponseLineChart, RequestData>(
  'doGetDataForBankruptedLineChart',
  async ({ filters }) => {
    try {
      const currentDate = getCurrentDate();
      let baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_status_from_dttm__year') +
        DASH.LEGAL_ENTITY +
        DASH.STATUS_BP;
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

const bankruptedLineChartSlice = createSlice({
  name: 'bankruptedLineChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForBankruptedLineChart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForBankruptedLineChart.fulfilled, (state, action) => {
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

export default bankruptedLineChartSlice.reducer;
