import { CurrentByAgeState, ResponseCurrentByAge } from '@app/store/types/dashboard/CurrentByAgeType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';

const initialState: CurrentByAgeState = {
  age: 0,
  loading: false,
  error: null,
};

export const doGetLiquidatedByAgeFrom5To10SoleTrade = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetLiquidatedByAgeFrom5To10SoleTrade',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.LIQUIDATED_ENTITY + DASH.AGE_RANGE(5, 10),
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

const liquidatedFrom5To10SoleTradeSlice = createSlice({
  name: 'liquidatedFrom5To10SoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetLiquidatedByAgeFrom5To10SoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetLiquidatedByAgeFrom5To10SoleTrade.fulfilled, (state, action) => {
      state.age = action.payload.count;
      state.loading = false;
    });
  },
});

export default liquidatedFrom5To10SoleTradeSlice.reducer;
