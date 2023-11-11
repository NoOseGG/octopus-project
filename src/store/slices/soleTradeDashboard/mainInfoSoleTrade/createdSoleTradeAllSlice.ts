import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountCreatedSoleTrade = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountCreatedSoleTrade',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(DASH.BASE + DASH.SOLE_TRADE, filters, true, true);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const createdSoleTradeAllSlice = createSlice({
  name: 'createdSoleTradeAll',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountCreatedSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountCreatedSoleTrade.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default createdSoleTradeAllSlice.reducer;
