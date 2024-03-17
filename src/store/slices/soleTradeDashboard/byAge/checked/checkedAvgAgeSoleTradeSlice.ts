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

export const doGetCheckedByAgeAvgAgeSoleTrade = createAsyncThunk<ResponseCurrentByAvgAge, RequestData>(
  'doGetCheckedByAgeAvgAgeSoleTrade',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE_INSPECTION +
          DASH.AGR_AVERAGE +
          DASH.AVG_FIELD('age_short') +
          DASH.SOLE_TRADE +
          DASH.GROUP_BY('company_status_code') +
          DASH.ORDERING_AGG('-avg'),
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

const checkedAvgAgeSoleTradeSlice = createSlice({
  name: 'checkedAvgAgeSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCheckedByAgeAvgAgeSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCheckedByAgeAvgAgeSoleTrade.fulfilled, (state, action) => {
      state.count =
        action.payload?.results?.reduce((accumulator, currentValue) => accumulator + currentValue.Avg, 0) /
        action.payload?.results?.length;
      state.loading = false;
    });
  },
});

export default checkedAvgAgeSoleTradeSlice.reducer;
