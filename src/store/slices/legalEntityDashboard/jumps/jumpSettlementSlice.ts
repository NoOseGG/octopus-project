import { IJumpSettlementResponse, IJumpSettlementState } from '@app/store/types/dashboard/JumpTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';

const initialState: IJumpSettlementState = {
  jumps: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  isLoading: false,
  error: null,
};

export const doGetJumpSettlement = createAsyncThunk<IJumpSettlementResponse>('doGetJumpSettlement', async () => {
  try {
    const response = await httpDashboard.get(DASH.BASE_JUMP_SETTLEMENT);
    return response.data;
  } catch (error) {
    console.log(error);
  }
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
      state.jumps = action.payload;
      state.isLoading = false;
    });
  },
});

export default jumpSettlementSlice.reducer;
