import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate, getDateLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { httpDashboard } from '@app/api/http.api';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetCountLiquidatedYearSoleTrade = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetCountLiquidatedYearSoleTrade',
  async ({ filters }) => {
    try {
      const currentDate = getCurrentDate();
      const lastYearDate = getDateLastYear();
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.SOLE_TRADE +
          DASH.LIQUIDATED_ENTITY +
          DASH.DATE_AFTER_LIQUIDATED(lastYearDate) +
          DASH.DATE_BEFORE_LIQUIDATED(currentDate),
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

const liquidatedSoleTradeYearSlice = createSlice({
  name: 'liquidatedSoleTradeYear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCountLiquidatedYearSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCountLiquidatedYearSoleTrade.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default liquidatedSoleTradeYearSlice.reducer;
