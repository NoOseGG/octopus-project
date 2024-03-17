import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { httpDashboard } from '@app/api/http.api';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountCreated = createAsyncThunk<ResponseMainInfo, RequestData>(
  'getTotalCountCreated',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY, filters, true, true);
      const response = await httpDashboard.get(url);
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
