import { IJumpTypeActivityObject, IJumpTypeActivityState } from '@app/store/types/dashboard/JumpTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';

const initialState: IJumpTypeActivityState = {
  jumps: [],
  isLoading: false,
  error: null,
};

export const doGetJumpTypeActivity = createAsyncThunk<IJumpTypeActivityObject[]>('doGetJumpTypeActivity', async () => {
  const response = await httpDashboard.get(
    DASH.BASE_JUMP_TYPE_ACTIVITY + DASH.PAGE_SIZE(100) + DASH.JUMP_SETTLEMENT_LEGAL_ENTITY,
  );
  return response.data;
});

const jumpTypeActivitySlice = createSlice({
  name: 'jumpTypeActivitySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetJumpTypeActivity.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doGetJumpTypeActivity.fulfilled, (state, action) => {
      state.jumps = action.payload.sort((a, b) => {
        if (b.reg_year !== a.reg_year) {
          return b.reg_year - a.reg_year;
        }
        return parseInt(b.reg_month, 10) - parseInt(a.reg_month, 10);
      });
      state.isLoading = false;
    });
    builder.addCase(doGetJumpTypeActivity.rejected, (state) => {
      state.jumps = [];
      state.isLoading = false;
    });
  },
});

export default jumpTypeActivitySlice.reducer;
