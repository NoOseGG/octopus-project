import { IJumpTypeActivityObject, IJumpTypeActivityState } from '@app/store/types/dashboard/JumpTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';

const initialState: IJumpTypeActivityState = {
  jumps: [],
  isLoading: false,
  error: null,
};

export const doGetJumpTypeActivitySoleTrade = createAsyncThunk<IJumpTypeActivityObject[]>(
  'doGetJumpTypeActivitySoleTrade',
  async () => {
    const response = await httpDashboard.get(
      DASH.BASE_JUMP_TYPE_ACTIVITY + DASH.PAGE_SIZE(100) + DASH.JUMP_SETTLEMENT_SOLE_TRADE,
    );
    return response.data;
  },
);

const jumpTypeActivitySoleTradeSlice = createSlice({
  name: 'jumpTypeActivitySoleTradeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetJumpTypeActivitySoleTrade.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doGetJumpTypeActivitySoleTrade.fulfilled, (state, action) => {
      state.jumps = action.payload.sort((a, b) => {
        if (b.reg_year !== a.reg_year) {
          return b.reg_year - a.reg_year;
        }
        return parseInt(b.reg_month, 10) - parseInt(a.reg_month, 10);
      });
      state.isLoading = false;
    });
    builder.addCase(doGetJumpTypeActivitySoleTrade.rejected, (state) => {
      state.jumps = [];
      state.isLoading = false;
    });
  },
});

export default jumpTypeActivitySoleTradeSlice.reducer;
