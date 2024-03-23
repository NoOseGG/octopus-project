import { IJumpSettlementResponse, IJumpSettlementState } from '@app/store/types/dashboard/JumpTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';
import axios from 'axios';

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
    const response = await httpDashboard.get(
      DASH.BASE_JUMP_SETTLEMENT + DASH.PAGE_SIZE(100) + DASH.JUMP_SETTLEMENT_LEGAL_ENTITY,
    );
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('request canceled');
    } else {
      console.log(error);
    }
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
      state.jumps.count = action.payload?.count;
      state.jumps.next = action.payload?.next;
      state.jumps.previous = action.payload?.previous;
      state.jumps.results = action.payload?.results?.sort((a, b) => {
        if (b.reg_year !== a.reg_year) {
          return b.reg_year - a.reg_year;
        }
        return parseInt(b.reg_month, 10) - parseInt(a.reg_month, 10);
      });
      state.isLoading = false;
    });
  },
});

export default jumpSettlementSlice.reducer;
