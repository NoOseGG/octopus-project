import { CurrentByAvgAgeState, ResponseCurrentByAvgAge } from '@app/store/types/dashboard/CurrentByAgeType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';

const initialState: CurrentByAvgAgeState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetCheckedByAgeAvgAge = createAsyncThunk<ResponseCurrentByAvgAge, RequestData>(
  'doGetCheckedByAgeAvgAge',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE_INSPECTION +
          DASH.AGR_AVERAGE +
          DASH.AVG_FIELD('age_short') +
          DASH.LEGAL_ENTITY +
          DASH.ORDERING_AGG('-avg'),
        filters,
        false,
        false,
      );
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
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
      state.count = action.payload?.results[0]?.Avg;
      state.loading = false;
    });
  },
});

export default checkedAvgAgeSlice.reducer;
