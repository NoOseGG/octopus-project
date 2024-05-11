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

export const doGetBankruptedByAgeAvgAge = createAsyncThunk<ResponseCurrentByAvgAge, RequestData>(
  'doGetBankruptedByAgeAvgAge',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_AVERAGE +
          DASH.AVG_FIELD('age_short') +
          DASH.LEGAL_ENTITY +
          DASH.STATUS_BP +
          DASH.ORDERING_AGG('-avg') +
          DASH.GROUP_BY('company_status_code'),
        filters,
        false,
        false,
      );
      const response = await httpDashboard.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const bankruptedAvgAgeSlice = createSlice({
  name: 'bankruptedAvgAge',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetBankruptedByAgeAvgAge.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetBankruptedByAgeAvgAge.fulfilled, (state, action) => {
      if (action.payload) {
        state.count = action.payload?.results[0]?.Avg;
      } else {
        state.count = 0;
      }
      state.loading = false;
    });
  },
});

export default bankruptedAvgAgeSlice.reducer;
