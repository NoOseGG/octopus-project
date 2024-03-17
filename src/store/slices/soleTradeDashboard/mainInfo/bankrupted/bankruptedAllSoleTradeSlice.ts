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

export const doGetTotalCountBankruptedSoleTrade = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountBankruptedSoleTrade',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(DASH.BASE + DASH.SOLE_TRADE + DASH.STATUS_BP, filters, true, true);
      const response = await httpDashboard.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const bankruptedAllSoleTradeSlice = createSlice({
  name: 'bankruptedAllSole',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountBankruptedSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountBankruptedSoleTrade.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default bankruptedAllSoleTradeSlice.reducer;
