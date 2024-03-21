import { IJumpTypeActivityResponse, IJumpTypeActivityState } from '@app/store/types/dashboard/JumpTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';

const initialState: IJumpTypeActivityState = {
  jumps: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  isLoading: false,
  error: null,
};

export const doGetJumpTypeActivitySoleTrade = createAsyncThunk<IJumpTypeActivityResponse>(
  'doGetJumpTypeActivitySoleTrade',
  async () => {
    try {
      const response = await httpDashboard.get(
        DASH.BASE_JUMP_TYPE_ACTIVITY + DASH.PAGE_SIZE(100) + DASH.JUMP_SETTLEMENT_SOLE_TRADE,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
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
      state.jumps.count = action.payload.count;
      state.jumps.next = action.payload.next;
      state.jumps.previous = action.payload.previous;
      state.jumps.results = action.payload.results.sort((a, b) => {
        if (b.reg_year !== a.reg_year) {
          return b.reg_year - a.reg_year;
        }
        return parseInt(b.reg_month, 10) - parseInt(a.reg_month, 10);
      });
      state.isLoading = false;
    });
  },
});

export default jumpTypeActivitySoleTradeSlice.reducer;
