import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import {
  BankruptedByRegionsChartResponse,
  BankruptedByRegionsChartState,
} from '@app/store/types/dashboard/bankruptedByRegionsChartTypes';

const initialState: BankruptedByRegionsChartState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForBankruptedByRegionsChart = createAsyncThunk<BankruptedByRegionsChartResponse, RequestData>(
  'doGetDataForBankruptedByRegionsChart',
  async ({ filters }) => {
    try {
      const baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('address_region') +
        DASH.LEGAL_ENTITY +
        DASH.STATUS_BP +
        DASH.DATE_AFTER_LIQUIDATED('2010-01-01');
      const url = constructorUrlForDashboard(baseUrl, filters, false, true);

      const response = await axios.get(url + DASH.ORDERING_AGG('Count'));
      console.log(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const bankruptedByRegionsChartSlice = createSlice({
  name: 'bankruptedByRegionsChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForBankruptedByRegionsChart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForBankruptedByRegionsChart.fulfilled, (state, action) => {
      state.results = action.payload?.results?.map((item) => {
        return {
          type: item.group_fields.address_region,
          value: item.Count,
        };
      });
      state.loading = false;
    });
  },
});

export default bankruptedByRegionsChartSlice.reducer;
