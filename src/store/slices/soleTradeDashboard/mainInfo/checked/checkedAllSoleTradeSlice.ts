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

export const doGetTotalCountCheckedSoleTrade = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountCheckedSoleTrade',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE_INSPECTION + DASH.SOLE_TRADE + DASH.IS_NULL_FALSE('inspection_dttm'),
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

const checkedAllSoleTradeSlice = createSlice({
  name: 'checkedAllSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountCheckedSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountCheckedSoleTrade.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default checkedAllSoleTradeSlice.reducer;
