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

export const doGetTotalCountCheckedLiquidatedSoleTrade = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountCheckedLiquidatedSoleTrade',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(
      DASH.BASE_INSPECTION + DASH.SOLE_TRADE + DASH.LIQUIDATED_ENTITY + DASH.IS_NULL_FALSE('inspection_dttm'),
      filters,
      true,
      true,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const checkedLiquidatedSoleTradeSlice = createSlice({
  name: 'checkedLiquidatedSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountCheckedLiquidatedSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountCheckedLiquidatedSoleTrade.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
    builder.addCase(doGetTotalCountCheckedLiquidatedSoleTrade.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default checkedLiquidatedSoleTradeSlice.reducer;
