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

export const doGetTotalCountOperatingCompany = createAsyncThunk<ResponseMainInfo, RequestData>(
  'getTotalCountOperatingCompany',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_AT, filters, true, true);

    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const createdOperatingSlice = createSlice({
  name: 'createdYear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountOperatingCompany.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountOperatingCompany.fulfilled, (state, action) => {
      state.count = action.payload?.count;
      state.loading = false;
    });
    builder.addCase(doGetTotalCountOperatingCompany.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default createdOperatingSlice.reducer;
