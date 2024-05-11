import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getDateLastQuarter } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { httpDashboard } from '@app/api/http.api';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountLiquidatedSoleTradeLastQuarter = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountLiquidatedSoleTradeLastQuarter',
  async ({ filters }) => {
    const date = getDateLastQuarter();
    const url = constructorUrlForDashboard(
      DASH.BASE + DASH.SOLE_TRADE + DASH.LIQUIDATED_ENTITY + DASH.DATE_AFTER_LIQUIDATED(date),
      filters,
      true,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const liquidatedSoleTradeQuarterSlice = createSlice({
  name: 'liquidatedSoleTradeQuarter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountLiquidatedSoleTradeLastQuarter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountLiquidatedSoleTradeLastQuarter.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
    builder.addCase(doGetTotalCountLiquidatedSoleTradeLastQuarter.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default liquidatedSoleTradeQuarterSlice.reducer;
