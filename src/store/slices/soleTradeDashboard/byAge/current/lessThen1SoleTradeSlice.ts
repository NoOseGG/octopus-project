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

export const doGetCurrentByAgeLessThen1SoleTrade = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetCurrentByAgeLessThen1SoleTrade',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(
      DASH.BASE + DASH.SOLE_TRADE + DASH.STATUS_AT + DASH.AGE_RANGE(0, 1),
      filters,
      true,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const currentByAgeLessThen1SoleTradeSlice = createSlice({
  name: 'currentByAgeLessThen1SoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCurrentByAgeLessThen1SoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCurrentByAgeLessThen1SoleTrade.fulfilled, (state, action) => {
      state.age = action.payload.count;
      state.loading = false;
    });
    builder.addCase(doGetCurrentByAgeLessThen1SoleTrade.rejected, (state) => {
      state.age = 0;
      state.loading = false;
    });
  },
});

export default currentByAgeLessThen1SoleTradeSlice.reducer;
