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

export const doGetCurrentByAgeAvgAgeSoleTrade = createAsyncThunk<ResponseCurrentByAvgAge, RequestData>(
  'doGetCurrentByAgeAvgAgeSoleTrade',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(
      DASH.BASE +
        DASH.AGR_AVERAGE +
        DASH.AVG_FIELD('age_short') +
        DASH.SOLE_TRADE +
        DASH.STATUS_AT +
        DASH.ORDERING_AGG('-avg') +
        DASH.GROUP_BY('company_status_code'),
      filters,
      false,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const currentByAgeAvgAgeSoleTradeSlice = createSlice({
  name: 'currentByAgeAvgAgeSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCurrentByAgeAvgAgeSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCurrentByAgeAvgAgeSoleTrade.fulfilled, (state, action) => {
      state.count = action.payload?.results[0]?.Avg;
      state.loading = false;
    });
    builder.addCase(doGetCurrentByAgeAvgAgeSoleTrade.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default currentByAgeAvgAgeSoleTradeSlice.reducer;
