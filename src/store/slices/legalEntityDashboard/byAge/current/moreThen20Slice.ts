import { CurrentByAgeState, ResponseCurrentByAge } from '@app/store/types/dashboard/CurrentByAgeType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';

const initialState: CurrentByAgeState = {
  age: 0,
  loading: false,
  error: null,
};

export const doGetCurrentByAgeMoreThen20 = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetCurrentByAgeMoreThen20',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(
      DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_AT + DASH.AGE_RANGE(20, 100),
      filters,
      true,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const currentByAgeMoreThen20Slice = createSlice({
  name: 'currentByAgeMoreThen20',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCurrentByAgeMoreThen20.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCurrentByAgeMoreThen20.fulfilled, (state, action) => {
      state.age = action.payload?.count;
      state.loading = false;
    });
    builder.addCase(doGetCurrentByAgeMoreThen20.rejected, (state) => {
      state.age = 0;
      state.loading = false;
    });
  },
});

export default currentByAgeMoreThen20Slice.reducer;
