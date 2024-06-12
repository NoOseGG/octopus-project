import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate, getDateLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { httpDashboard } from '@app/api/http.api';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetCountCreatedYearSoleTrade = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetCountCreatedYearSoleTrade',
  async ({ filters }) => {
    const currentDate = getCurrentDate();
    const lastYearDate = getDateLastYear();
    const url = constructorUrlForDashboard(
      DASH.BASE + DASH.SOLE_TRADE + DASH.DATE_AFTER(lastYearDate) + DASH.DATE_BEFORE(currentDate),
      filters,
      true,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
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
    builder.addCase(doGetCountCreatedYearSoleTrade.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default createdSoleTradeYearSlice.reducer;
