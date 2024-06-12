import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { httpDashboard } from '@app/api/http.api';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountChecked = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountChecked',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(
      DASH.BASE_INSPECTION + DASH.LEGAL_ENTITY + DASH.IS_NULL_FALSE('inspection_dttm'),
      filters,
      true,
      true,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const checkedAllSlice = createSlice({
  name: 'checkedAll',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountChecked.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountChecked.fulfilled, (state, action) => {
      state.count = action.payload?.count;
      state.loading = false;
    });
    builder.addCase(doGetTotalCountChecked.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default checkedAllSlice.reducer;
