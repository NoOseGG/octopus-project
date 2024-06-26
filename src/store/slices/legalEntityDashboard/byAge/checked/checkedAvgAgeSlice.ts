import { CurrentByAvgAgeState, ResponseCurrentByAvgAge } from '@app/store/types/dashboard/CurrentByAgeType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';

const initialState: CurrentByAvgAgeState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetCheckedByAgeAvgAge = createAsyncThunk<ResponseCurrentByAvgAge, RequestData>(
  'doGetCheckedByAgeAvgAge',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(
      DASH.BASE_INSPECTION +
        DASH.AGR_AVERAGE +
        DASH.AVG_FIELD('age_short') +
        DASH.LEGAL_ENTITY +
        DASH.GROUP_BY('company_status_code') +
        DASH.ORDERING_AGG('-avg'),
      filters,
      false,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const checkedAvgAgeSlice = createSlice({
  name: 'checkedAvgAge',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCheckedByAgeAvgAge.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCheckedByAgeAvgAge.fulfilled, (state, action) => {
      state.count =
        action.payload?.results?.reduce((accumulator, currentValue) => accumulator + currentValue.Avg, 0) /
        action.payload?.results?.length;
      state.loading = false;
    });
    builder.addCase(doGetCheckedByAgeAvgAge.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default checkedAvgAgeSlice.reducer;
