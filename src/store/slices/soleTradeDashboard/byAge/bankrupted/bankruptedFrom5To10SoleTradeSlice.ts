import { CurrentByAgeState, ResponseCurrentByAge } from '@app/store/types/dashboard/CurrentByAgeType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { httpDashboard } from "@app/api/http.api";

const initialState: CurrentByAgeState = {
  age: 0,
  loading: false,
  error: null,
};

export const doGetBankruptedByAgeFrom5To10SoleTrade = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetBankruptedByAgeFrom5To10SoleTrade',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.STATUS_BP + DASH.AGE_RANGE(5, 10),
        filters,
        true,
        false,
      );
      const response = await httpDashboard.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const bankruptedFrom5To10SoleTradeSlice = createSlice({
  name: 'bankruptedFrom5To10SoleTradeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetBankruptedByAgeFrom5To10SoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetBankruptedByAgeFrom5To10SoleTrade.fulfilled, (state, action) => {
      state.age = action.payload.count;
      state.loading = false;
    });
  },
});

export default bankruptedFrom5To10SoleTradeSlice.reducer;
