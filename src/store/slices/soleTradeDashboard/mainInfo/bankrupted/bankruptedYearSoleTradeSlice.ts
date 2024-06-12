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

export const doGetCountBankruptedYearSoleTrade = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetCountBankruptedYearSoleTrade',
  async ({ filters }) => {
    const currentDate = getCurrentDate();
    const lastYearDate = getDateLastYear();
    const url = constructorUrlForDashboard(
      DASH.BASE +
        DASH.SOLE_TRADE +
        DASH.STATUS_BP +
        DASH.DATE_AFTER_LIQUIDATED(lastYearDate) +
        DASH.DATE_BEFORE_LIQUIDATED(currentDate),
      filters,
      true,
      false,
    );
    const response = await httpDashboard.get(url);
    console.log(url);
    return response.data;
  },
);

const bankruptedYearSoleTradeSlice = createSlice({
  name: 'bankruptedYearSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCountBankruptedYearSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCountBankruptedYearSoleTrade.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
    builder.addCase(doGetCountBankruptedYearSoleTrade.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default bankruptedYearSoleTradeSlice.reducer;
