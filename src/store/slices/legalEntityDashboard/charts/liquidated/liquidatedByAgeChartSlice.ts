import {
  LiquidatedByAgeChartResponse,
  LiquidatedByAgeChartState,
} from '@app/store/types/dashboard/LiquidatedByAgeChartTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';

const initialState: LiquidatedByAgeChartState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForLiquidatedByAgeChart = createAsyncThunk<LiquidatedByAgeChartResponse, RequestData>(
  'doGetDataForLiquidatedByAgeChart',
  async ({ filters }) => {
    try {
      const baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY_PERIOD_ACTIVITY() +
        DASH.LEGAL_ENTITY +
        DASH.LIQUIDATED_ENTITY +
        DASH.DATE_AFTER_LIQUIDATED('2010-01-01') +
        DASH.IS_NULL_FALSE('period_activity');
      const url = constructorUrlForDashboard(baseUrl, filters, false, true);

      const response = await axios.get(url + DASH.ORDERING_AGG('company_status_from_dttm__year'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const liquidatedByAgeChartSlice = createSlice({
  name: 'liquidatedByAgeChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForLiquidatedByAgeChart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForLiquidatedByAgeChart.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.loading = false;
    });
  },
});

export default liquidatedByAgeChartSlice.reducer;
