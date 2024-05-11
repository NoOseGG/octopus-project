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

export const doGetCurrentByAgeLessThen1 = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetCurrentByAgeLessThen1',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(
      DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_AT + DASH.AGE_RANGE(0, 1),
      filters,
      true,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const currentByAgeLessThen1Slice = createSlice({
  name: 'currentByAgeLessThen1',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCurrentByAgeLessThen1.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCurrentByAgeLessThen1.fulfilled, (state, action) => {
      state.age = action.payload?.count;
      state.loading = false;
    });
    builder.addCase(doGetCurrentByAgeLessThen1.rejected, (state) => {
      state.age = 0;
      state.loading = false;
    });
  },
});

export default currentByAgeLessThen1Slice.reducer;
