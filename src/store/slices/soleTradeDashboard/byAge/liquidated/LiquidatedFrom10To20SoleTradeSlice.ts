import { CurrentByAgeState, ResponseCurrentByAge } from '@app/store/types/dashboard/CurrentByAgeType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';

const initialState: CurrentByAgeState = {
  age: 0,
  loading: false,
  error: null,
};

export const doGetLiquidatedByAgeFrom10To20SoleTrade = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetLiquidatedByAgeFrom10To20SoleTrade',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.LIQUIDATED_ENTITY + DASH.AGE_RANGE(10, 20),
        filters,
        true,
        false,
      );
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const liquidatedByAgeFrom10To20SoleTradeSlice = createSlice({
  name: 'liquidatedByAgeFrom10To20SoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetLiquidatedByAgeFrom10To20SoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetLiquidatedByAgeFrom10To20SoleTrade.fulfilled, (state, action) => {
      state.age = action.payload.count;
      state.loading = false;
    });
  },
});

export default liquidatedByAgeFrom10To20SoleTradeSlice.reducer;
