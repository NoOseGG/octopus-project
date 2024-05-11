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

export const doGetTotalCountLiquidated = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountLiquidated',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY + DASH.LIQUIDATED_ENTITY, filters, true, true);
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const liquidatedAllSlice = createSlice({
  name: 'liquidatedAll',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountLiquidated.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountLiquidated.fulfilled, (state, action) => {
      state.count = action.payload?.count;
      state.loading = false;
    });
    builder.addCase(doGetTotalCountLiquidated.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default liquidatedAllSlice.reducer;
