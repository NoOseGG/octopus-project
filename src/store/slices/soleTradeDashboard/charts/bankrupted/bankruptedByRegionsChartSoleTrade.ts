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

export const doGetDataForBankruptedByRegionsChartSoleTrade = createAsyncThunk<
  BankruptedByRegionsChartResponse,
  RequestData
>('doGetDataForBankruptedByRegionsChartSoleTrade', async ({ filters }) => {
  try {
    const baseUrl =
      DASH.BASE +
      DASH.AGR_COUNT +
      DASH.GROUP_BY('address_region') +
      DASH.SOLE_TRADE +
      DASH.STATUS_BP +
      DASH.DATE_AFTER_LIQUIDATED('2010-01-01');
    const url = constructorUrlForDashboard(baseUrl, filters, false, true);

    const response = await axios.get(url + DASH.ORDERING_AGG('Count'));
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const bankruptedByRegionsChartSoleTradeSlice = createSlice({
  name: 'bankruptedByRegionsChartSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForBankruptedByRegionsChartSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForBankruptedByRegionsChartSoleTrade.fulfilled, (state, action) => {
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

export default bankruptedByRegionsChartSoleTradeSlice.reducer;
