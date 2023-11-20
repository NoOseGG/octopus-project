import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getDateLastQuarter } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountCreatedSoleTradeLastQuarter = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountCreatedSoleTradeLastQuarter',
  async ({ filters }) => {
    try {
      const date = getDateLastQuarter();
      const url = constructorUrlForDashboard(DASH.BASE + DASH.SOLE_TRADE + DASH.DATE_AFTER(date), filters, true, false);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
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
  },
});

export default createdSoleTradeQuarterSlice.reducer;
