import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getDateLastQuarter } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountLiquidatedSoleTradeLastQuarter = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountLiquidatedSoleTradeLastQuarter',
  async ({ filters }) => {
    try {
      const date = getDateLastQuarter();
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.LIQUIDATED_ENTITY + DASH.DATE_AFTER_LIQUIDATED(date),
        filters,
        true,
        false,
      );
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const liquidatedSoleTradeQuarterSlice = createSlice({
  name: 'liquidatedSoleTradeQuarter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountLiquidatedSoleTradeLastQuarter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountLiquidatedSoleTradeLastQuarter.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default liquidatedSoleTradeQuarterSlice.reducer;
