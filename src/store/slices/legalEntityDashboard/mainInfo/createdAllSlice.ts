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

export const doGetTotalCountCreated = createAsyncThunk<ResponseMainInfo, RequestData>(
  'getTotalCountCreated',
  async ({ filters, legal_entity }) => {
    try {
      const url = constructorUrlForDashboard(DASH.BASE + legal_entity, filters, true, true);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const createdAllSlice = createSlice({
  name: 'createdAll',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountCreated.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountCreated.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default createdAllSlice.reducer;
