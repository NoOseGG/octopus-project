import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getDateLastQuarter } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { httpDashboard } from '@app/api/http.api';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetCountBankruptedQuarter = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetCountBankruptedQuarter',
  async ({ filters }) => {
    const date = getDateLastQuarter();
    const url = constructorUrlForDashboard(
      DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_BP + DASH.DATE_AFTER_LIQUIDATED(date),
      filters,
      true,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const bankruptedQuarterSlice = createSlice({
  name: 'bankruptedQuarter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCountBankruptedQuarter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCountBankruptedQuarter.fulfilled, (state, action) => {
      state.count = action.payload?.count;
      state.loading = false;
    });
    builder.addCase(doGetCountBankruptedQuarter.rejected, (state) => {
      state.count = 0;
      state.loading = false;
    });
  },
});

export default bankruptedQuarterSlice.reducer;
