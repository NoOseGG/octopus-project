import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountCheckedLiquidatedSoleTrade = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountCheckedLiquidatedSoleTrade',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE_INSPECTION + DASH.SOLE_TRADE + DASH.LIQUIDATED_ENTITY + DASH.IS_NULL_FALSE('inspection_dttm'),
        filters,
        true,
        true,
      );
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const checkedLiquidatedSoleTradeSlice = createSlice({
  name: 'checkedLiquidatedSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountCheckedLiquidatedSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountCheckedLiquidatedSoleTrade.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default checkedLiquidatedSoleTradeSlice.reducer;
