import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate, getDateLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { httpDashboard } from '@app/api/http.api';
import axios from 'axios';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetCountBankruptedYear = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetCountBankruptedYear',
  async ({ filters }) => {
    try {
      const currentDate = getCurrentDate();
      const lastYearDate = getDateLastYear();
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.LEGAL_ENTITY +
          DASH.STATUS_BP +
          DASH.DATE_AFTER_LIQUIDATED(lastYearDate) +
          DASH.DATE_BEFORE_LIQUIDATED(currentDate),
        filters,
        true,
        false,
      );
      const response = await httpDashboard.get(url);
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('request canceled');
      } else {
        console.log(error);
      }
    }
  },
);

const bankruptedYearSlice = createSlice({
  name: 'bankruptedYear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCountBankruptedYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCountBankruptedYear.fulfilled, (state, action) => {
      state.count = action.payload?.count;
      state.loading = false;
    });
  },
});

export default bankruptedYearSlice.reducer;
