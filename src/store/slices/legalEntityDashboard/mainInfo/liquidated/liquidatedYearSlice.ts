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

export const doGetCountLiquidatedYear = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetCountLiquidatedYear',
  async ({ filters }) => {
    const currentDate = getCurrentDate();
    const lastYearDate = getDateLastYear();
    const url = constructorUrlForDashboard(
      DASH.BASE +
        DASH.LEGAL_ENTITY +
        DASH.LIQUIDATED_ENTITY +
        DASH.DATE_AFTER_LIQUIDATED(lastYearDate) +
        DASH.DATE_BEFORE_LIQUIDATED(currentDate),
      filters,
      true,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const liquidatedYearSlice = createSlice({
  name: 'liquidatedYear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCountLiquidatedYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCountLiquidatedYear.fulfilled, (state, action) => {
      state.count = action.payload?.count;
      state.loading = false;
    });
    builder.addCase(doGetCountLiquidatedYear.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default liquidatedYearSlice.reducer;
