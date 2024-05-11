import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import {
  CheckedBySettlementsChartResponse,
  CheckedBySettlementsChartState,
} from '@app/store/types/dashboard/ChekcedBySettlementsChartTypes';
import { httpDashboard } from '@app/api/http.api';

const initialState: CheckedBySettlementsChartState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForCheckedBySettlementsChartSoleTrade = createAsyncThunk<
  CheckedBySettlementsChartResponse,
  RequestData
>('doGetDataForCheckedBySettlementsChartSoleTrade', async ({ filters }) => {
  const baseUrl =
    DASH.BASE_INSPECTION +
    DASH.AGR_COUNT +
    DASH.GROUP_BY('address_settlement') +
    DASH.PAGE_SIZE(10000) +
    DASH.IS_NULL_FALSE('address_settlement') +
    DASH.SOLE_TRADE +
    DASH.IS_NULL_FALSE('inspection_dttm');
  const url = constructorUrlForDashboard(baseUrl, filters, false, true);

  const response = await httpDashboard.get(url + DASH.ORDERING_AGG('-Count'));
  return response.data;
});

const checkedBySettlementsChartSoleTradeSlice = createSlice({
  name: 'checkedBySettlementsChartSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForCheckedBySettlementsChartSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForCheckedBySettlementsChartSoleTrade.fulfilled, (state, action) => {
      state.results = action.payload?.results?.map((item) => {
        return {
          type: item.group_fields.address_settlement,
          value: item.Count,
        };
      });
      state.loading = false;
    });
    builder.addCase(doGetDataForCheckedBySettlementsChartSoleTrade.rejected, (state) => {
      state.results = [];
      state.loading = false;
    });
  },
});

export default checkedBySettlementsChartSoleTradeSlice.reducer;
