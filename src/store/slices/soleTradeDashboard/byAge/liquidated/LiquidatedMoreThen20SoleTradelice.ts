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

export const doGetLiquidatedByAgeMoreThen20SoleTrade = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetLiquidatedCurrentByAgeMoreThen20SoleTrade',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(
      DASH.BASE + DASH.LEGAL_ENTITY + DASH.LIQUIDATED_ENTITY + DASH.AGE_RANGE(20, 100),
      filters,
      true,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const liquidatedByAgeMoreThen20SoleTradeSlice = createSlice({
  name: 'liquidatedByAgeMoreThen20SoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetLiquidatedByAgeMoreThen20SoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetLiquidatedByAgeMoreThen20SoleTrade.fulfilled, (state, action) => {
      state.age = action.payload.count;
      state.loading = false;
    });
    builder.addCase(doGetLiquidatedByAgeMoreThen20SoleTrade.rejected, (state) => {
      state.age = 0;
      state.loading = false;
    });
  },
});

export default liquidatedByAgeMoreThen20SoleTradeSlice.reducer;
