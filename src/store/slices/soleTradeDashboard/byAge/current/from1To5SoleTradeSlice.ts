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

export const doGetCurrentByAgeFrom1To5SoleTrade = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetCurrentByAgeFrom1To5SoleTrade',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.STATUS_AT + DASH.AGE_RANGE(1, 5),
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

const currentByAgeFrom1To5SoleTradeSlice = createSlice({
  name: 'currentByAgeFrom1To5SoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCurrentByAgeFrom1To5SoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCurrentByAgeFrom1To5SoleTrade.fulfilled, (state, action) => {
      state.age = action.payload.count;
      state.loading = false;
    });
  },
});

export default currentByAgeFrom1To5SoleTradeSlice.reducer;
