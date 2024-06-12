import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getDateLastQuarter } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { httpDashboard } from '@app/api/http.api';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountCreatedSoleTradeLastQuarter = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountCreatedSoleTradeLastQuarter',
  async ({ filters }) => {
    const date = getDateLastQuarter();
    const url = constructorUrlForDashboard(DASH.BASE + DASH.SOLE_TRADE + DASH.DATE_AFTER(date), filters, true, false);
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const createdSoleTradeQuarterSlice = createSlice({
  name: 'createdSoleTradeQuarter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountCreatedSoleTradeLastQuarter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountCreatedSoleTradeLastQuarter.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
    builder.addCase(doGetTotalCountCreatedSoleTradeLastQuarter.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default createdSoleTradeQuarterSlice.reducer;
