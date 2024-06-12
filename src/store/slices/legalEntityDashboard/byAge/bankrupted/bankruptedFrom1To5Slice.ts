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

export const doGetBankruptedByAgeFrom1To5 = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetBankruptedByAgeFrom1To5',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(
      DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_BP + DASH.AGE_RANGE(1, 5),
      filters,
      true,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const bankruptedFrom1To5Slice = createSlice({
  name: 'bankruptedFrom1To5',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetBankruptedByAgeFrom1To5.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetBankruptedByAgeFrom1To5.fulfilled, (state, action) => {
      state.age = action.payload?.count;
      state.loading = false;
    });
    builder.addCase(doGetBankruptedByAgeFrom1To5.rejected, (state) => {
      state.age = 0;
      state.loading = false;
    });
  },
});

export default bankruptedFrom1To5Slice.reducer;
