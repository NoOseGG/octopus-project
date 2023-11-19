import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountLiquidatedSoleTradeLastYear = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountLiquidatedSoleTradeLastYear',
  async ({ filters }) => {
    try {
      const year = getCurrentYear();
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.LIQUIDATED_ENTITY + DASH.DATE_AFTER_LIQUIDATED(`${year}-01-01`),
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

const liquidatedSoleTradeYearSlice = createSlice({
  name: 'liquidatedSoleTradeYear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountLiquidatedSoleTradeLastYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountLiquidatedSoleTradeLastYear.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default liquidatedSoleTradeYearSlice.reducer;
