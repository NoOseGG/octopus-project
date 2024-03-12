import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate, getDateLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetCountCreatedYearSoleTrade = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetCountCreatedYearSoleTrade',
  async ({ filters }) => {
    try {
      const currentDate = getCurrentDate();
      const lastYearDate = getDateLastYear();
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.DATE_AFTER(lastYearDate) + DASH.DATE_BEFORE(currentDate),
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

const createdSoleTradeYearSlice = createSlice({
  name: 'createdSoleTradeYear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCountCreatedYearSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCountCreatedYearSoleTrade.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default createdSoleTradeYearSlice.reducer;
