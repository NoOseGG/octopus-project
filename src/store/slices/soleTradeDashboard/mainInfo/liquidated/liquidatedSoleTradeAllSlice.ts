import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { httpDashboard } from '@app/api/http.api';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountLiquidatedSoleTrade = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountLiquidatedSoleTrade',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(DASH.BASE + DASH.SOLE_TRADE + DASH.LIQUIDATED_ENTITY, filters, true, true);
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const liquidatedSoleTradeAllSlice = createSlice({
  name: 'liquidatedSoleTradeAll',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountLiquidatedSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountLiquidatedSoleTrade.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
    builder.addCase(doGetTotalCountLiquidatedSoleTrade.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default liquidatedSoleTradeAllSlice.reducer;
