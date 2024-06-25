import { IJumpSettlementObject, IJumpSettlementState } from '@app/store/types/dashboard/JumpTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';

const initialState: IJumpSettlementState = {
  jumps: [],
  isLoading: false,
  error: null,
};

export const doGetJumpSettlement = createAsyncThunk<IJumpSettlementObject[]>('doGetJumpSettlement', async () => {
  const response = await httpDashboard.get(
    DASH.BASE_JUMP_SETTLEMENT + DASH.PAGE_SIZE(100) + DASH.JUMP_SETTLEMENT_LEGAL_ENTITY,
  );
  return response.data;
});

const jumpSettlementSlice = createSlice({
  name: 'jumpSettlementSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetJumpSettlement.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doGetJumpSettlement.fulfilled, (state, action) => {
      console.log(action.payload);
      state.jumps = action.payload?.sort((a, b) => {
        if (b.reg_year !== a.reg_year) {
          return b.reg_year - a.reg_year;
        }
        return parseInt(b.reg_month, 10) - parseInt(a.reg_month, 10);
      });
      state.isLoading = false;
    });
    builder.addCase(doGetJumpSettlement.rejected, (state) => {
      state.jumps = [];
      state.isLoading = false;
    });
  },
});

export default jumpSettlementSlice.reducer;
