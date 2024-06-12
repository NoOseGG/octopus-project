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

export const doGetBankruptedByAgeFrom10To20SoleTrade = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetBankruptedByAgeFrom10To20SoleTrade',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(
      DASH.BASE + DASH.SOLE_TRADE + DASH.STATUS_BP + DASH.AGE_RANGE(10, 20),
      filters,
      true,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const bankruptedByAgeFrom10To20SoleTradeSlice = createSlice({
  name: 'bankruptedByAgeFrom10To20SoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetBankruptedByAgeFrom10To20SoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetBankruptedByAgeFrom10To20SoleTrade.fulfilled, (state, action) => {
      state.age = action.payload.count;
      state.loading = false;
    });
    builder.addCase(doGetBankruptedByAgeFrom10To20SoleTrade.rejected, (state) => {
      state.age = 0;
      state.loading = false;
    });
  },
});

export default bankruptedByAgeFrom10To20SoleTradeSlice.reducer;
