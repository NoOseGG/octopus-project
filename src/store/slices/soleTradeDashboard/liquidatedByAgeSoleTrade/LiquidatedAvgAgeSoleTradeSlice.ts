import { CurrentByAvgAgeState, ResponseCurrentByAvgAge } from '@app/store/types/dashboard/CurrentByAgeType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';

const initialState: CurrentByAvgAgeState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetLiquidatedByAgeAvgAgeSoleTrade = createAsyncThunk<ResponseCurrentByAvgAge, RequestData>(
  'doGetLiquidatedByAgeAvgAgeSoleTrade',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_AVERAGE +
          DASH.AVG_FIELD('age_short') +
          DASH.SOLE_TRADE +
          DASH.LIQUIDATED_ENTITY +
          DASH.ORDERING_AGG('-avg') +
          DASH.GROUP_BY('company_status_code'),
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

const liquidatedAvgAgeSoleTradeSlice = createSlice({
  name: 'liquidatedAvgAgeSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetLiquidatedByAgeAvgAgeSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetLiquidatedByAgeAvgAgeSoleTrade.fulfilled, (state, action) => {
      state.count = action.payload?.results[0]?.Avg;
      state.loading = false;
    });
  },
});

export default liquidatedAvgAgeSoleTradeSlice.reducer;
