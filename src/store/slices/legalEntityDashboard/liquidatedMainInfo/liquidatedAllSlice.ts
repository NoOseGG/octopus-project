import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountLiquidated = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountLiquidated',
  async ({ filters, legal_entity }) => {
    try {
      const url = constructorUrlForDashboard(DASH.BASE + legal_entity + DASH.LIQUIDATED_ENTITY, filters, true, true);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
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
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default liquidatedAllSlice.reducer;
