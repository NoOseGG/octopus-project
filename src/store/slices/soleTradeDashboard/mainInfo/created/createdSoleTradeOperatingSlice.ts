import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountSoleTradeOperatingCompany = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountSoleTradeOperatingCompany',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(DASH.BASE + DASH.SOLE_TRADE + DASH.STATUS_AT, filters, true, true);

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const createdSoleTradeOperatingSlice = createSlice({
  name: 'createdSoleTradeOperating',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountSoleTradeOperatingCompany.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountSoleTradeOperatingCompany.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default createdSoleTradeOperatingSlice.reducer;
